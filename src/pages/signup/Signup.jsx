import React from "react";
import "../login/login.css";
import TextField from "../../components/textfield/TextField";
import Textbutton from "../../components/textbutton/Textbutton";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate()

  return (
    <div className="main">
      <div className="login">
        <div className="log">
          <h1>Sign up</h1>
        </div>
        <form action="#">
          <TextField label={"Full name"} place={"Enter your full name"} id={"a"}/>
          <TextField label={"E-mail"} place={"Enter your e-mail"} id={"e"} />
          <TextField
            label={"Password"}
            place={"Enter your password"}
            id={"p"}
          />
          <TextField
            label={"Conform Password"}
            place={"Enter your password"}
            id={"p"}
          />
      
          <Button text={"Submit"} />
        </form>
        <div className="row2">
          <div className="notmember">Not a member?</div>
          <Textbutton text={"Login"} click={() => navigate('/login')} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
