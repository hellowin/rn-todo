import React from 'react'
import { Content } from 'native-base'
import TodoInput from '../component/TodoInput.js'
import TodoList from '../component/TodoList.js'

class TodoPage extends React.Component {
  render() {
    return (
      <Content>
        <TodoInput />
        <TodoList />
      </Content>
    );
  }
}

export default TodoPage;
