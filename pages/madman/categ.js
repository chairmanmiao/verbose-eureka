// pages/madman/categ.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag: 0,
        currentTab: 0,
        goodIcon: "../../image/bjp.jpg",
        goodText1: "保健品",
        goodId: null



    },
    switchNav: function(e) {
        var page = this;
        var id = e.target.id;
        if (this.data.currentTab == id) {
            return false;

        } else {
            page.setData({ currentTab: id });

        }

    },
    yangli1:function(e){
      wx.redirectTo({
        url: '../../brands/index',
      })
    },
    yangli2: function (e) {
      wx.redirectTo({
        url: '../../brands/index',
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // var that=this;
        // wx.request({
        //   url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/category/all',
        //   success:function(res){
        //     var category = [{id：0,name="全部"}]
        //   }
        // })


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})