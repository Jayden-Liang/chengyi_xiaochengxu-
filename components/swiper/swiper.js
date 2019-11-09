// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imaglocation: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
     
  },
  pageLifetimes:{
    show: function(){
       const a=[...Array(5)]
       const locations=a.map((item,index)=>{
         return `/assets/images/home/swiper/swiper-${index+1}.jpg`
       })
       this.setData({
         imaglocation:locations
       })

    }

  }
})
