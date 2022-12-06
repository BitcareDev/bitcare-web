import { useState } from "react";
import { SignInLink } from "./styles";
import { db } from "../../index";
import {
  collection,
  addDoc,
  query,
  orderBy,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
export default function SignUp(props) {
  const { setNewUser } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [dbError, setDBError] = useState("");

  const resetValues = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setHearAboutUs("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword)
    //   setErrorMessages({
    //     name: "confirmpass",
    //     message: "no match with password",
    //   });
    try {
      await deleteDoc(doc(db, "users", email));
      // await addDoc(collection(db, "users"), {
      //   email: email,
      //   name: fullName,
      //   password: password,
      //   phone: phone,
      // });
      resetValues();
      // onClose();
    } catch (err) {
      console.log("Error: ", err);
      alert(err);
    }

    const q = query(collection(db, "users"), orderBy("created", "desc"));
    console.log("Get users: ", q);
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  return (
    <form onSubmit={handleSubmit}>
      <img
        src="../assets/logo.png"
        style={{ marginTop: "40%", width: "50%", marginBottom: "8%" }}
      />
      {dbError && dbError !== "" ? <div className="error">{dbError}</div> : ""}
      <div className="input-container">
        <input
          type="text"
          name="fullname"
          required
          value={fullName}
          placeholder="Full name"
          onChange={(e) => setFullName(e.target.value)}
        />
        {/* {renderErrorMessage("uname")} */}
      </div>
      <div className="input-container">
        <input
          type="email"
          name="email"
          required
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* {renderErrorMessage("pass")} */}
      </div>
      <div className="input-container">
        <input
          type="text"
          name="phone"
          required
          value={phone}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
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
      <div className="input-container">
        <input
          type="password"
          name="confirmpass"
          required
          value={confirmPassword}
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {renderErrorMessage("confirmpass")}
      </div>
      <div className="input-container">
        <input
          type="text"
          name="hearaboutus"
          required
          value={hearAboutUs}
          placeholder="How did you hear about us?"
          onChange={(e) => setHearAboutUs(e.target.value)}
        />
        {/* {renderErrorMessage("pass")} */}
      </div>
      <div className="button-container">
        <input type="submit" value="Sign Up" />
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
          Already have an account?
          <SignInLink onClick={() => setNewUser(false)}>
            {" "}
            Sign in here
          </SignInLink>
        </div>
      </div>
    </form>
  );
}
