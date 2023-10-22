import NextLink from 'next/link'
import { Box, Button, Flex, Link } from '@chakra-ui/react'
import { redirect } from 'next/navigation'
import BigLayout from '../components/layouts/BigLayout'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = "/auth/login"
  })
  return <BigLayout>
    <Flex direction="column" alignItems="center" justify="center" mx="auto" w="90%">
      <Box>Quest for nature</Box>
      <Box>Go to login: </Box>
      <Link as={NextLink} href="/auth/login">Login</Link>
    </Flex>
  </BigLayout>
}


