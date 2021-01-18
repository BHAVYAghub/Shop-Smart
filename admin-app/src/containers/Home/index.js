import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import Logo from "../../assets/img/logo.svg";
import Maingif from "../../assets/img/main.gif";
import p1Img from "../../assets/img/p1.jpg";
import p2Img from "../../assets/img/p2.jpg";
// / import "./style.css";
import "./home-page.css";
/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="section1">
        <div className="header">
          <div className="items">
            <div className="email">
              <p>
                Email Id : <a>WEBAR@agile.com</a>
              </p>
            </div>
            <div className="social">
              <a>
                <i className=" fa fa-facebook"></i>
              </a>
              <a>
                <i className=" fa fa-twitter"></i>
              </a>
              <a>
                <i className=" fa fa-instagram"></i>
              </a>
              <a>
                <i className=" fa fa-linkedin"></i>
              </a>
              <a>
                <i className=" fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section21">
        <div className="menu" id="navbar">
          <div className="menu-container">
            <div className="logo">
              <img src={Logo} />
              <h2>WEB AR</h2>
            </div>
            <div className="menu-items">
              <a href="/customer/signin">Login</a>
              <a href="/customer/signup">Signup</a>
              <a href="#">Admin</a>
              <a href="#down1">Reviews</a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          "z-index": "-99",
          width: "100%",
          height: "100%",
        }}
      >
        <img frameborder="0" height="600px" width="100%" src={Maingif} />

        {/* <!-- <video frameborder="0" height="100%" width="100%" autoplay controls>
        <source src="https://www.youtube.com/embed/mp3V9tuPf_0"/>
    </video> --> */}
      </div>

      <div className="section3">
        <div className="overlay">
          <div className="slider__1">
            <h2>THE GOAL OF SHOPPING</h2>
            <br />
            <h1>
              Join The Bigest
              <br />
              Comunity Of AR SUGGESTION
            </h1>
            <br />
          </div>
          <div className="slider_button">
            <div className="but1">
              <a href="#down4">LEARN MORE</a>
            </div>
            <div className="but2">
              <a href="#down3">VIEW </a>
            </div>
          </div>
        </div>
      </div>

      <div className="review">
        <a name="down1"></a>
        <div className="heading">
          <div className="head">
            <h2>Experts Review</h2>
          </div>

          <div className="para">
            <p>
              Able an hope of body. Any nay shyness article matters own removal
              nothing his forming. Gay own additions education satisfied the
              perpetual. If he cause manor happy. Without farther she exposed
              saw man led. Along on happy could cease green oh.
            </p>
          </div>
        </div>

        <div className="review_1">
          <div className="part">
            <div className="part_1">
              <img src={p1Img} />
            </div>
            <div className="part_2">
              <p>
                Procuring continued suspicion its ten. Pursuit brother are had
                fifteen distant has. Early had add equal china quiet visit.
                Appear an manner as no limits either praise..
              </p>
              <h4>Siddharth Kandola</h4>
              <span>Capitalist</span>
            </div>
          </div>

          <div className="part">
            <div className="part_1">
              <img src={p2Img} />
            </div>
            <div class="part_2">
              <p>
                Procuring continued suspicion its ten. Pursuit brother are had
                fifteen distant has. Early had add equal china quiet visit.
                Appear an manner as no limits either praise..
              </p>
              <h4>Harsh Tyagi</h4>
              <span>Market Analyst</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
