import { ReactNode } from "react"
import NavBar from "../nav/NavBar"
import AppBar from "../nav/AppBar"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <AppBar />
    </>
  )
}
