var app = getApp()
var fileData = require('../../utils/data.js')

Page({

    /**
     * 页面的初始数据=
     */
    data: {
        indicatorDots: true,
        autoPlay: true,
        interval: 5000,
        duration: 1000,
        imgurls: fileData.getBannerData(),
        images: {},
        navs: [],
        //  activeCategoryId: 0,
        goods: [],
        scrollTop: "0"
    },

    tabClick: function(e) {
        this.setData({
            activeCategoryId: e.currentTarget.id
        });
        this.getGoodList(this.data.activeCategoryId);
    },
    bindTypeTap: function(e) {
        this.setData({
            selectCurrent: e.index
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.request({
            url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/category/all',
            success: function(res) {
                var categories = [{ id: 0, name: "全部" }];
                if (res.data == 0) {
                    for (var i = 0; i < res.data.data.length; i++) {
                        categories.push(res.data.data[i]);
                    }
                }
                that.setData({
                    categories: categories,
                    activeCategoryId: 0
                });
                that.getGoodList(0);

            }
        })
    },
    toDetailsTap: function(e) {
        wx.navigateTo({
            url: "/pages/detail/detail?id=" + e.currentTarget.dataset.id
        })
    },
    getGoodList: function(categoryId) {
        if (categoryId == 0) {
            categoryId = '';
        }
        console.log(categoryId)
        var that = this;
        wx.request({
            url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/list',
            data: {
                categoryId: categoryId,
            },
            success: function(res) {
                that.setData({
                    goods: [],
                });
                var goods = [];
                for (var i = 0; i < res.data.data.length; i++) {
                    goods.push(res.data.data[i]);

                }
                that.setData({
                    goods: goods,
                });
            }
        })
    },

    nav_1: function() {
      wx.navigateTo({
        url: '../brands/index',
      })
    },
    nav_2: function() {
      wx.navigateTo({
        url: '../brands/index',
      })
    },
    nav_3: function() {
      wx.navigateTo({
        url: '../brands/index',
      })
    },
    nav_4: function() {
      wx.navigateTo({
        url: '../brands/index',
      })
    },
    nav_5: function() {
        wx.switchTab({
          url: '../madman/categ',
        })
    },
    nav_6: function() {
        wx.switchTab({
            url: '../type/categ',

        })
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
        return {
            title: 'madManProject爆品商城',
            path: '/pages/index/madman_index',
            success: function(res) {
                console.log('转发成功');
            },
            fail: function(res) {
                console.log('转发失败')
            }
        }

    },
})