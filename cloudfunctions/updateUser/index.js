// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, _) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()

  if (wxContext.OPENID === undefined) {
    return {
      code: 1001,
      msg: "openId not found"
    }
  }

  return await db.collection("user")
    .where({
      openId: wxContext.OPENID
    }).update({
      data: {
        name: event.name,
        // 头像
        avatarUrl: event.avatarUrl,
        // 性别
        gender: event.gender,
        // 年级
        grade: event.grade,
        // 生日
        birthday: event.birthday,
        // 专业
        professional: event.professional,
        //学号
        studentNum: event.studentNum,
        //手机号
        phone: event.phone,
        //邮箱
        email: event.email,
        //个人简介
        introduction: event.introduction,
        //高考数学卷种
        mathVolume:event.mathVolume,
        //数学分数
        scores:event.scores,
        title: event.title
      }
    })
    .then(_ => {
      return {
        code: 1000,
        msg: "updated"
      }
    })
    .catch(e => {
      console.log(e)

      return {
        code: 1100,
        msg: "server internal error"
      }
    })
}
