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

  loginFlow = async (user = null, pass = null) => {
    await t
      .click(this.loginBtn)
      .switchToIframe(this.loginIframe1)
      .switchToIframe(this.loginIframe2)

    if(user != null){
      await t.typeText(this.emailInput, user, { paste : true })
    }

    if(pass != null){
      await t.typeText(this.passwordInput, pass, { paste : true })
    }

    await t
      .click(this.submitLoginBtn)
  }

  getLoginError = async () => {
    await t.hover(this.loginErrorMsg)
    return await this.loginErrorMsg.innerText
  }
}

export default new LoginPage()
