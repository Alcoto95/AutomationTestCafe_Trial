import { t, Selector } from 'testcafe'

class HomePage {
  constructor() {
    this.menuItems = Selector('div#top_icons')
    this.newTaskBtn = Selector('.agenda_add_task a')
    this.newTaskText = Selector('div.richtext_editor')
    this.submitTask = Selector('a.submit_btn')
    this.newTaskEl = Selector('span.sel_item_content')
  }

  createNewTask = async taskName => {
    await t
      .click(this.newTaskBtn)
      .typeText(this.newTaskText, taskName)
      .click(this.submitTask)
  }

  getTaskName = async taskName => {
    await t.hover(this.newTaskEl.withText(taskName))
    return await this.newTaskEl.withText(taskName).innerText
  }
}

export default new HomePage()