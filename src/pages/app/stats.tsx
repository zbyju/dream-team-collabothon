import { FormLabel, FormControl, Text } from "@chakra-ui/react";
import Layout from "../../components/layouts/Layout";

export default function Stats() {
  const userScore = {score: 0, transactionCountTotal: 0, activeDays: 1}
  return (
    <Layout>
      <Text m={50} fontSize='50'>Stats</Text>
      <FormControl pl={50} pr={50} m={5}>
        <FormLabel>Score: {userScore.score}</FormLabel>
        <FormLabel>Total transaction count: {userScore.transactionCountTotal}</FormLabel>
        <FormLabel>Total days active: {userScore.activeDays}</FormLabel>
      </FormControl>
    </Layout>
  )
}
