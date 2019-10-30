// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,  //对应样式变化
    rightTab:0,
    show:false,
    screenArray: [
      {
        screenId: 1,
        screenName: '菜单1'
      },
      {
        screenId: 2,
        screenName: '菜单2'
      },
      {
        screenId: 3,
        screenName: '菜单3'
      },
      {
        screenId: 4,
        screenName: '菜单4'
      },
      {
        screenId: 5,
        screenName: '菜单5'
      },
      {
        screenId: 6,
        screenName: '菜单6'
      }
    ], //左侧导航栏内容
    childrenArray: [
      {
      showImageUrl: '../../images/banner.png',
      childrenScreenArray: [
        {
          screenId: 1,
          showImageUrl: '../../images/ex.png',
          screenName: '糖果',
          screenPrice: '￥12.99'
        },
        {
          screenId: 1,
          showImageUrl: '../../images/ex.png',
          screenName: '新疆核桃',
          screenPrice: '￥12.99'
        },
        {
          screenId: 1,
          showImageUrl: '../../images/ex.png',
          screenName: '新疆核桃',
          screenPrice: '￥12.99'
        },
        {
          screenId: 1,
          showImageUrl: '../../images/ex.png',
          screenName: '新疆核桃',
          screenPrice: '￥12.99'
        }, {
          screenId: 1,
          showImageUrl: '../../images/ex.png',
          screenName: '新疆核桃',
          screenPrice: '￥12.99'
        },
        {
          screenId: 1,
          showImageUrl: '../../images/ex.png',
          screenName: '新疆核桃',
          screenPrice: '￥12.99'
        }]
    },
    {
      showImageUrl: '../../images/banner.png',
      childrenScreenArray: [
        {
          screenId: 2,
          showImageUrl: '../../images/ex.png',
          screenName: '糖果',
          screenPrice: '￥12.99'
        }
      ]
    }
  ]},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log('screenId', this.data.screenId);
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
  //事件处理函数  
  navbarTap: function (e) {
    var that = this;
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.id,   //按钮CSS变化
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部
    })
  },

  //弹窗购物车
  showCart(){
    var that = this;
    this.setData({
      show: !that.data.show
    })
  },

  //隐藏购物车
  hideCart(){
    this.setData({
      show: false
    })
  },
  pay() {
    wx.navigateTo({
      url: '../paySuc/paySuc',
    })
  }
})