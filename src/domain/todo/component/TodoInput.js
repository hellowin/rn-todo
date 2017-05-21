import React from 'react'
import { Content, Form, Item, Input, Body, Button, Text } from 'native-base'
import todoRepo from '@src/infra/repo/todo'

class TodoInput extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      item: '',
    }
  }

  onChange = (e) => {
    this.setState({ item: e })
  }

  add = () => {
    const { item } = this.state
    this.setState({ item: '' })
    todoRepo.add(item)
  }

  render() {
    const { item } = this.state
    return (
      <Form>
        <Input placeholder="To do item" value={item} onChangeText={this.onChange} />
        <Button onPress={this.add}>
          <Text>Add</Text>
        </Button>
      </Form>
    );
  }
}

export default TodoInput
