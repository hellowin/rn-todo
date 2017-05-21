import React from 'react'
import { Form, Item, Input, Icon } from 'native-base'
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
      <Form>
        {list.map((li, id) => (
          <Item key={id}>
            <Input value={li} disabled />
            <Icon name="remove" onPress={() => this.remove(id)} />
          </Item>
        ))}
      </Form>
    );
  }

}

export default connect(mapStateToProps)(TodoList)
