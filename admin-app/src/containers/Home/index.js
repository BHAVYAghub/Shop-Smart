import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>

        
        <Jumbotron style={{margin: '5rem',background:'#fff'}} className="text-center">
            <h1>
                Welcome to Admin DashBoard
            </h1>
        </Jumbotron>

    </Layout>
   ) 

 }

export default Home