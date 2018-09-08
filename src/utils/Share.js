export default function onShareAppMessage (res) {
  let title = ''
  let path = ''
  let image = ''
  if (res.from === 'button') {
  // 来自页面内转发按钮
    title = res.target.dataset.title
    image = 'https://imow-app.oss-cn-hangzhou.aliyuncs.com/' + res.target.dataset.image
    let id = res.target.dataset.did
    path = '/pages/postDetail?id=' + id
  }

  return {
    title: title,
    path: path,
    imageUrl: image
  }
}
