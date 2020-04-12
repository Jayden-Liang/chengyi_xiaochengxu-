// components/Modal/Modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,   //没传就用默认的标题
      observer: function (newVal, oldVal) {       //会先打印新的值，然后旧的值
        console.log(newVal, oldVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showModal: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancelModal(){
      this.triggerEvent('cancelmodal', false)
    }
  }

})
