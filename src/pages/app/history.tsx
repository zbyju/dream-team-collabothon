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
      <div>     
        <Box padding={3}>
        <Heading>Action History</Heading>
          <Table>
          <Thead position="sticky" top={0} bgColor="grey">
                  <Tr>
                        <Td>Date</Td>
                        <Td>Type</Td>
                        <Td>score</Td>
                      </Tr>
              </Thead>
        </Table>
        <Box overflowY="auto" maxHeight="300px">
          <Table variant="striped" colorScheme="teal">
            <Tbody m = {50}>
            {transactionsHistory.map((transaction) => (
                    <Button onClick={(event)=>{setSelectedTransaction(transaction)}} maxW ="600px" width = "600px" bg="green.100">
                    <Tr>
                      <Td>{transaction.date}</Td>
                      <Td>{transaction.transactionType}</Td>
                      <Td>{transaction.score}</Td>
                    </Tr>
                    </Button>
                ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      <Box width={500} height = "400px" m={50} bg ={"green.100"}>
        {selectedTransaction === null ? (<Text>Nothing selected</Text>) : (<Text>{selectedTransaction.description}</Text>)}
      </Box>
      </div>
    </Layout>
  );  
}