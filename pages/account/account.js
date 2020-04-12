// pages/account/account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     img_url: '',
     username: '',
     orderDetail: ['待付款','待发货','待收货','待评价','退货/退款'],
     serviceDetail:["优惠券",'收藏','地址','品牌日志'],
     serviceMore: ['客服信息','服务政策','天猫旗舰店']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo(
      {
        success: (e)=> {
          const a= JSON.parse(e.rawData)
          this.setData({
            img_url: a.avatarUrl,
            username: a.nickName
          })
        }
      }
    )
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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