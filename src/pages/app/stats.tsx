import { FormLabel, FormControl, Text, Heading, Box, Card } from "@chakra-ui/react";
import Layout from "../../components/layouts/Layout";

export default function Stats() {
  const userScore = {score: 0, transactionCountTotal: 0, activeDays: 1}
  return (
    <Layout>
      <Heading m="5%">Statistics:</Heading>
        <Card mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Box m="5%">
            <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="20"
            letterSpacing="wide"
            color="teal.600"
            >
                Score
            </Text>
            <FormLabel>Total score: {userScore.score}</FormLabel>
            <FormLabel>This week score: {userScore.score}</FormLabel>
            <FormLabel>This year score: {userScore.score}</FormLabel>
          </Box>
        </Card>
        <Card mt ='1em' ml={{ md: 6 }}>
          <Box m="5%">
            <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="20"
            letterSpacing="wide"
            color="teal.600"
            >
                Other
            </Text>
            <FormLabel>Trees saved: 0</FormLabel>
            <FormLabel>Water saved: 0 (l)</FormLabel>
          </Box>
        </Card>
    </Layout>
  )
}
