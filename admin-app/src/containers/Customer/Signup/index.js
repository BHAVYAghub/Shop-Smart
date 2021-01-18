import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../../components/Layout";
import Input from "../../../components/UI/Input";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { customerSignup, auth } from "../../../actions";
import Logo from "../../../assets/img/logo.svg";
import { useEffect } from "react";
import "./signup.css";

/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (!user.loading) {
  //       setFirstName("");
  //       setLastName("");
  //       setEmail("");
  //       setPassword("");
  //     }
  //   }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(customerSignup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }
  if (user.loading) {
    return <p>Loading...!</p>;
  }

  return (
    <React.Fragment>
      <div className="signup_section1">
        <div className="signup_header">
          <div className="signup_logo">
            <a href="/">
              <img src={Logo} />
            </a>
          </div>
          <div className="signup_name">
            <a href="/">
              <h1>WebAR</h1>
            </a>
          </div>
        </div>

        <div className="signup_extra">
          <div className="signup_login">
            <h3>
              <a href="/customer/signin" style={{ color: "white" }}>
                Login
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="signup_section2">
        <div className="signup_body">
          <div className="signup_part1">
            <div className="signup_part1-head">
              <h2>Create a new Account</h2>
            </div>

            <div className="signup_part1-form">
              <form onSubmit={userSignup}>
                <div className="signup_username">
                  <h3>First Name</h3>
                </div>
                <div className="signup_ex">
                  <input
                    type="text"
                    name="First Name"
                    className="signup_name-form"
                    placeholder="Enter your Fisrt Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    id="fname"
                    required
                  />{" "}
                  <p id="message1"></p>
                </div>
                <div className="signup_username">
                  <h3>Last Name</h3>
                </div>
                <div className="signup_ex">
                  <input
                    type="text"
                    name="Last Name"
                    className="signup_name-form"
                    placeholder="Enter your Last Name"
                    id="fname"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                  />{" "}
                  <p id="message1"></p>
                </div>
                <div className="signup_email">
                  <h3>Email</h3>
                </div>
                <input
                  type="email"
                  className="signup_email-form"
                  name="email"
                  placeholder="Enter your Email id"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />

                <div className="signup_password">
                  <h3>Password</h3>
                </div>
                <input
                  type="password"
                  className="signup_pass-form"
                  name="password"
                  placeholder="Enter your Passoword"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />

                <div className="signup_policy">
                  <h5>
                    By signing up. I agree to the{" "}
                    <label className="co">Terms</label> &{" "}
                    <label className="co">Policy</label>{" "}
                  </h5>
                </div>

                <div className="signup-button">
                  <input type="submit" value="sign up" id="signup" />
                </div>
              </form>
            </div>
          </div>
          <div className="signup_part2">
            <div className="signup_overlay">
              <div className="signup_inner">
                <div className="signup_part2-head">
                  <h3>Connecting the World's diverse community of Learner</h3>
                </div>

                <div className="signup_part2-para">
                  <p>
                    "Hey connect with us to know more about the technical
                    readers club where you can learn variousvrious topics
                    through articles only"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    // <Layout>
    //   <Container>
    //     {user.message}
    //     <Row style={{ marginTop: "200px" }}>
    //       <Col md={{ span: 6, offset: 3 }}>
    //         <Form onSubmit={userSignup}>
    //           <Row>
    //             <Col md={6}>
    //               <Input
    //                 label="First Name"
    //                 placeholder="Enter First Name"
    //                 value={firstName}
    //                 type="text"
    //                 onChange={(e) => setFirstName(e.target.value)}
    //               />
    //             </Col>
    //             <Col md={6}>
    //               <Input
    //                 label="Last Name"
    //                 placeholder="Enter Last Name"
    //                 value={lastName}
    //                 type="text"
    //                 onChange={(e) => setLastName(e.target.value)}
    //               />
    //             </Col>
    //           </Row>
    //           <Input
    //             label="Email"
    //             placeholder="Email"
    //             value={email}
    //             type="email"
    //             onChange={(e) => setEmail(e.target.value)}
    //           />

    //           <Input
    //             label="Password"
    //             placeholder="Enter Password"
    //             value={password}
    //             type="password"
    //             onChange={(e) => setPassword(e.target.value)}
    //           />

    //           <Button variant="primary" type="submit">
    //             Register
    //           </Button>
    //         </Form>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Layout>
  );
};

export default Signup;
