"use client"

import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  ChakraProvider,
  Text,
  Button,
  GridItem,
  Grid,
} from "@chakra-ui/react";

export default function History() {
  const [history, setHistory] = useState<any[]>([])
  const [selectedTransaction, setSelectedTransaction] = useState<any | null>(null)

  async function fetchData(userId: number | string) {
    try {
      const res = await fetch(`/api/transactions/user/${userId}`)
      const t = await res.json()
      setHistory(t)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    try {
      const id = localStorage.getItem("userid")
      fetchData(id || "1")
    } catch (err) { }
  }, [])

  return (
    <Layout>
      <Heading m="5%">Action History</Heading>
      <Box w='90%' mx="auto" maxW='full'>
        <Table pl='5em' pr='2em' h='1em' maxH='1em' w='full' maxW='full' bg='green.100'>
          <Tbody>
            <Tr>
              <Th w="33%"><Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="25"
                letterSpacing="wide"
                color="green.900">Date</Text></Th>
              <Th w="33%"><Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="25"
                letterSpacing="wide"
                color="green.900">Type</Text></Th>
              <Th w="33%"><Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="25"
                letterSpacing="wide"
                color="green.900">Score</Text></Th>
            </Tr>
          </Tbody>
        </Table>
        <Box w='full' maxW='full' overflowY="auto" h="300px">
          <Grid alignItems="center" templateColumns='repeat(1, 1fr)' gap={2} mt={2} h='14em' maxH='14'>
            {history.reverse().map((transaction) => (
              <GridItem key={transaction.tid}>
                <Button onClick={() => { setSelectedTransaction(transaction) }} _hover={{ bg: "blue.200" }} maxW="100%" width="100%" bg="blue.100" px={0} color="blue.900">
                  <Table alignItems="center" pt='1em' pb='1em'>
                    <Tbody>
                      <Tr>
                        <Td w="33%">{(new Date(transaction.tdate)).toUTCString()}</Td>
                        <Td w="33%">{transaction.cname}</Td>
                        <Td w="33%">{transaction.cscore}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Button>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box display={{ md: "flex" }} w="90%" mx="auto" mb={32}>
        <Box mt={5} >
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="25"
            letterSpacing="wide"
            color="teal.600"
          >
            {selectedTransaction === null ? 'Nothing selected' : (<>{selectedTransaction.cname}</>)}
          </Text>
          <Text
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
          >
            Description:
          </Text>
          {selectedTransaction === null ? (<Text mt={2} color="gray.500"></Text>) : (<Text mt={2} color="gray.500">{selectedTransaction.cdescription}</Text>)}
        </Box>
      </Box>
    </Layout>
  );
}
