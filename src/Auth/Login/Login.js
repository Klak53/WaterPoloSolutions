import { Link } from "react-router-dom";

import styles from "./Login.module.scss";

import Panel, { Divider } from "../Panel/Panel";
import Form from "../../shared/components/Form/Form";
import Input from "../../shared/components/Input/Input";
import Button from "../../shared/components/Button/Button";
import Checkbox from "../../shared/components/Checkbox/Checkbox";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("LOGIN");
  };

  return (
    <Panel title="Welcome back!" subtitle="Login to continue">
      <Form title="Sign In" onSubmit={handleLogin}>
        <Input id="email" type="email" placeholder="Email" />
        <Input id="password" type="password" placeholder="Password" />
        <Checkbox id="rememberUser" name="rememberUser" label="Stay signed in" />
        <Button wide title="Sign In" type="submit" />
      </Form>

      <div className={styles.login__links}>
        <Link to="/password-reset">Forgot your password?</Link>
        <Divider />
        <p>
          Not registered yet? <Link to="/signup">Create an Account</Link>
        </p>
      </div>
    </Panel>
  );
};

export default Login;
