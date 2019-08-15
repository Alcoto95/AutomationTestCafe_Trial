import { t, Selector } from 'testcafe'

class HomePage {
  constructor() {
    this.menuItems = Selector('div#top_icons')
    this.newTaskBtn = Selector('.agenda_add_task a')
    this.newTaskText = Selector('div.DraftEditor-editorContainer > div')
    this.submitTask = Selector('button.item_editor_submit')
    this.taskItem = Selector('li.task_item')
    this.taskName = Selector('span.text')
  }

  createNewTask = async taskName => {
    await t
      .click(this.newTaskBtn)
      .typeText(this.newTaskText, taskName, { paste : true })
      .click(this.submitTask)
  }

  getTasksCount = async () => {
    await t.hover(this.taskItem)
    return this.taskItem.count
  }

  getLastTaskName = async () => {
    const tasksCount = await this.getTasksCount()
    return this.taskName.nth(tasksCount - 1).innerText
  }
}

export default new HomePage()