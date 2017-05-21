import React from 'react'
import { Form, Item, Input, Icon } from 'native-base'
import { View } from 'react-native'
import { connect } from 'react-redux'
import todoRepo from '@src/infra/repo/todo'

const mapStateToProps = (state) => ({
  list: state.todo.list,
})

class TodoList extends React.Component {

  remove = (index) => {
    todoRepo.remove(index)
  }

  render() {
    const { list } = this.props
    return (
      <View>
        {list.map((li, id) => (
          <Item key={id}>
            <Input value={li} disabled />
            <Icon name="remove-circle" onPress={() => this.remove(id)} />
          </Item>
        ))}
      </View>
    );
  }

}

export default connect(mapStateToProps)(TodoList)
