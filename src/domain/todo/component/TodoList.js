// @flow
import React from 'react'
import { Form, Item, Input, Icon, Text } from 'native-base'
import { View } from 'react-native'
import { connect } from 'react-redux'
import todoRepo from 'src/infra/repo/todo'
import TodoItem from '../service/TodoItem'
import uuid from 'uuid'

const mapStateToProps = (state) => ({
  list: state.todo.list,
})

class TodoList extends React.Component {

  props: {
    list: TodoItem[],
    type: string,
  }

  render() {
    const { list, type } = this.props

    let filteredList
    switch (type) {
      case 'done':
        filteredList = list.filter(li => li.done)
        break
      case 'list':
      default:
        filteredList = list.filter(li => !li.done)
    }

    return (
      <View>
        <Form>
          {filteredList.map((item: TodoItem) => (
            <Item key={uuid.v4()} fixedLabel last>
              {!item.done && <Icon name="checkmark-circle" onPress={() => todoRepo.mark(item.id)} />}
              <Input value={item.desc} disabled />
              <Icon name="remove-circle" onPress={() => todoRepo.remove(item.id)} />
            </Item>
          ))}
        </Form>
      </View>
    );
  }

}

export default connect(mapStateToProps)(TodoList)
