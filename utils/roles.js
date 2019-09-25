import { t, Role } from 'testcafe'
import loginPage from '../page_objects/loginPage'
import {
  todoistBaseUrl,
  validEmail,
  validPassword
} from './constants'

export const validUser = Role(todoistBaseUrl, async t => {
  await loginPage.loginFlow(validEmail, validPassword)
  await t.switchToMainWindow()
}, { preserveUrl: true })
