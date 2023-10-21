import { useState } from "react";
import Layout from "../../components/layouts/Layout";
import React from "react";
import {
  Select,
  FormLabel,
  FormControl,
  Input,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  NumberInputField,
  Card,
  Button
} from "@chakra-ui/react";

export default function Add() {
  const [transactionType, setTransactionType] = React.useState('')
  const [transactionCount, setTransactionCount] = React.useState("1")
  
  function handleSubmit() {
    if(transactionCount == null || transactionType == '') {
      console.log('Add transaction did not proceed : transaction count is null');    
      return;
    }
    //TODO:Submit new transaction here
  }

  const categories = [
    {id: 1, name: "Food", score:-2},
    {id: 2, name: "Drink", score:-1},
    {id: 3, name: 'Shower', score:-4},
    {id: 4, name: 'Plant a tree', score:2},
    {id: 5, name: 'Public cleaning', score:2}
  ]
  
  return (
    <Layout>
      <Card m = {50}>
      <FormControl pl={50} pr={50} m={5}>
        <FormLabel>Count:</FormLabel>
          <Select placeholder='Select option' value ={transactionType} onChange = {(event) => setTransactionType(event.target.value)}>
            { categories.map(c => <option value={c.id} key={c.id}>{c.name} : {c.score * transactionCount}</option>)}
          </Select>
        </FormControl>
        <FormControl pl={50} pr={50} m={5}>
          <FormLabel>Count:</FormLabel>
          <NumberInput defaultValue={1} min={1} bgGradient="linear(to-t, greay.100, grey.200)" 
          placeholder='15' onChange={(value) => setTransactionCount(value)}
          value={transactionCount}>
            <NumberInputField/>
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button colorScheme='blue' variant='outline' onClick={() => handleSubmit()} maxW={300} m={5} ml={50} >Add New Action</Button>
      </Card>
    </Layout>
  )
}