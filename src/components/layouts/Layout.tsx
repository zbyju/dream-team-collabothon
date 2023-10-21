"use client"

import { ReactNode, useEffect, useState } from "react"
import NavBar from "../nav/NavBar"
import AppBar from "../nav/AppBar"
import { AuthInfo } from "../../types/user"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const [auth, setAuth] = useState<AuthInfo>({ user: null, loggedIn: false })

  useEffect(() => {
    try {
      const username = localStorage.getItem('username');
      if (username) {
        setAuth({ user: { username }, loggedIn: true })
      } else {
        setAuth({ user: null, loggedIn: false })
      }
    } catch (error) {
      setAuth({ user: null, loggedIn: false })
    }
  }, [])

  return (
    <>
      <NavBar isLoggedIn={auth.loggedIn} />
      <main>{children}</main>
      <AppBar />
    </>
  )
}
