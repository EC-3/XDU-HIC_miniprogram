const app = getApp()

Page({
  data:{
    imageHome:'../../img/home.png',
    imageApply:'../../img/add.png',
    imageUser:'../../img/user.png',
    



    groups: [  
      // 假设这里是一些商品数据，您需要根据实际情况进行替换  
      { id: 1,name: '商品1', price: 100 },  
      { id: 2, name: '商品2', price: 200 },  
      { id: 3, name: '商品3', price: 300 },  
    ],  
  },
    
    btn1:function(){
      wx.navigateTo({
        url: '/pages/home/home',
      })
    },
  
    btn3:function(){
      wx.navigateTo({
        url: '/pages/user/user',
      })
    }
})