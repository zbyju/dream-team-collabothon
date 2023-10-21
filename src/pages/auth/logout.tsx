import { Button, Flex, Heading, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import BigLayout from "../../components/layouts/BigLayout";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("username")
  }, [])
  return <BigLayout>
    <Heading>You've been logged out!</Heading>

    <Flex position="fixed" bottom={0} w="full" justify="center">
      <Link href="/auth/login"><Button>Back to login.</Button></Link>
    </Flex>
  </BigLayout>
}
