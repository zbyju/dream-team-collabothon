import { AspectRatio, Box, Button, Center, Flex, Heading, Img, Link } from "@chakra-ui/react"
import { ReactNode } from "react"
import Image from "next/image"

interface Props {
  children: ReactNode
}

export default function BigLayout({ children }: Props) {
  return (
    <Box>
      <Box>
        <Center>
          <Img src="/images/QuestForNature.png" alt="logo" />
        </Center>
      </Box>
      <main>{children}</main>
    </Box>
  )
}
