import React, { ChangeEventHandler } from 'react';

import {
  ColorHues,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

interface Props {
  label : string;
  value: string;
type: string;
placeholder: string;
onChange: ChangeEventHandler<HTMLInputElement>;
required: boolean;
}

export default function LoginInput({label, type, placeholder, onChange, value, required}: Props) {
  return (
    <FormControl pl={50} pr={50} m={2} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input type={type} bgGradient="linear(to-t, green.100, green.200)" placeholder={placeholder} value={value} onChange={onChange} required={required} />
    </FormControl>
  );
}