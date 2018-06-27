import base from './base'
import auth from './auth'
import wepy from 'wepy'
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

  static async setLoginTag(user) {
    await store.updateUser(user)
  }
}
