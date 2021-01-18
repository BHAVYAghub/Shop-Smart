const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "User already registered",
      });
    const { firstName, lastName, email, password } = req.body;
    const _user = new User({
      firstName,
      lastName,
      email,
      password,

      username: Math.random().toString(),
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
      if (data) {
        return res.status(201).json({
          //user:data
          message: "user created successfully",
        });
      }
    });
  });
};
exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    // console.log(user);
    if (user) {
      if (user.authenticate(req.body.password) && user.role === "user") {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res.status(400).json({
          message: "Something Went Wrong",
        });
      }
    } else {
      return res.status(400).json({ message: "1Something went wrong" });
    }
  });
};
exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout successfully...!",
  });
};

exports.fetchUser = (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Not Authorised",
    });
  }
  // console.log(req.user);
  User.findOne({ _id: mongoose.Types.ObjectId(req.user._id) }).exec(
    (error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
        if (user.role === "user") {
          res.status(200).json({
            message: user,
          });
        } else {
          return res.status(400).json({
            message: "Something Went Wrong",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    }
  );
};

exports.resetPassword = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    // console.log(user);
    if (user) {
      if (user.role === "user") {
        user.password = req.body.password;
        user
          .save()
          .then((updatedUser) => {
            res.status(200).json({
              message: "Password Updated Successfully",
            });
          })
          .catch((err) => {
            res.status(400).json({ message: "Something went wrong" });
          });
      } else {
        return res.status(400).json({
          message: "Something Went Wrong",
        });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
};

exports.deleteUser = (req, res) => {
  User.findOne({ _id: mongoose.Types.ObjectId(req.user._id) }).exec(
    (error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
        User.findOneAndDelete({ _id: mongoose.Types.ObjectId(req.user._id) })
          .then((deletedUser) => {
            res.status(200).json({
              message: "User Deleted Successfully",
            });
          })
          .catch((err) => {
            res.status(400).json({ message: "Something went wrong" });
          });
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    }
  );
};
