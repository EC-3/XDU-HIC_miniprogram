Page({
    data: {
          title: '恭喜你',
          message: '面试成功！'
    
    },
    onLoad: function(options) {
      // 获取面试结果
      const interviewResult = options.result;
  
      if (interviewResult === 'success') {
        this.setData({
          title: '恭喜你',
          message: '面试成功！'
        });
      } else if (interviewResult === 'failure') {
        this.setData({
          title: '很抱歉',
          message: '面试失败！'
        });
      }
    }
  });