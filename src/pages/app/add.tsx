import { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import React from "react";
import {
  Input,
  Select,
  FormLabel,
  FormControl,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  NumberInputField,
  Card,
  Button,
  useToast,
  Box
} from "@chakra-ui/react";
import { AuthInfo } from "../../types/user";

export default function Add() {
  const [transactionType, setTransactionType] = React.useState('')
  const [transactionCount, setTransactionCount] = React.useState(1)
  const [description, setDescription] = React.useState("")
  const toast = useToast()

  const [categories, setCategories] = useState<any[]>([])

  async function fetchData() {
    try {
      const res = await fetch(`/api/categories`)
      const t = await res.json()
      setCategories(t)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (err) { }
  }, [])

  const [auth, setAuth] = useState<AuthInfo>({ user: null, loggedIn: false })

  useEffect(() => {
    try {
      const username = localStorage.getItem('username');
      const id = parseInt(localStorage.getItem('userid') || "");
      if (username && id) {
        setAuth({ user: { username, id }, loggedIn: true })
      } else {
        setAuth({ user: null, loggedIn: false })
      }
    } catch (error) {
      setAuth({ user: null, loggedIn: false })
    }
  }, [])

  async function handleSubmit() {
    if (!transactionCount || !transactionType) {
      console.log('Add transaction did not proceed : transaction count is null');
      return;
    }
    if (!auth || !auth.user) {
      toast({
        title: 'Please log in first',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return;
    }
    try {
      await fetch("/api/transactions", {
        method: "POST", headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          description,
          category: parseInt(transactionType),
          count: transactionCount,
          user: auth.user.id
        })
      })
      toast({
        title: 'Transaction successfully added',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setTransactionType('')
      setTransactionCount(1)
      setDescription('')
    } catch (err) {
      console.log(err)
      toast({
        title: 'There was an error when adding a new transaction',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Layout>
      <Box bg='orange.100' w='full' maxW='full' h='1em'></Box>
      <Box bg='orange.100' w='full' maxW='full'>
        <Card ml='1em' mr='1em'>
          <FormControl pl={50} pr={50} m={5}>
            <FormLabel>Category:</FormLabel>
            <Select placeholder='Select option' value={transactionType} onChange={(event) => setTransactionType(event.target.value)}>
              {categories.map(c => <option value={c.id} key={c.id}>{c.name} : {c.score * transactionCount}</option>)}
            </Select>
          </FormControl>
          <FormControl pl={50} pr={50} m={5}>
            <FormLabel>Count:</FormLabel>
            <NumberInput defaultValue={1} min={1} bgGradient="linear(to-t, greay.100, grey.200)"
              placeholder='15' onChange={(value) => setTransactionCount(parseInt(value))}
              value={transactionCount}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl pl={50} pr={50} m={5}>
            <FormLabel>Add Description</FormLabel>
            <Input bgGradient="linear(to-t, grey.100, grey.200)" placeholder={description} value={description} onChange={(event) => setDescription(event.target.value)} />
          </FormControl>
          <Button colorScheme='blue' variant='outline' onClick={() => handleSubmit()} maxW={300} m={5} ml={50} >Add New Action</Button>
        </Card>
      </Box>
      <Box bg='orange.100' w='full' maxW='full' h='2em'></Box>
    </Layout>
  )
}
