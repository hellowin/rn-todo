import React from 'react'
import { List, ListItem, Text } from 'native-base'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  list: state.todo.list,
})

const TodoList = props => {
  const { list } = props
  return (
    <List>
      {list.map((li, id) => (
        <ListItem key={id}>
          <Text>{li}</Text>
        </ListItem>
      ))}
    </List>
  );
}

export default connect(mapStateToProps)(TodoList)
