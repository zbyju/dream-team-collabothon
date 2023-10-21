import { Box, Button, Flex, Icon, IconButton } from "@chakra-ui/react";
import Logo from "../Logo";
import NextLink from "next/link"
import { Link } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa"
import { BsClockHistory } from "react-icons/bs"
import { IoMdAddCircle } from "react-icons/io"
import { IoStatsChartSharp } from "react-icons/io5"

export default function AppBar() {
  const btns = [
    { href: "/app", icon: FaHome },
    { href: "/app/history", icon: BsClockHistory },
    { href: "/app/add", icon: IoMdAddCircle },
    { href: "/app/stats", icon: IoStatsChartSharp }
  ]

  return <Box shadow="sm" position="fixed" w="full" bottom={0}>
    <Flex justify="center" alignItems="center" h={50}>
      {btns.map(b => (
        <Link key={b.href} as={NextLink} href={b.href} passHref flexGrow={1} h="full" bg="green.500" _hover={{ bg: "green.400" }}>
          <Flex h="full" justify="center" alignItems="center" py={3}>
            <Icon as={b.icon} w={7} h={7} m="auto" />
          </Flex>
        </Link>))}
    </Flex>
  </Box >
}
