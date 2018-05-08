// pages/brands/index.js
var app = getApp()
var fileData = require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    scrollTop: "0"
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/category/all',
      success: function (res) {
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
  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "/pages/detail/detail?id=" + e.currentTarget.dataset.id
    })
  },
  getGoodList: function (categoryId) {
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
      success: function (res) {
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
  }


})