// pages/shopOrder/shopOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab : '',
    tabNav: ['待提货', '已收货', '已退货']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('id',options.id);
    var id = options.id
    this.setData({
      currentTab : id
    })
    if (id == 0) {
      //请求待提货接口
    } else if (id == 1) {
      //请求已收货接口
    } else {
      //请求已退货接口
    }
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

  },
  clickTab: function (e) {
    console.log('e',e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.index) {
      return false;
    } else {
      that.setData({
        currentTab : e.target.dataset.index,
      })
      if (that.data.currentTab == 0) {
        //请求待提货接口
      } else if (that.data.currentTab == 1) {
        //请求已收货接口
      } else {
        //请求已退货接口
      }
    }
  } 
})