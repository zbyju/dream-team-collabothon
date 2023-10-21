import { Box, Flex } from "@chakra-ui/react";
import Logo from "../Logo";
import NextLink from "next/link"
import { Link } from "@chakra-ui/react";
import { useState } from "react";

export default function AppBar() {
  return <Box bg="green.100" shadow="sm" position="fixed" w="full" bottom={0}>
    <Flex px={5} py={3} justify="space-between" alignItems="center">
      <Logo />

    </Flex>
  </Box>
}
