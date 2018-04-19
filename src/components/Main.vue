<template>
  <div class="main">
    <slider class="slider size" auto-play="true">
      <div v-for="(src,index) in posters" :key="index">
        <image class="size" :src="src"></image>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
    <div class="titleBar">
      <div class="simplePic">
        <image src="/src/assets/tagbar/tagbar_1.png" class="picture"></image>
        <div class="picbottom">投资</div>
      </div>
      <div class="simplePic">
        <image src="/src/assets/tagbar/tagbar_2.png" class="picture"></image>
        <div class="picbottom">基金</div>
      </div>
      <div class="simplePic">
        <image src="/src/assets/tagbar/tagbar_4.png" class="picture"></image>
        <div class="picbottom">保险</div>
      </div>
      <div class="simplePic">
        <image src="/src/assets/tagbar/tagbar_1.png" class="picture"></image>
        <div class="picbottom">黄金</div>
      </div>
      <div class="simplePic">
        <image src="/src/assets/tagbar/tagbar_2.png" class="picture"></image>
        <div class="picbottom">银证交易</div>
      </div>
      <div class="simplePic">
        <image src="/src/assets/tagbar/tagbar_3.png" class="picture"></image>
        <div class="picbottom">生活缴费</div>
      </div>
      <div class="simplePic">
        <image src="/src/assets/tagbar/tagbar_4.png" class="picture"></image>
        <div class="picbottom">电影</div>
      </div>
      <div class="simplePic">
        <image src="/src/assets/tagbar/tagbar_2.png" class="picture"></image>
        <div class="picbottom">旅游</div>
      </div>
      <div class="simplePic">
        <image src="/src/assets/tagbar/tagbar_3.png" class="picture"></image>
        <div class="picbottom">手机充值</div>
      </div>
      <div class="simplePic">
        <image src="/src/assets/tagbar/tagbar_1.png" class="picture"></image>
        <div class="picbottom">全部</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main {
    width:750px;
  }
  .size {
    width: 750px;
    height: 243px;
  }
  .slider {
    position: relative;
  }
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.3);
    itemColor: #DDDDDD;
    itemSelectedColor: rgb(0, 180, 255);
  }
  .titleBar {
    width: 750px;
    height: 300px;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .picture {
    width: 50px;
    height: 50px;
    margin: 10px auto;
  }
  .simplePic {
    width:150px;
    height: 150px;
    align-items: center;
    justify-content: center;
  }
  .picbottom{
    font-size:25px;
    text-align:center;
  }
</style>

<script>
export default {
  data () {
    return {
      posters: [
        '/src/assets/banner/banner1.png',
        '/src/assets/banner/banner1.png',
        '/src/assets/banner/banner1.png'
      ]
    }
  }
}
</script>
