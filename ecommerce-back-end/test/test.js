const util = require("util");
const app = require("../src/index.server");
const chai = require("chai");
const chaiHttp = require("chai-http");
let should = chai.should();

chai.use(chaiHttp);

describe("USER TESTING", function () {
  let token;

  // Server Tests:
  it("should return string ", function (done) {
    this.timeout(10000);
    chai
      .request(app)
      .get("/")
      .end(function (err, res) {
        if (err) return done(err);
        res.should.have.status(200);
        res.body.should.have.property("message").eql("Working");

        done();
      });
  });

  //   User Tests:
  it("should say incomplete detail while creating data", function (done) {
    this.timeout(10000);

    const data = {
      firstName: "test user",
      lastName: "test",
      password: "pass123",
    };

    chai
      .request(app)
      .post("/api/signup")
      .send(data)
      .set("Accept", "application/json")
      .end(function (err, res) {
        if (err) {
          console.log(err);
          return done(err);
        }
        console.log(res.body);
        res.should.have.status(400);
        res.body.should.have.property("error").eql("valid email is required");
        done();
      });
  });

  it("should create a test user", function (done) {
    this.timeout(10000);
    const data = {
      password: "pass123",
      firstName: "test user",
      lastName: "test",
      email: "test@gmail.com",
    };

    chai
      .request(app)
      .post("/api/signup")
      .send(data)
      .set("Accept", "application/json")
      .end(function (err, res) {
        if (err) {
          console.log(err);
          return done(err);
        }
        res.should.have.status(201);
        res.body.should.have
          .property("message")
          .eql("user created successfully");

        done();
      });
  });

  it("should say user already registered", function (done) {
    this.timeout(10000);
    const data = {
      password: "pass123",
      firstName: "test user",
      lastName: "test",
      email: "test@gmail.com",
    };

    chai
      .request(app)
      .post("/api/signup")
      .send(data)
      .set("Accept", "application/json")
      .end(function (err, res) {
        if (err) {
          console.log(err);
          return done(err);
        }
        res.should.have.status(400);
        res.body.should.have.property("message").eql("User already registered");
        done();
      });
  });

  it("should respond with token for user login", function (done) {
    this.timeout(10000);
    const data = {
      email: "test@gmail.com",
      password: "pass123",
    };

    chai
      .request(app)
      .post("/api/signin")
      .send(data)
      .set("Accept", "application/json")
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        res.should.have.status(200);
        res.body.should.have.property("user");
        res.body.should.have.property("token");
        token = res.body.token;
        done();
      });
  });

  it("should fetch user", function (done) {
    this.timeout(10000);

    chai
      .request(app)
      .get("/api/fetch")
      .set("Accept", "application/json")
      .set("Authorization", "bearer " + token)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("should delete a the test user", function (done) {
    this.timeout(10000);

    chai
      .request(app)
      .delete("/api/delete")
      .set("Accept", "application/json")
      .set("Authorization", "bearer " + token)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        res.should.have.status(200);
        res.body.should.have
          .property("message")
          .eql("User Deleted Successfully");
        done();
      });
  });

  it("should say user not found", function (done) {
    this.timeout(10000);

    chai
      .request(app)
      .get("/api/fetch")
      .set("Accept", "application/json")
      .set("Authorization", "bearer " + token)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        res.should.have.status(400);
        res.body.should.have.property("message").eql("Something went wrong");
        done();
      });
  });
});
