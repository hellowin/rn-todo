// @flow

export default class TodoItem {
  desc: string
  done: boolean

  constructor(desc: string) {
    this.desc = desc
    this.done = false
  }

}