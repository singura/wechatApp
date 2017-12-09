// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList: [
      {
        id: 1,
        title: "免费送票！超有内涵的门票",
        date: "17 September",
        image: "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t14866/248/190398563/188205/429bf3f4/5a263c07N759ab19b.jpg!q70.jpg",
        desc: "最糟糕的，也许就是最幸运的。"
      },
      {
        id: 2,
        title: "免费送票！超有内涵的门票",
        date: "17 September",
        image: "https://img1.360buyimg.com/da/jfs/t12214/351/1524941677/96956/802a2a89/5a20e27dN1d9dce8d.jpg",
        desc: "最糟糕的，也许就是最幸运的。"
      },
      {
        id: 3,
        title: "免费送票！超有内涵的门票",
        date: "17 September",
        image: "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t15871/337/106506641/197237/299f8eca/5a276477N9e2d59d6.jpg!q70.jpg",
        desc: "最糟糕的，也许就是最幸运的。"
      },
      {
        id: 4,
        title: "免费送票！超有内涵的门票",
        date: "17 September",
        image: "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t12772/53/1707843604/195052/3fea566a/5a2638cfN605cd3bf.jpg!q70.jpg",
        desc: "最糟糕的，也许就是最幸运的。"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var newMessage = this.data.messageList.concat(this.data.messageList);
    this.setData({
      messageList: newMessage
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})