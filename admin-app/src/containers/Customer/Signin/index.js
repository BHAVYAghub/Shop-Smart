import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";
import Layout from "../../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../../components/UI/Input";
import { customerLogin } from "../../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

import { Redirect } from "react-router-dom";
/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = useSelector((state) => state.customerLogin);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(customerLogin(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  return (
    <React.Fragment>
      <div className="login_section1">
        <div className="login_header">
          <div className="login_logo">
            <a href="/">
              <img src={Logo} />
            </a>
          </div>
          <div className="login_name">
            <a href="/">
              <h1>WebAR</h1>
            </a>
          </div>
        </div>

        <div className="login_header2">
          <div className="login_join">
            <h3>
              {" "}
              <a href="/signup">Join our community</a>{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="login_section2">
        <div className="login_overlay">
          <div className="login_inner">
            <div className="login_form">
              <div className="login_head">
                <h2>Login Here</h2>
                <p>Give your credential below</p>
              </div>

              <form>
                <div className="login_email">
                  <input type="email" name="name" placeholder="email" />
                </div>
                <div className="login_email">
                  <input type="text" name="password" placeholder="Password" />
                </div>
                <div className="login_but">
                  <input type="submit" value="login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Layout>
        <Container>
          <Row style={{ marginTop: "200px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userLogin}>
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button variant="primary" type="submit">
                  Log In
                </Button>
                <br />
                <Link to="/customer/resetPassword" style={{ color: "white" }}>
                  Reset Password
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout> */}
    </React.Fragment>
  );
};

export default Signin;
