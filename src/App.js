// @flow
import React from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base'
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
            <Title>React Native To Do</Title>
          </Body>
        </Header>
        <Content>
          <TodoPage />
        </Content>
        <Footer >
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="list" />
              <Text>Active</Text>
            </Button>
            <Button>
              <Icon name="checkbox" />
              <Text>Done</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default App
