import Box from '../components/Box'
import Form from '../components/Form'
import Title from '../components/Title'
import Input from '../components/Input'
import { useState, useEffect } from "react";
import LoginImage from "../components/Image";
import createComponent from "../assets/createacoount.jpg";
import Button from '../components/Button';
import Separator from '../components/Separator';
import { Link } from 'react-router-dom';
import styles from "../styles/login.module.css";

const createAccount = () => {
  const json =[
    {"id":1, "name": "Admin"},
    {"id":2, "name": "Sale"},
    {"id":3, "name": "Manager"}
  ]
  const [createData, setCreateData] = useState({username:"",password:"" ,email: "" });

  return (
    <div>
      <Box>
        <LoginImage
          src={createComponent}
          alt="Desk"
        />
        <Form data={createData}>
          <Title title="Create account" />
          <Input
            type="text"
            id="username"
            label="Username"
            placeholder="Admin"
            data={createData}
            setData={setCreateData}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="***********"
            data={createData}
            setData={setCreateData}
          />
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="user@gmail.com"
            data={createData}
            setData={setCreateData}
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

export default createAccount