import loginPage from '../page_objects/loginPage'
import homePage from '../page_objects/homePage'
import { 
baseUrl,
email,
password,
taskName
} from '../utils/constants'

fixture`Create Task Test Suite`
  .page(baseUrl)

test.only('Create New Task - Valid Name', async t => {
  await loginPage.loginFlow(email, password)
  await homePage.createNewTask(taskName)

  await t.expect(await homePage.newTaskEl.withText(taskName).exists).ok()
})