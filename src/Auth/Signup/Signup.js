import { Link } from "react-router-dom";

import styles from "./Signup.module.scss";

import Panel, { Divider } from "../Panel/Panel";
import Form from "../../shared/components/Form/Form";
import Input from "../../shared/components/Input/Input";
import Button from "../../shared/components/Button/Button";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("SIGN UP");
  };

  return (
    <Panel title="Create account">
      <Form title="Sign Up" onSubmit={handleSignup}>
        <Input id="username" type="text" placeholder="Username" />
        <Input id="email" type="email" placeholder="Email" />
        <Input id="password" type="password" placeholder="Password" />
        <Input id="rePassword" type="password" placeholder="Confirm Password" />
        <p className={styles.signup__desc}>
          By clicking Sign Up you confirm that you are at least 13 years old and that you agree with our <Link to="#">Terms and Conditions</Link> and <Link to="#">Privacy Statement</Link>
        </p>
        <Button wide light title="Sign up" type="submit" />
      </Form>

      <Divider />
      <p>
        Already have an Account? <Link to="/login">Sign In</Link>
      </p>
    </Panel>
  );
};

export default Signup;
