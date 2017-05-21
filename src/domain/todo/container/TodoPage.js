import React from 'react'
import { Content } from 'native-base'
import TodoInput from '../component/TodoInput.js'
import TodoList from '../component/TodoList.js'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  }
})

class TodoPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoInput />
        <TodoList />
      </View>
    );
  }
}

export default TodoPage;
