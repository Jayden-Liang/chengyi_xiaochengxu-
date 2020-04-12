// pages/index/products/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: false,
    isShow: false,
    show: false,
    showGurranteeModal: false,
    showSelectModal: false,
    buttons: [
      {
        type: 'default',
        className: '',
        text: '辅助操作',
        value: 0
      },
      {
        type: 'primary',
        className: '',
        text: '主操作',
        value: 1
      }
    ]

  },
  openSelectModal: function () {
    this.setData({
      showSelectModal: true
    })
  },
  openGurranteeModal(){
    this.setData({
      showGurranteeModal: true
    })
  },
  buttontap(e) {
    console.log(e.detail)
  },
  handleCancelModal(event){
     this.setData({
       show: false,
       showGurranteeModal: false
     })
  },
  wakeUpbtns(){
    if (this.data.isActive == false){
      this.setData({
        isActive: true,
        isShow: true
      })
    }else{
      this.setData({
        isActive: false,
        isShow: false
      })
    }
  }
})