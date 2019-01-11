import http from '../utils/Http'

export default class base {
  // static baseUrl = 'http://mock.eolinker.com/Weyn51E7208ea8ef613195751c684d14ff3c275a43d97a8?uri=';   // wepy.$instance.globalData.baseUrl;
  // static baseUrl = 'https://api.imow.cn';
  static baseUrl = 'http://share.imow.cn';
  static get = http.get.bind(http);
  static put = http.put.bind(http);
  static post = http.post.bind(http);
  static delete = http.delete.bind(http);
}
