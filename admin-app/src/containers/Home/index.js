import React from 'react';
import { Col, Container, Jumbotron,Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import './style.css';
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout> 
      <Container fluid>
      <Row>
          <Col md={2} className="sidebar">
            Sidebar

          

          
          </Col>
          <Col md={10} style={{marginLeft:'auto'}}>Container
          </Col>


      </Row>




      </Container>
     
        
        {/* <Jumbotron style={{margin: '5rem',background:'#fff'}} className="text-center">
            <h1>
                Welcome to Admin DashBoard
            </h1>
        </Jumbotron> */}

    </Layout>
   ) 

 }

export default Home