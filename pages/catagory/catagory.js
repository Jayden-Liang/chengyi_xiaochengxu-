// pages/catagory/catagory.js

import {getTags, getDisplay, calHeight} from '../../service/catagory.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
     typelist:["女装","男装","童装","婴幼儿","运动"],
     stabletag:["全部商品","秋冬新品"],
     tags:[],
     display:[],
    activetag: '上衣类',
     activetype:'',
     displayHeight: ''

  },


  onMyEvent: function(e){
    const activetype = this.data.typelist[e.detail.index]
    const tags = getTags(activetype)
    let displays=''
    if (activetype=='运动'){
       displays = getDisplay(activetype, "运动女装")
    }else{
       displays = getDisplay(activetype, "上衣类")
    }
    const displayHeight = calHeight(displays.length)
    this.setData({
      tags: tags,
      activetype: activetype,
      display: displays,
      displayHeight: displayHeight
    })
  },

  onLoad: function(){
    const tags=getTags()
    const displays = getDisplay("女装", "上衣类")
    this.setData({
      tags: tags,
      display: displays,
      activetype:'女装',
      
    })
  },

  tagTap: function(e){
    const displays = getDisplay(this.data.activetype, e.target.dataset.name)
    const displayHeight= calHeight(displays.length)
    this.setData({
      display: displays,
      activetag: e.target.dataset.name,
      displayHeight: displayHeight
    })
  },

  tapAllgoods: function(){
    console.log('ye')
    wx.switchTab({
      url: '/pages/index/index'
    })
  }






})

