// @flow
import React from 'react'
import { Form, Item, Input, Icon, Text } from 'native-base'
import { View } from 'react-native'
import { connect } from 'react-redux'
import todoRepo from 'src/infra/repo/todo'
import TodoItem from '../service/TodoItem'

const mapStateToProps = (state) => ({
  list: state.todo.list,
})

class TodoList extends React.Component {

  props: {
    list: TodoItem[]
  }

  render() {
    const { list } = this.props
    return (
      <View>
        {list.map((item, id) => (
          <Item key={id}>
            {!item.done && <Icon name="checkmark-circle" onPress={() => todoRepo.mark(id)} />}
            <Input value={item.desc} disabled />
            <Icon name="remove-circle" onPress={() => todoRepo.remove(id)} />
          </Item>
        ))}
      </View>
    );
  }

}

export default connect(mapStateToProps)(TodoList)
