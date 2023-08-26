// index.js
// 获取应用实例
const app = getApp()

Page({  
  data: {  
    imageSrc1: '../../img/cover0.jpg',  
    imageSrc2: '../../img/logo.png',
  },

  onLogin: function(){
    wx.navigateTo({
      url: '/pages/new_user/new_user',
    });
}
})