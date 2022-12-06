import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../index";

export default function SignIn(props) {
  const navigate = useNavigate();
  const { setNewUser } = props;
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isForgot, setForgot] = useState(false);
  // User Login info
  const database = [
    {
      username: "user1@gmail.com",
      password: "pass1",
    },
    {
      username: "user2@gmail.com",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = async (event) => {
    // console.log("Username", uname);
    // console.log("password", password);
    //Prevent page reload
    event.preventDefault();
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log("Doc data: ", doc.data());
      if (doc.data().email === uname && doc.data().password === password) {
        console.log("valid credentials");
        setErrorMessages("");
        navigate("home");
      } else setErrorMessages("Invalid username or password");
    });

    // var { uname, pass } = document.forms[0];

    // Find user login info
    // const userData = database.find((user) => user.username === uname);

    // Compare user info
    // if (userData) {
    //   if (userData.password !== password) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     // setIsSubmitted(true);
    //     navigate("home");
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <>
      {isForgot ? (
        <ForgotPassword />
      ) : (
        <form onSubmit={handleSubmit}>
          <img src="../assets/logo.png" className="logo" />
          <h1 style={{ marginBottom: "0px" }}>Welcome back</h1>
          <div className="subHeader">
            Welcome back! Please enter your details
          </div>
          {errorMessages && errorMessages !== "" ? (
            <div className="error">{errorMessages}</div>
          ) : (
            ""
          )}
          <div className="input-container">
            <input
              type="email"
              name="uname"
              required
              value={uname}
              placeholder="Email"
              onChange={(e) => setUname(e.target.value)}
            />
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <input
              type="password"
              name="pass"
              required
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <div>
            <a
              style={{
                position: "relative",
                // float: "right",
                // marginTop: "5px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "right",
              }}
              onClick={() => setForgot(true)}
            >
              Forgot password
            </a>
          </div>
          <div className="button-container">
            <input type="submit" value="Sign in" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                fontSize: "14px",
                color: "#9fab9b",
              }}
            >
              Don't have an account?
              <div
                style={{ color: "black", marginLeft: "5px" }}
                onClick={() => setNewUser(true)}
              >
                {" "}
                Sign up for free
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <img
          src="../assets/logo.png"
          style={{ marginTop: "40%", width: "50%", marginBottom: "8%" }}
        />
        <div className="input-container">
          <input
            type="text"
            name="email"
            required
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}
