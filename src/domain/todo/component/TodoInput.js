import React from 'react'
import { Content, Form, Item, Input, Body, Button, Text } from 'native-base'

const TodoInput = props => {
  return (
    <Form>
      <Input placeholder="To do item" />
      <Button>
        <Text>Add</Text>
      </Button>
    </Form>
  );
}

export default TodoInput
