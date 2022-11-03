import "./SignInPage.css";
import React, { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import SimpleImageSlider from "react-simple-image-slider";

export default function SignInPage() {
  console.log("We are in signinpage");
  const [isNewUser, setNewUser] = useState(false);

  const images = [
    { url: "../../assets/signup-1.png" },
    { url: "../../assets/signup-2.png" },
    { url: "../../assets/signup-3.png" },
  ];

  return (
    <div className="splitScreen">
      <div className="left">
        {isNewUser ? (
          <SignUp setNewUser={setNewUser} />
        ) : (
          <SignIn setNewUser={setNewUser} />
        )}
      </div>
      <div className="right">
        <SimpleImageSlider
          width={"50%"}
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
      </div>
    </div>
  );
}
