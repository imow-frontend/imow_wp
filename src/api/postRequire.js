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

  static publicListPage() {
    const url = `${this.baseUrl}/Demand/GetPublicList`
    return new Page(url, (data) => {
    })
  }

  static followListPage() {
    const url = `${this.baseUrl}/Demand/GetFollowList`
    return new Page(url, (data) => {
    })
  }

  static Detail() {
    const url = `${this.baseUrl}/Demand/Detail`
    return new Page(url, (data) => {
    })
  }

  static async list(params = {}) {
    const url = `${this.baseUrl}/Demand/getList`
    const result = await this.post(url, params)
    return result
  }

  static async add(params = {}) {
    const url = `${this.baseUrl}/Demand/Add`
    const result = await this.post(url, params)
    return result
  }

  static async remove(id) {
    const url = `${this.baseUrl}/Demand/Remove`
    const result = await this.post(url, {id})
    return result
  }

  static async increateDemandCount(id) {
    const url = `${this.baseUrl}/Demand/IncreateDemandCount`
    const result = await this.post(url, {id})
    return result
  }

  static async addFollow(id) {
    const url = `${this.baseUrl}/Demand/AddFollow`
    const result = await this.post(url, {id})
    return result
  }

  static async removeFollow(id) {
    const url = `${this.baseUrl}/Demand/RemoveFollow`
    const result = await this.post(url, {id})
    return result
  }

  static async addInterested(id) {
    const url = `${this.baseUrl}/Demand/AddInterested`
    const result = await this.post(url, {id})
    return result
  }

  static async removeInterested(id) {
    const url = `${this.baseUrl}/Demand/RemoveInterested`
    const result = await this.post(url, {id})
    return result
  }

  static async addOrUpdateUserInfo(name, mobile) {
    const url = `${this.baseUrl}/Demand/AddOrUpdateUserInfo`
    const result = await this.post(url, {name, mobile})
    return result
  }

  static async addPrice(price, demandId) {
    const url = `http://mock.eolinker.com/fviqSQE64e9172ca3f44fa3adab61ef5dabb2b45f271fc1?uri=addPrice`
    const result = await this.post(url, {price, demandId})
    return result
  }

  static async uploadImg(files) {
    let promises = []
    const url = `${this.baseUrl}/Demand/UploadImg`
    files.map(function(item) {
      let promise = new Promise((resolve, reject) => {
        wx.uploadFile({
          url: url,
          filePath: item,
          name: 'file',
          success: function(res) {
            resolve(JSON.parse(res.data).src)
          }
        })
      })
      promises.push(promise)
    })
    return Promise.all(promises)

  }
}
