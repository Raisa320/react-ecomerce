import Box from "../components/Box";
import LoginImage from "../components/Image";
import Title from "../components/Title";
import Form from "../components/Form";
import Input from "../components/Input";
import loginComplement from "../assets/login-complement.jpeg";
import Button from "../components/Button";
import Separator from "../components/Separator";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/login.module.css";

const login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  return (
    <div>
      <Box>
        <LoginImage
          src={loginComplement}
          alt="Chica iniciando sesión en la página"
        />
        <Form data={loginData}>
          <Title title="Login" />
          <Input
            type="text"
            id="username"
            label="Username"
            placeholder="user123"
            data={loginData}
            setData={setLoginData}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="***********"
            data={loginData}
            setData={setLoginData}
          />
          <Button content="Log in" type="submit" />
          <Separator />
          <Link className={styles.link} to="/forgot-password">
            Forgot your password?
          </Link>
          <Link className={styles.link} to="/create-account">
            Create account
          </Link>
        </Form>
      </Box>
    </div>
  );
};

export default login;
