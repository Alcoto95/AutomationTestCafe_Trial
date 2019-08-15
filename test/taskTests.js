import loginPage from '../page_objects/loginPage'
import homePage from '../page_objects/homePage'
import { validUser } from '../utils/roles'
import { t } from 'testcafe'
import { 
baseUrl,
email,
password,
taskName
} from '../utils/constants'

fixture`Create Task Test Suite`
  .page(baseUrl)
  .beforeEach(async () => {
    await t.useRole(validUser)
  })

test('Create New Task - Valid Name', async t => {
  await homePage.createNewTask(taskName)
  await t.expect(await homePage.taskName.withText(taskName).exists).ok()
})

test('Create New Task - Validation by Name', async t => {
  await homePage.createNewTask(taskName)
  const newTaskName = await homePage.getLastTaskName()
  await t.expect(newTaskName).eql(taskName)
})