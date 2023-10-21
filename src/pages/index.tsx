import NextLink from 'next/link'
import { Box, Button, Link } from '@chakra-ui/react'
import { redirect } from 'next/navigation'
import BigLayout from '../components/layouts/BigLayout'

export default function Home() {
  return <BigLayout>
    <Box>Quest for nature</Box>
    <Box>Go to login: </Box>
    <Link as={NextLink} href="/auth/login">Login</Link>
  </BigLayout>
}


