import styles from "./Auth.module.scss";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import PasswordReset from "./PasswordReset/PasswordReset";

const Auth = ({ login, signup, passwordReset }) => {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__outter_panel}>
        <div className={styles.auth__inner_panel}>
          {login && <Login />}
          {signup && <Signup />}
          {passwordReset && <PasswordReset />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
