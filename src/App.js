import React from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import TodoPage from '@src/domain/todo/container/TodoPage'

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
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
