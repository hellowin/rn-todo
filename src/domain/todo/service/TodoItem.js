// @flow
import uuid from 'uuid'

export default class TodoItem {
  id: string
  desc: string
  done: boolean

  constructor(desc: string) {
    this.id = uuid.v4()
    this.desc = desc
    this.done = false
  }

}