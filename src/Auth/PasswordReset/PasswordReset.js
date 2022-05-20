import { Link } from "react-router-dom";

import styles from "./PasswordReset.module.scss";

import Panel, { Divider } from "../Panel/Panel";
import Form from "../../shared/components/Form/Form";
import Input from "../../shared/components/Input/Input";
import Button from "../../shared/components/Button/Button";

const PasswordReset = () => {
  const handlePasswordReset = (e) => {
    e.preventDefault();
    console.log("RESET PASSWORD");
  };

  return (
    <Panel title="Forgot your password?" subtitle="That's okay, it happens!">
      <Form onSubmit={handlePasswordReset}>
        <p className={styles.password_reset__desc}>Please enter your email address and we'll send you a link to reset your password.</p>
        <Input id="email" type="email" placeholder="Email" />
        <Button wide title="Reset Password" type="submit" />
      </Form>

      <Divider />
      <Link to="/login">Sign In</Link>
    </Panel>
  );
};

export default PasswordReset;
