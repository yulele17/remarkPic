// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picurl: 'https://picsum.photos/1920/1080?random=1',
    from: "鲁迅",
    hokio: "人类的悲欢并不相通，我只觉得他们吵闹。",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options,
    })
    this.getinfo()
  },
  getinfo() {
    wx.request({
      url: 'https://v1.hitokoto.cn/',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({

          from: res.data['from'],
          fromwho:res.data['from_who'],
          hokio: res.data['hitokoto'],
        })
        wx.stopPullDownRefresh()

      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.onLoad();
    // getinfo()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})