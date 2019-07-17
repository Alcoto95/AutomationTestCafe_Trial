import { t, Role } from 'testcafe'
import loginPage from '../page_objects/loginPage'
import {
  baseUrl,
  email,
  password
} from './constants'

export const validUser = Role(baseUrl, async t => {
  await loginPage.loginFlow(email, password)
  await t.switchToMainWindow()
}, { preserveUrl: true })