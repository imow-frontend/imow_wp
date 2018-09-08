import base from './base'
import auth from './auth'
import store from '../store/utils'

export default class member extends base {
  /**
   * 登录
   */
  static async login(logNameVal, pwdVal) {
    const url = `${this.baseUrl}/auth/login`
    const result = await this.post(url, {
      userName: logNameVal,
      password: pwdVal
    })
    if (result && result.status === 20) {
      await this.setLoginTag(result.user)
      return true
    }
  }

    /**
   * 登录
   */
  static async loginOut() {
    const result = await auth.doLoginOut()
    if (result && result.status === 20) {
      await this.setLoginTag(result.user)
      return true
    }
    return true
  }

  static async setLoginTag(user) {
    await store.updateUser(user)
  }
}
