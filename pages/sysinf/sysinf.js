Page({
  data: {

  },
  onLoad: function () {
    let res = wx.getSystemInfoSync()
    console.log(res)
    this.setData(res)
  },
})
