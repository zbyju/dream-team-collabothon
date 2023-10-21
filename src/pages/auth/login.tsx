"use client";

import BigLayout from "../../components/layouts/BigLayout";
import LoginInput from "../../components/login/LoginInput";
import { useEffect, useState } from "react";
import { Center, Button, Card, CardHeader, CardBody, CardFooter, Text, Heading, Box, Link, useToast } from '@chakra-ui/react'
import { AuthInfo } from "../../types/user";

export default function Login() {
  const [username, setUsername] = useState("guest")
  const [password, setPassword] = useState("1234")
  const [auth, setAuth] = useState<AuthInfo>({ user: null, loggedIn: false })
  const toast = useToast()

  useEffect(() => {
    try {
      const username = localStorage.getItem('username');
      const id = parseInt(localStorage.getItem('userid') || "");
      if (username && id) {
        setAuth({ user: { username, id }, loggedIn: true })
      } else {
        setAuth({ user: null, loggedIn: false })
      }
    } catch (error) {
      setAuth({ user: null, loggedIn: false })
    }
  }, [])

  async function handleSubmit() {
    try {
      const res = await fetch("/api/users/name/" + username)
      if (res.status < 200 || res.status > 299) throw "Bad status code"
      toast({
        title: 'Successfully logged in',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("userid", JSON.stringify(1));
      window.location.href = "/app"
    } catch (err) {
      console.log(err)
      toast({
        title: 'Wrong username or password',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }
  return (
    <BigLayout>
      {
        auth && auth.loggedIn ? (
          <Box>
            <Heading>Already logged in as: {auth?.user?.username}</Heading>
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
