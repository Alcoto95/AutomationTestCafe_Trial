import { t, Selector } from 'testcafe'

class LoginPage {
  constructor() {
    this.loginBtn = Selector('a.sel_login')
    this.loginIframe1 = Selector('iframe.GB_frame')
    this.loginIframe2 = Selector('iframe#GB_frame')
    this.emailInput = Selector('input#email')
    this.passwordInput = Selector('input#password')
    this.submitLoginBtn = Selector('a.submit_btn')

    this.loginErrorMsg = Selector('div.error_msg > span')
  }

  loginFlow = async (user, pass) => {
    await t
      .click(this.loginBtn)
      .switchToIframe(this.loginIframe1)
      .switchToIframe(this.loginIframe2)
      .typeText(this.emailInput, user)
      .typeText(this.passwordInput, pass)
      .click(this.submitLoginBtn)
      .switchToMainWindow()
  }
  
  loginFlowEmptyValues = async () => {
    await t
      .click(this.loginBtn)
      .switchToIframe(this.loginIframe1)
      .switchToIframe(this.loginIframe2)
      .click(this.submitLoginBtn)
  }

  getLoginError = async () => {
    await t.hover(this.loginErrorMsg)
    return await this.loginErrorMsg.innerText
  }
}

export default new LoginPage()