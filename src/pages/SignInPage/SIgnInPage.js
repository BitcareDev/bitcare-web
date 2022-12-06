import "./SignInPage.css";
import React, { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import SimpleImageSlider from "react-simple-image-slider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SignInPage() {
  console.log("We are in signinpage");
  const [isNewUser, setNewUser] = useState(false);

  const images = [
    { url: "../../assets/signup-1.png" },
    { url: "../../assets/signup-2.png" },
    { url: "../../assets/signup-3.png" },
  ];

  console.log(
    "Resolution: " + window.screen.width + " " + window.screen.height
  );
  console.log("Resolution pixel ratio: " + window.devicePixelRatio);
  return (
    <div className="splitScreen">
      {/* <div className="left"> */}
      <Row className="row g-0">
        <Col xs="12" md lg="6">
          {isNewUser ? (
            <SignUp setNewUser={setNewUser} />
          ) : (
            <SignIn setNewUser={setNewUser} />
          )}
          {/* </div>
      <div className="right"> */}
        </Col>
        <Col
          xs="12"
          md
          lg="6"
          style={{
            background:
              "linear-gradient(to right, rgb(92 196 183) 3%, rgb(158 212 170) 100%)",
          }}
          className="right-col"
        >
          {/* if mobile mahe width to 100% */}
          <SimpleImageSlider
            width={window.screen.width < 768 ? "100%" : "50%"}
            height={"100%"}
            images={images}
            showBullets={true}
            showNavs={false}
            bgColor={
              "linear-gradient(to right, rgb(92 196 183) 3%, rgb(158 212 170) 100%)"
            }
            autoPlay={true}
            autoPlayDelay={2}
          />
        </Col>
      </Row>
      {/* </div> */}
    </div>
  );
}
