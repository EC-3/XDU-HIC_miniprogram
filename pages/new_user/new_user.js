// index.js
// 获取应用实例
const app = getApp()

Page({  
  data: {  
    text: ''  
  },  
  // 在js文件中编写表单提交事件的监听函数  
formSubmit: function (event) {  
  var name = event.detail.value.name;  
  var idNumber = event.detail.value.idNumber;  
  var contact = event.detail.value.contact;  
  // 其他表单元素的值  
  
  // 对收集到的个人信息进行处理或提交到后端服务器  
  // ...  
},
onTap:function(){
  wx.navigateTo({
    url: '/pages/home/home',
  })
}
})
  // 事件处理函数
