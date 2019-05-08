// api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todos:[],
    inputValue:''
  },
  add(e){
    this.list.push({
      id: this.list.length,
      value: e.detail.value
    })
    this.setData({ todos: this.list,
      inputValue:''})
       
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.list = []
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let self=this
    let res = wx.getStorageSync('todoList')
    if(res){
      this.setData({ todos: res })
      this.list = res
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setStorage({
      key: 'todoList',
      data: this.list,
    })
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})