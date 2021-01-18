import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../../components/UI/Input";
import {
  customerReset,
  customerResetReinitialise,
} from "../../../actions/index";
import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const currentState = useSelector((state) => state.customerResetPassword);
  const dispatch = useDispatch();

  const resetPassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    const user = {
      password,
    };
    dispatch(customerReset(user));
  };

  if (!currentState.loading && currentState.message) {
    alert("Password is updated");
    // dispatch(customerResetReinitialise());
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "200px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={resetPassword}>
              <Input
                label="email"
                placeholder="Email"
                value={email}
                type="password"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                label="Confirm"
                placeholder="Confirm Password"
                value={confirmPassword}
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Button variant="primary" type="submit">
                Reset Password
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ResetPassword;
