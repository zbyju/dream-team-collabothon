import { ReactNode, useEffect, useState } from "react"
import NavBar from "../nav/NavBar"
import AppBar from "../nav/AppBar"
import useAuth, { AuthInfo } from "../../hooks/useAuth"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const [auth, setAuth] = useState<AuthInfo>({ user: null, loggedIn: false })

  useEffect(() => {
    const a = useAuth()
    setAuth(a)
  }, [])

  return (
    <>
      <NavBar isLoggedIn={auth.loggedIn} />
      <main>{children}</main>
      <AppBar />
    </>
  )
}
