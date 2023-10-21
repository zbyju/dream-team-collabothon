import BigLayout from "../../components/layouts/BigLayout";
import LoginInput from "../../components/login/LoginInput";
import { useState } from "react";
import { redirect } from 'next/navigation';
import { Center, Button, Card, CardHeader, CardBody, CardFooter,Text } from '@chakra-ui/react'

export default function Login() {
  const [username, setUsername] = useState("guest")
  const [password, setPassword] = useState("guest123")

  function handleSubmit() {
    localStorage.setItem("username", JSON.stringify(username));
    //redirect('app');
  }
  return (
    <BigLayout>
      <div>
            <Card variant = 'filled' m = {50} p ={5}>
            <LoginInput label="Username:" type="username" value={username} onChange={(event) => setUsername(event.target.value)} required placeholder='your username' />
            <LoginInput label="Password:" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder='your password' />
            <Button colorScheme='blue' variant = 'outline' onClick={() => handleSubmit()} maxW = {300} m={5} ml ={100}>Login</Button>
            </Card>
      </div>
    </BigLayout>
  )
}