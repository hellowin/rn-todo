// @flow
import React from 'react'
import todoRepo from 'src/infra/repo/todo'

class Bootstrap extends React.Component {

  componentWillMount() {
    todoRepo.restore()
  }

  render() {
    const { children } = this.props
    return children
  }

}

export default Bootstrap
