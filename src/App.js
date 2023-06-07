import { Carousel, Col, Container, Nav, Row } from "react-bootstrap";
import "./App.css";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [groupMessage, setGroupMessage] = useState([]);

  function handleOnSubmit(e) {
    e.preventDefault();
    setGroupMessage([...groupMessage, message]);
    setMessage({ name: "", email: "", message: "" });
    alert("Thanks for submit");
  }

  console.log(groupMessage);
  return (
    <div>
      <div className="nav-fix">
        <nav className="navbar">
          <a href="#" className="logo"></a>

          <input type="checkbox" id="toggler"></input>
          <label for="toggler">
            <FontAwesomeIcon icon={faBars} />
          </label>
          <div className="menu">
            <ul className="list">
              <li>
                <a href="#section1">HOME</a>
              </li>
              <li>
                <a href="#section2">ABOUT</a>
              </li>
              <li>
                <a href="#section3">SKILL</a>
              </li>
              <li>
                <a href="#section4">EXPERIENCE</a>
              </li>
              <li>
                <a href="#section5">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="bg-star">
        <div className="stars-container" id="section1">
          <div className="star">
            <img src={require("./images/star.png")} />
          </div>
          <div className="star">
            <img src={require("./images/star.png")} />
          </div>
          <div className="star">
            <img src={require("./images/star.png")} />
          </div>
          <div className="star">
            <img src={require("./images/star.png")} />
          </div>
          <div className="star">
            <img src={require("./images/star.png")} />
          </div>
          <div className="star">
            <img src={require("./images/star.png")} />
          </div>
          <div className="star">
            <img src={require("./images/star.png")} />
          </div>
          <div className="star">
            <img src={require("./images/star.png")} />
          </div>
        </div>
        <div className="introduce-box">
          <div className="introduce-text">
            <h1>
              <ReactTypingEffect
                text={["Yossapat Patumasoot"]}
                speed={150}
                eraseDelay={500}
              />
            </h1>
          </div>
          <div className="introduce-img">
            <img src={require("./images/basfull.jpg")}></img>
          </div>
        </div>
      </div>

      <Container fluid>
        <Row>
          <Col lg={6} md={6} xs={12} className="no-padding">
            <div className="box about-text" id="section2">
              <h1>About me</h1>
              <p>My name is Yossapat Patumasoot ( Bas )</p>
              <p>
                I was a Junior iSec and Network Engineer but I'm interested in
                Front End.
              </p>
              <p>
                I graduated from King Mongkut's Institute of Technology
                Ladkrabang
              </p>
              <p>B.Sc Information Technology ( Network major )</p>
            </div>
          </Col>
          <Col lg={6} md={6} xs={12} className="no-padding">
            <div className="box about-img"></div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} xs={12} className="no-padding">
            <div className="box skill-img">
              <h1>S K I L L</h1>
            </div>
          </Col>
          <Col lg={6} md={6} xs={12} className="no-padding">
            <div className="box skill-text" id="section3">
              <div className="d-flex justify-content-evenly w-100">
                <div className="skill-logo">
                  <img src={require("./images/html-logo.png")}></img>
                </div>
                <div className="skill-logo">
                  <img src={require("./images/css-logo.png")}></img>
                </div>
                <div className="skill-logo">
                  <img src={require("./images/js-logo.png")}></img>
                </div>
              </div>

              <div className="d-flex justify-content-evenly w-100">
                <div className="skill-logo">
                  <img src={require("./images/react-logo.png")}></img>
                </div>
                <div className="skill-logo">
                  <img src={require("./images/figma-logo.png")}></img>
                </div>
                <div className="skill-logo">
                  <img src={require("./images/git-logo.png")}></img>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} xs={12} className="no-padding">
            <div className="box exp-text " id="section4">
              <h1>Netpoleon Thailand</h1>
              <h3>(Junior iSec and Network Engineer)</h3>
              <p>
                Configuration of customer's preferred policies, thirdparty
                connections, customer domain joins, as well as an overview of
                dashboard management.
              </p>
              <h1>Bootcamp Westride Thailand</h1>

              <ul>
                <li>
                  <p>Basic Html, CSS and JavaScript</p>
                </li>
                <li>
                  <p>Learning Logic and problem solving</p>
                </li>
                <li>
                  <p>
                    Use React to do front-end and learn UI and UX page design.
                  </p>
                </li>
                <li>
                  <p>Can use GIT Hub to work</p>
                </li>
                <li>
                  <p>Create an Air BNB project</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} md={6} xs={12} className="no-padding">
            <div className="box exp-img">
              <h1>E X P E R I E N C E</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} xs={12} className="no-padding">
            <div className="box contact-img" id="section5">
              <form
                className="d-flex flex-column justify-content-evenly "
                onSubmit={handleOnSubmit}
              >
                <input
                  type="text"
                  placeholder="NAME"
                  value={message.name}
                  onChange={(e) => {
                    setMessage({ ...message, name: e.target.value });
                  }}
                ></input>
                <br />
                <input
                  type="email"
                  placeholder="EMAIL"
                  value={message.email}
                  onChange={(e) => {
                    setMessage({ ...message, email: e.target.value });
                  }}
                ></input>

                <textarea
                  placeholder="MESSAGE"
                  value={message.message}
                  onChange={(e) => {
                    setMessage({ ...message, message: e.target.value });
                  }}
                ></textarea>
                <div>
                  <br />
                  <button>SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={6} md={6} xs={12} className="no-padding">
            <div className="box contact-text">
              <div className="contact-text-desc">
                <img src={require("./images/add-icon.png")}></img>
                <h3>Address : Bangna, Bangkok</h3>
              </div>
              <div className="contact-text-desc">
                <img src={require("./images/phone-icon.png")}></img>
                <h3>Tel : 082 243 5695</h3>
              </div>
              <div className="contact-text-desc">
                <img src={require("./images/email-icon.png")}></img>
                <h3>Email : yossapatptms@gmail.com</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
