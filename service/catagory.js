export function getTags(select){
  switch (select){
    case "女装":
      return ["上衣类","外套类","下身类","连衣裙","内着类","家居服","配件"]
    case "男装":
      return ["上衣类", "外套类", "下身类", "内着类", "家居服", "配件"]
    case "童装":
      return ["上衣类", "外套类", "下身类", "连衣裙", "内着类", "家居服", "配件"]
    case "婴幼儿":
      return ["上衣类", "外套类", "下身类", "内着类", "家居服", "配件"]
    case "运动":
      return ["运动女装", "运动男装", "运动童装"]
    default:
      return ["上衣类", "外套类", "下身类", "连衣裙", "内着类", "家居服", "配件"]
  }
}

export function getDisplay(type, tag){
  if (type==='女装'){

  }
  return myDisplay(type,tag)
}

export function calHeight(displayNum){
  if (displayNum<=6 && displayNum>3){

    return 340
  } else if (displayNum <= 9 && displayNum > 6){
    return 510
  } else if (displayNum <= 12 && displayNum > 9){
    return 680
  } else {
    return ''
  }
  
}


function myDisplay(type, tag){
  if (type === "女装") {
    switch (tag) {
      case '上衣类':
        const all = ['印花短T', '印花长T', '七分/长袖', '中高两翻领', '针织衫', '法兰绒系列', '休闲衬衫', '商务衬衫', '长版上衣', '卫衣系列', '摇粒绒系列', '短袖/背心', 'POLO衫', 'Pima棉']
        const rtn = all.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/shangyi/female/${index + 1}.png`
          }
        })
        return rtn
      case "外套类":
        const all_waitao = ['轻型羽绒', '保暖羽绒', '摇粒绒系列', '休闲外套']
        const rtn_waitao = all_waitao.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/waitao/female/${index + 1}.png`
          }
        })
        return rtn_waitao
      case "下身类":
        const all_xiashen = ['牛仔系列', '紧身打底裤', '阔腿裤系列', '休闲长裤', '保暖裤', '休闲短裤', '裙子']
        const rtn_xiashen = all_xiashen.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/xiashen/female/${index + 1}.png`
          }
        })
        return rtn_xiashen
      case "连衣裙":
        const all_lianyiqun = ['连衣裙']
        const rtn_lianyiqun = all_lianyiqun.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/lianyiqun/female/${index + 1}.png`
          }
        })
        return rtn_lianyiqun
      case "内着类":
        const all_neizhuo = ['无钢圈系列', 'Bra系列', '秋衣秋裤', '清凉系列', '吊带衫背心', '打底裤', '内裤系列', '袜子系列']
        const rtn_neizhuo = all_neizhuo.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/neizhuo/female/${index + 1}.png`
          }
        })
        return rtn_neizhuo
      case "家居服":
        const all_jiaju = ['家居套装', '家居连衣裙', '家居裤', '家居毯']
        const rtn_jiaju = all_jiaju.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/jiaju/female/${index + 1}.png`
          }
        })
        return rtn_jiaju
      case "配件":
        const all_peijian = ['皮带', '围巾', '鞋类', '其他']
        const rtn_peijian = all_peijian.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/peijian/female/${index + 1}.png`
          }
        })
        return rtn_peijian
    }
  }
  if (type === "男装") {
    switch (tag) {
      case '上衣类':
        const all = ['印花短T', '印花长T', '七分/长袖', '中高两翻领', '针织衫', '法兰绒系列', '休闲衬衫', '商务衬衫', '卫衣系列', '摇粒绒系列', '短袖/背心', 'POLO衫', 'Pima棉']
        const rtn = all.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/shangyi/male/${index + 1}.png`
          }
        })
        return rtn
      case "外套类":
        const all_waitao = ['轻型羽绒', '保暖羽绒', '摇粒绒系列', '休闲外套']
        const rtn_waitao = all_waitao.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/waitao/male/${index + 1}.png`
          }
        })
        return rtn_waitao
      case "下身类":
        const all_xiashen = ['保暖裤', '休闲长裤', '牛仔裤', '束脚九分裤', '短/七分裤']
        const rtn_xiashen = all_xiashen.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/xiashen/male/${index + 1}.png`
          }
        })
        return rtn_xiashen
      case "内着类":
        const all_neizhuo = ['秋衣秋裤', '内衣/背心', '紧身打底裤', '清凉系列', '内裤系列','袜子系列']
        const rtn_neizhuo = all_neizhuo.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/neizhuo/male/${index + 1}.png`
          }
        })
        return rtn_neizhuo
      case "家居服":
        const all_jiaju = ['家居套装', '家居裤']
        const rtn_jiaju = all_jiaju.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/jiaju/male/${index + 1}.png`
          }
        })
        return rtn_jiaju
      case "配件":
        const all_peijian = ['皮带', '围巾', '其他', '鞋类']
        const rtn_peijian = all_peijian.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/peijian/male/${index + 1}.png`
          }
        })
        return rtn_peijian
    }
  }
  if (type === "童装") {
    switch (tag) {
      case '上衣类':
        const all = ['印花短T', '印花长T', '中高两翻领','长袖','长版上衣','卫衣系列','摇粒绒系列', '法兰绒系列','休闲衬衫','短袖/背心']
        const rtn = all.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/shangyi/child/${index + 1}.png`
          }
        })
        return rtn
      case "外套类":
        const all_waitao = ['保暖羽绒', '夹棉外套', '摇粒绒系列', '休闲外套']
        const rtn_waitao = all_waitao.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/waitao/child/${index + 1}.png`
          }
        })
        return rtn_waitao
      case "下身类":
        const all_xiashen = ['保暖裤', '休闲长裤','牛仔系列','紧身打底裤', '连衣裙', '连身装', '裙子', '休闲短裤']
        const rtn_xiashen = all_xiashen.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/xiashen/child/${index + 1}.png`
          }
        })
        return rtn_xiashen
      case "连衣裙":
        const all_lianyiqun = ['连衣裙']
        const rtn_lianyiqun = all_lianyiqun.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/lianyiqun/child/${index + 1}.png`
          }
        })
        return rtn_lianyiqun
      case "内着类":
        const all_neizhuo = ['清凉系列', '女童胸衣', '打底裤','秋衣秋裤', '内裤', '袜子']
        const rtn_neizhuo = all_neizhuo.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/neizhuo/child/${index + 1}.png`
          }
        })
        return rtn_neizhuo
      case "家居服":
        const all_jiaju = ['家居套装', '家居连衣裙', '其他']
        const rtn_jiaju = all_jiaju.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/jiaju/child/${index + 1}.png`
          }
        })
        return rtn_jiaju
      case "配件":
        const all_peijian = [ '围巾', '鞋类']
        const rtn_peijian = all_peijian.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/peijian/child/${index + 1}.png`
          }
        })
        return rtn_peijian
    }
  }
  if (type === "婴幼儿") {
    switch (tag) {
      case '上衣类':
        const all = ['印花短T', '印花长T', '连体装', '长袖', '卫衣系列', '摇粒绒系列', '包臀衣']
        const rtn = all.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/shangyi/child/${index + 1}.png`
          }
        })
        return rtn
      case "外套类":
        const all_waitao = ['休闲外套', '摇粒绒系列','夹棉外套']
        const rtn_waitao = all_waitao.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/waitao/child/${index + 1}.png`
          }
        })
        return rtn_waitao
      case "下身类":
        const all_xiashen = [ '牛仔系列', '休闲长裤', '裙子', '休闲短裤', '紧身裤', '连身装' ]
        const rtn_xiashen = all_xiashen.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/xiashen/child/${index + 1}.png`
          }
        })
        return rtn_xiashen
      case "内着类":
        const all_neizhuo = ['打底裤', '秋衣秋裤', '袜子系列']
        const rtn_neizhuo = all_neizhuo.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/neizhuo/child/${index + 1}.png`
          }
        })
        return rtn_neizhuo
      case "家居服":
        const all_jiaju = ['家居套装', '家居裤']
        const rtn_jiaju = all_jiaju.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/jiaju/child/${index + 1}.png`
          }
        })
        return rtn_jiaju
      case "配件":
        const all_peijian = [ '鞋类','其他配件']
        const rtn_peijian = all_peijian.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/peijian/child/${index + 1}.png`
          }
        })
        return rtn_peijian
    }
  }
  if (type == "运动") {
    switch (tag) {
      case '运动女装':
        const all = ['上衣类-女', '运动Bra', '外套类-女', '下身类-女', '配件类-女']
        const rtn = all.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/sports/female/${index + 1}.png`
          }
        })
        return rtn
      case "运动男装":
        const all_waitao = ['上衣类-男', '外套类-男', '下身类-男', '配件类-男']
        const rtn_waitao = all_waitao.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/sports/male/${index + 1}.png`
          }
        })
        return rtn_waitao
      case "运动童装":
        const all_tongzhuang = ['上衣类-童', '外套类-童', '下身类-童', '配件类-童']
        const rtn_tongzhuang = all_tongzhuang.map((item, index) => {
          return {
            name: { item },
            url: `/assets/images/catagory/tags/sports/child/${index + 1}.png`
          }
        })
        return rtn_tongzhuang
    }
  }
}