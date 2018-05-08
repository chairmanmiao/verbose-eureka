/*
轮播图获取

*/
function getBannerData(){
  var arr = ['../../image/lunbo1.jpg','../../image/lunbo2.jpg','../../image/lunbo3.jpg']
    return arr;
}



/*
对外暴露接口
 */


module.exports={
  /**
   * 轮播图图片位置接口
   */
  getBannerData:getBannerData
}
