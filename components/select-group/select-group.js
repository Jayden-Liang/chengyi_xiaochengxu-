// components/select-group/select-group.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     typelist:{
       type: Array,
       value: []
     }
  },
  externalClasses: ['flexclass','activeclass'],
  /**
   * 组件的初始数据
   */
  data: {
    ownclass: 'each',
    active: []
  },


  /**
   * 组件的方法列表
   */
  methods: {
    tapName: function(event){
      const index = event.target.dataset.index
      const my_active = [...Array(this.properties.typelist.length)].map(item => 0)
      my_active[index]=1
      this.triggerEvent('myevent', { index: event.target.dataset.index});
      this.setData({
        active: my_active
      })
    }
  },
  pageLifetimes: {
    show: function () {
      const checkactive=[...Array(this.properties.typelist.length)].map(item=>0)
      this.setData({
        active: checkactive
      })
    }
  }
})
