import Box from "../components/Box";
import LoginImage from "../components/Image";
import Title from "../components/Title";
import Form from "../components/Form";
import Input from "../components/Input";
import { useState } from "react";
import forgotComponent from "../assets/forgotpass.jpg";
import Button from "../components/Button";
import Separator from "../components/Separator";
import { Link } from "react-router-dom";
import styles from "../styles/login.module.css";

const forgotPassword = () => {
  const [forgotData, setForgotData] = useState({ email: "" });

  return (
    <div>
      <Box width="50em" height="30em">
        <LoginImage
          src={forgotComponent}
          alt="Desk"
        />
        <Form data={forgotData}>
          <Title title="Forgot password" />
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="user@gmail.com"
            data={forgotData}
            setData={setForgotData}
          />
          <Button content="Recover password" type="submit" />
          <Separator />
          <Link className={styles.link} to="/login">
            Already have an account? Login
          </Link>
        </Form>
      </Box>
    </div>
  )
}

export default forgotPassword