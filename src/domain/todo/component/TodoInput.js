// @flow
import React from 'react'
import { Content, Form, Item, Input, Body, Button, Text, Icon } from 'native-base'
import { StyleSheet, View } from 'react-native'
import todoRepo from 'src/infra/repo/todo'
import TodoItem from '../service/TodoItem'

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  formInput: {
  },
})

class TodoInput extends React.Component {

  state: {
    text: string
  }
  
  constructor(props: Object) {
    super(props)

    this.state = {
      text: '',
    }
  }

  onChange = (e: string) => {
    this.setState({ text: e })
  }

  add = () => {
    const { text } = this.state
    this.setState({ text: '' })
    const item = new TodoItem(text)
    todoRepo.add(item)
  }

  render() {
    const { text } = this.state
    return (
      <View>
        <Item>
          <Input placeholder="To do item" value={text} onChangeText={this.onChange} />
          <Icon name="add-circle" onPress={this.add} />
        </Item>
      </View>
    );
  }
}

export default TodoInput
