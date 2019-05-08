Page({
  data:{
    msg:''
  },
  onPullDownRefresh(){
    this.msg="pull refresh"
    console.log(123,arguments)
  },
  onReachBottom: function () {
console.log(123)

  },
  clickMe(){
    wx.showModal({
      title: '显示提示信息',
      content: '这是一个模态框，要查看提示信息的样子吗？',
      success(res){
        if(res.confirm){
          wx.showToast({
            title: '提示信息',
            icon: 'success',
            duration: 1000
          })
        } 
      }
    })
    
  }
})