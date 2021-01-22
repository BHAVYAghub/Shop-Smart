import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../../components/Layout";
import Input from "../../../components/UI/Input";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { customerFetch } from "../../../actions";
import { useEffect } from "react";

/**
 * @author
 * @function Signup
 **/

const Profile = (props) => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");
  //   const auth = useSelector((state) => state.auth);

  const firstName = useSelector((state) => {
    return state.customerFetch.profile.firstName;
  });
  const loading = useSelector((state) => state.customerFetch.profile.loading);
  const lastName = useSelector((state) => state.customerFetch.profile.lastName);
  const email = useSelector((state) => state.customerFetch.profile.email);
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
  };

  //   if (auth.authenticate) {
  //     return <Redirect to={`/`} />;
  //   }
  if (loading) {
    return <p>Loading...!</p>;
  }

  dispatch(customerFetch());

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "200px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    type="text"
                    readOnly
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder=" Last Name"
                    value={lastName}
                    type="text"
                    readOnly
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                readOnly
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Profile;
