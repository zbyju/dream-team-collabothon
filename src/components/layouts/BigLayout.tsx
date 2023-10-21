import { Heading, Img } from "@chakra-ui/react"
import { ReactNode } from "react"
import Image from "next/image"

interface Props {
  children: ReactNode
}

export default function BigLayout({ children }: Props) {
  return (
    <>
      <Img src="/images/QuestForNature.png" alt="logo" w="full" />
      <main>{children}</main>
    </>
  )
}
