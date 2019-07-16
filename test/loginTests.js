import loginPage from '../page_objects/loginPage'
import homePage from '../page_objects/homePage'
import { 
  baseUrl, 
  password, 
  email
} from '../utils/constants'

fixture`Login Test Suite`
  .page(baseUrl)

test('Login Test - Happy Path', async t => {
  await loginPage.loginFlow(email, password)
  await t.expect(homePage.menuItems.exists).ok('You are not login')
})

test('Login Test - Empty Values', async t => {
  await loginPage.loginFlowEmptyValues()
  
  const errorMsg = await loginPage.getLoginError()
  await t.expect(errorMsg).eql('Blank email and password.')
})
