import base from './base'
import Page from '../utils/Page'

export default class postRequire extends base {
  static async postData(requireData = {}) {
    const url = `${this.baseUrl}/Demand/Add`
    const result = await this.post(url, requireData)
    return result
  }

  static page () {
    const url = `${this.baseUrl}/Demand/getList`
    return new Page(url, (data) => {
    })
  }

  static async list(params = {}) {
    const url = `${this.baseUrl}/Demand/getList`
    const result = await this.post(url, params)
    return result
  }
}
