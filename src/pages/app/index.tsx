import { Box, Container, Grid, GridItem , Text, Link, Table, Tr, Button, Th, Heading} from "@chakra-ui/react";
import Layout from "../../components/layouts/Layout";
import { useState } from "react";

export default function Home() {
  const transactionsHistory = [
    {id: 1, date:'14.10.2023', transactionType: "Food", score:-2, description: 'it was a 22nice day'},
    {id: 2, date:'14.10.2023', transactionType: "Drink", score:-1, description: 'it was a n23345ice day'},
    {id: 3, date:'14.10.2023', transactionType: 'Shower', score:-4, description: 'it was a nice day'},
  ]
  const questTransactions = [
    {id: 1, transactionType: "Plant a tree", score:+2, description: 'Plant a tree today!'},
    {id: 2, transactionType: "Re-usable bottle", score:+1, description: 'Use re-usable bottle instead of plastic'},
    {id: 3, transactionType: 'Quick shower', score:+4, description: 'Do not waste water today during your shower'},
  ]
  function redirectHistory() {
    window.location.href = "/app/history"
  }
  return (
    <Layout>
      <Heading m="5%">Dashboard:</Heading>
      <Box bg='orange.200'>
        <Text p='5%' fontSize='30' fontWeight='bold'>Last achievements:</Text>
      </Box>
      <Box bg='orange.200' h='11em' maxHeight="11em" w='full' maxW='full'>
        <Table pl ='5em' pr='2em'   h='1em' maxH='1em' w='full' maxW='full' bg='red.100'>
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
        <Box overflowY="auto" bg='orange.200' h='10em' maxHeight="10em" w='full' maxW='full'>
          <Grid p='0.5em' alignItems="center" templateColumns='repeat(1, 1fr)' gap={2} h='110em' maxH='10'>
              {transactionsHistory.map((transaction) => (
                <GridItem>
                    <Button onClick={(event)=>{redirectHistory()}} maxW ="100%" width = "100%" bg="blue.200">
                      <Table alignItems="center" pt='1em' pb='1em'>
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
      </Box>
      <Box bg='orange.200' h='2.5em'></Box>
      <Box h='2.5em'></Box>
      <Box bg='orange.200'>
        <Text p='5%' fontSize='30' fontWeight='bold'>Your Quests:</Text>
      </Box>
      <Box bg='orange.200' h='11em' maxHeight="11em" w='full' maxW='full' outline=''>
        <Table h='1em' maxH='1em' bg='green.200'>
          <Tr>
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
        <Box overflowY="auto" bg='orange.200' h='10em' maxHeight="10em" w='full' maxW='full'>
          <Grid p='0.5em' alignItems="center" templateColumns='repeat(1, 1fr)' gap={2} h='110em' maxH='10'>
              {questTransactions.map((transaction) => (
                <GridItem>
                    <Button onClick={(event)=>{redirectHistory()}} maxW ="100%" width = "100%" bg="blue.200">
                      <Table alignItems="center" pt='1em' pb='1em'>
                        <Tr>
                          <Th>{transaction.transactionType}</Th>
                          <Th>{transaction.score}</Th>
                        </Tr>
                      </Table>
                    </Button>
                </GridItem>
                  ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}
