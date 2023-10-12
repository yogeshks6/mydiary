import React from "react";
import Button from "../../components/button/Button";
import "../login/login.css";
import TextField from "../../components/textfield/TextField";
import Textbutton from "../../components/textbutton/Textbutton";

const Login = () => {
  return (
    <div className="main">
      <div className="login">
        <div className="log">
          <h1>Login Now</h1>
        </div>
        <form action="#">
          <TextField label={"E-mail"} place={"Enter your e-mail"} id={"e"} />
          <TextField
            label={"Password"}
            place={"Enter your password"}
            id={"p"}
          />
          <div className="row">
            <div className="remember">
              <input type="checkbox"  />
              <label htmlFor="">Remember me</label>
            </div>
            <Textbutton
              text={"Forgot password?"}
              click={() => console.log("chch")}
            />
          </div>
            <Button text={"Login"} />
        </form>
        <div className="row2">
          <div className="notmember">
            Not a member?
          </div>
        <Textbutton text={"Sign up"} click={()=> console.log("pcfp")}/>
        </div>
      </div>
    </div>
  );
};

export default Login;
