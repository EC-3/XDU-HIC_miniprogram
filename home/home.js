// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
		array: ['男', '女'],
        objectArray: [
      {
        id: 0,
        name: '男'
      },
      {
        id: 1,
        name: '女'
      }
      
    ],
    index: 0,
    array1: ['2023', '2022','2021','2020'],
        objectArray: [
      {
        id: 0,
        name: '2023'
      },
      {
        id: 1,
        name: '2022'
      },
      {
        id: 2,
        name: '2021'
      },
      {
        id: 3,
        name: '2020'
      }
      
    ],
  index1: 0,
  date: '1990-09-01',

  array2: ['全国甲卷', '全国乙卷','新课标1卷','新课标2卷','天津卷','上海卷','北京卷'],
  objectArray2: [
{
  id: 0,
  name: '全国甲卷'
},
{
  id: 1,
  name: '全国乙卷'
},
{
  id: 2,
  name: '新课标1卷'
},
{
  id: 3,
  name: '新课标2卷'
},
{
  id: 4,
  name: '天津卷'
},
{
  id: 5,
  name: '上海卷'
},
{
  id: 6,
  name: '北京卷'
}
],
index2: 0,
/**半屏弹窗 */
title: '点击通知弹出来',
    content: '这是一个示例内容。',
    showModal: false,
    iconUrl: '/images/notification.png'

	

	},
	bindPickerChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  index: e.detail.value
		})
	},
    bindPickerChangegrade: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  index1: e.detail.value
		})
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChangemathtype: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  index2: e.detail.value
		})
	},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})