// @flow
import React from 'react'
import { Icon, Header, Body, Text, Container, Right, Button, Left } from 'native-base'
import TodoInput from '../component/TodoInput.js'
import TodoList from '../component/TodoList.js'
import { View, StyleSheet } from 'react-native'
import todoRepo from 'src/infra/repo/todo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

class TodoPage extends React.Component {

  static navigationOptions = {

    tabBarLabel: 'Done',

    tabBarIcon: ({ tintColor }) => (
      <Icon name="checkbox" />
    ),

  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Text>Done List</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="close" onPress={() => todoRepo.removeAllDone()} />
            </Button>
          </Right>
        </Header>
        <View style={styles.container}>
          <TodoList type="done" />
        </View>
      </Container>
    );
  }

}

export default TodoPage;
