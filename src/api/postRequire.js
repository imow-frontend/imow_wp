import base from './base'
import Page from '../utils/Page'

export default class postRequire extends base {
  static async postData(requireData = {}) {
    const url = `${this.baseUrl}/getList`
    const result = await this.post(url, requireData)
    return result
  }

  static page () {
    const url = `${this.baseUrl}/getList`
    return new Page(url, (data) => {
      // data.map(function(item, index) {
      //   item.moreText = '更多>>'
      //   if (item.detail.length > 80) {
      //     item.detailSub = item.detail.substring(0, 80) + '...'
      //   }
      // })
    })
  }

  static async list(params = {}) {
    const url = `${this.baseUrl}/getList`
    const result = await this.post(url, params)
    return result
  }
}
