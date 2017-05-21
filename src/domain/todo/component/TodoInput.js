import React from 'react'
import { Content, Form, Item, Input, Body, Button, Text, Icon } from 'native-base'
import { StyleSheet, View } from 'react-native'
import todoRepo from '@src/infra/repo/todo'

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  formInput: {
  },
})

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
        <Item>
          <Input placeholder="To do item" value={item} onChangeText={this.onChange} />
          <Icon name="add" onPress={this.add} />
        </Item>
      </Form>
    );
  }
}

export default TodoInput
