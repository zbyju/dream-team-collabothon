import { Box, Flex } from "@chakra-ui/react";
import Logo from "../Logo";
import NextLink from "next/link"
import { Link } from "@chakra-ui/react";
import { useState } from "react";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return <Box bg="green.100" shadow="sm">
    <Flex px={5} py={3} justify="space-between" alignItems="center">
      <Logo />
      {isLoggedIn === true ?
        <Link as={NextLink} href="/auth/logout">Logout</Link>
        :
        <Link as={NextLink} href="/auth/login">Login</Link>
      }

    </Flex>
  </Box>
}