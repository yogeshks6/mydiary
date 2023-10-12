import React from "react";
import "../login/login.css";
import TextField from "../../components/textfield/TextField";
import Textbutton from "../../components/textbutton/Textbutton";
import Button from "../../components/button/Button";
const Signup = () => {
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
            label={"Password"}
            place={"Enter your password"}
            id={"p"}
          />
          <div className="row">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <Textbutton
              text={"Forgot password?"}
              click={() => console.log("chch")}
            />
          </div>
          <Button text={"Submit"} />
        </form>
        <div className="row2">
          <div className="notmember">Not a member?</div>
          <Textbutton text={"Sign up"} click={() => console.log("pcfp")} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
