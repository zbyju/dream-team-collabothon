"use client";

import BigLayout from "../../components/layouts/BigLayout";
import LoginInput from "../../components/login/LoginInput";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';
import { Center, Button, Card, CardHeader, CardBody, CardFooter, Text, Heading, Box, Link } from '@chakra-ui/react'
import useAuth, { defaultAuth } from "../../hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState("guest")
  const [password, setPassword] = useState("guest123")
  const [auth, setAuth] = useState(defaultAuth())

  useEffect(() => {
    setAuth(useAuth())
  })

  function handleSubmit() {
    localStorage.setItem("username", JSON.stringify(username));
    window.location.href = "/app"
  }
  return (
    <BigLayout>
      {
        auth.loggedIn ? (
          <Box>
            <Heading>Already logged in as: {auth.user.username}</Heading>
            <Link href="/app">Back to the homepage</Link>
          </Box>
        ) : (
          <div>
            <Card variant='filled' m={50} p={5}>
              <LoginInput label="Username:" type="username" value={username} onChange={(event) => setUsername(event.target.value)} required placeholder='your username' />
              <LoginInput label="Password:" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder='your password' />
              <Button colorScheme='blue' variant='outline' onClick={() => handleSubmit()} maxW={300} my={5}>Login</Button>
            </Card>
          </div>
        )
      }
    </BigLayout>
  )
}
