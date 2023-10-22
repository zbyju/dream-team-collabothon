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
      <Box bg='orange.200' h='1em'></Box>
      <Box bg='orange.200' h='15em' maxHeight="15em" w='full' maxW='full'>
        <Table pl='5em' pr='2em' h='1em' maxH='1em' w='full' maxW='full' bg='red.100'>
          <Tr>
            <Th w="33%"><Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="25"
              letterSpacing="wide"
              color="teal.600">Date</Text></Th>
            <Th w="33%"><Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="25"
              letterSpacing="wide"
              color="teal.600">Type</Text></Th>
            <Th w="33%"><Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="25"
              letterSpacing="wide"
              color="teal.600">Score</Text></Th>
          </Tr>
        </Table>
        <Box overflowY="auto" bg='orange.200' h='14em' maxHeight="14em" w='full' maxW='full'>
          <Grid p='0.5em' alignItems="center" templateColumns='repeat(1, 1fr)' gap={2} h='14em' maxH='14'>
            {history.map((transaction) => (
              <GridItem key={transaction.tid}>
                <Button onClick={() => { setSelectedTransaction(transaction) }} maxW="100%" width="100%" bg="blue.200">
                  <Table alignItems="center" pt='1em' pb='1em'>
                    <Tr>
                      <Th w="33%">{(new Date(transaction.tdate)).toUTCString()}</Th>
                      <Th w="33%">{transaction.cname}</Th>
                      <Th w="33%">{transaction.cscore}</Th>
                    </Tr>
                  </Table>
                </Button>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box bg='orange.200' h='2.5em'></Box>
      <Box p={4} display={{ md: "flex" }}>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
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
    </Layout >
  );
}
