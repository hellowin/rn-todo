// @flow
import React from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { Platform, StatusBar } from 'react-native'
import TodoPage from 'src/domain/todo/container/TodoPage'

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header
          style={{
            paddingTop: Platform.OS == 'ios' ? 0 : StatusBar.currentHeight
          }}
        >
          <Body>
            <Title>React Native ToDo</Title>
          </Body>
        </Header>
        <Content>
          <TodoPage />
        </Content>
      </Container>
    );
  }
}

export default App
