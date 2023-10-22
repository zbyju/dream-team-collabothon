import React, { useState } from "react";
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
  const transactionsHistory = [
    {id: 1, date:'14.10.2023', transactionType: "Food", score:-2, description: 'it was a 22nice day'},
    {id: 2, date:'14.10.2023', transactionType: "Drink", score:-1, description: 'it was a n23345ice day'},
    {id: 3, date:'14.10.2023', transactionType: 'Shower', score:-4, description: 'it was a nice day'},
    {id: 4, date:'14.10.2023', transactionType: 'Plant a tree', score:2, description: 'it was a nice day'},
    {id: 5, date:'14.10.2023', transactionType: 'Public cleaning', score:2, description: 'it was a nice day'},
    {id: 6, date:'14.10.2023', transactionType: "Food", score:-2, description: 'it was a nice day'},
    {id: 7, date:'14.10.2023', transactionType: "Drink", score:-1, description: 'it was a nice day'},
    {id: 8, date:'14.10.2023', transactionType: 'Shower', score:-4, description: 'it was a nice day'},
    {id: 9, date:'14.10.2023', transactionType: 'Plant a tree', score:2, description: 'it was a nice day'},
    {id: 10, date:'14.10.2023', transactionType: 'Public cleaning', score:2, description: 'it was a nice day'}
  ]
  const [selectedTransaction, setSelectedTransaction] = useState<any|null>(null)
  
  return (
    <Layout>
      <Heading m="5%">Action History</Heading>
      <Table pl ='5em' pr='2em'   h='1em' maxH='5em' w='full' maxW='full' bg='red.100'>
        <Tr>
          <Th><Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="25"
            letterSpacing="wide"
            color="teal.600">Date</Text></Th>
          <Th><Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="25"
            letterSpacing="wide"
            color="teal.600">Type</Text></Th>
          <Th><Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="25"
            letterSpacing="wide"
            color="teal.600">Score</Text></Th>
        </Tr>
      </Table>
      <Box bg='orange.200' h='1em'></Box>
      <Box overflowY="auto" bg='orange.200' h='15em' maxHeight="15em" w='full' maxW='full'>
        <Grid p='0.5em' alignItems="center" templateColumns='repeat(1, 1fr)' gap={2} h='15em' maxH='15'>
            {transactionsHistory.map((transaction) => (
              <GridItem>     
                  <Button onClick={(event)=>{setSelectedTransaction(transaction)}} maxW ="100%" width = "100%" bg="blue.200">
                    <Table alignItems="center" gap={5} pt='1em' pb='1em'>
                      <Tr>
                        <Th>{transaction.date}</Th>
                        <Th>{transaction.transactionType}</Th>
                        <Th>{transaction.score}</Th>
                      </Tr>
                    </Table>
                  </Button>
              </GridItem>
                ))}
        </Grid>
      </Box>
      <Box bg='orange.200' h='1em'></Box>
      <Box p={4} display={{ md: "flex" }}>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="25"
            letterSpacing="wide"
            color="teal.600"
            >
                {selectedTransaction === null ? 'Nothing selected' : (<>{selectedTransaction.transactionType}</>)}
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
            {selectedTransaction === null ? (<Text mt={2} color="gray.500"></Text>) : (<Text mt={2} color="gray.500">{selectedTransaction.description}</Text>)}
        </Box>
      </Box>
    </Layout>
  );
}