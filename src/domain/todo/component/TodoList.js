import React from 'react'
import { Form, Item, Input, Icon } from 'native-base'
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

  remove = (index) => {
    todoRepo.remove(index)
  }

  render() {
    const { list } = this.props
    return (
      <View>
        {list.map((item, id) => (
          <Item key={id}>
            <Input value={item.desc} disabled />
            <Icon name="remove-circle" onPress={() => this.remove(id)} />
          </Item>
        ))}
      </View>
    );
  }

}

export default connect(mapStateToProps)(TodoList)
