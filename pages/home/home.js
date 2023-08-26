const app = getApp()


Page({
  method: 'GET',  
  headers: {  
    'cache-control': 'no-cache'  
  },  
data:{
  imageHome:'../../img/home.png',
  imageApply:'../../img/add.png',
  imageUser:'../../img/user.png',
},
  
  btn2:function(){
    wx.navigateTo({
      url: '/pages/application/application',
    })
  },

  btn3:function(){
    wx.navigateTo({
      url: '/pages/user/user',
    })
  }
})