<template>
  <div class="content">
    <vue-particles color="#b6da73"
                   class="particles"
                   :particleOpacity="0.7"
                   :particlesNumber="40"
                   shapeType="circle"
                   :particleSize="4"
                   linesColor="#dedede"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="150"
                   :moveSpeed="2"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push">
    </vue-particles>
    <div class="img-content"
         @click="jump('wy')">
      <el-image :src="this.WYimg.WYimgListContent[Math.floor(Math.random() * (this.WYimg.WYimgListName.length ) )]"
                fit="fit"></el-image>
      <!-- <img :src="WYimg.WYimgListContent[0]"
           alt=""> -->
    </div>
    <el-divider direction="vertical"></el-divider>
    <div class="img-content"
         @click="jump('gsc')">
      <el-image src=""
                fit="fit"></el-image>
    </div>
  </div>
</template>
<script>
// vue-particles 插件
// color: String类型。默认'#dedede'。粒子颜色。
// particleOpacity: Number类型。默认0.7。粒子透明度。
// particlesNumber: Number类型。默认80。粒子数量。
// shapeType: String类型。默认'circle'。可用的粒子外观类型有："circle","edge","triangle", "polygon","star"。
// particleSize: Number类型。默认80。单个粒子大小。
// linesColor: String类型。默认'#dedede'。线条颜色。
// linesWidth: Number类型。默认1。线条宽度。
// lineLinked: 布尔类型。默认true。连接线是否可用。
// lineOpacity: Number类型。默认0.4。线条透明度。
// linesDistance: Number类型。默认150。线条距离。
// moveSpeed: Number类型。默认3。粒子运动速度。
// hoverEffect: 布尔类型。默认true。是否有hover特效。
// hoverMode: String类型。默认true。可用的hover模式有: "grab", "repulse", "bubble"。
// clickEffect: 布尔类型。默认true。是否有click特效。
// clickMode: String类型。默认true。可用的click模式有: "push", "remove", "repulse", "bubble"。
export default {
  data () {
    return {
      WYimg: {
        WYimgListName: ['chandler.jpg', 'joey1.jpg', 'chandler2.jpg', 'friends1.jpg'],
        WYimgListContent: [],
        wysrc:''
      },
      publicPath: process.env.BASE_URL,
    }
  },
  created () {
    this.requireImg('/img/wy-img/', this.WYimg.WYimgListName, this.WYimg.WYimgListContent)
  },
  methods: {

    requireImg (Url, imgListName, imgListContennt) {
      imgListName.forEach(element => {
        imgListContennt.push(`${Url}${element}`)
      });
    },

    jump (str) {

      switch (str) {
        case 'wy':
          this.$router.push('/wy')
          break;
        case 'gsc':
          this.$router.push('/gsc')
          break;

        default:
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .particles {
    height: 100%;
    width: 100%;
    z-index: 0;
    position: absolute;
  }
  .el-divider {
    height: 40vh;
    margin: 0 200px;
  }
  .img-content {
    z-index: 10;
    width: 30vh;
    box-sizing: border-box;
    height: 30vh;
    border-radius: 5%;
    min-height: 200px;
    min-width: 200px;
    // 用户禁止选择
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .el-image {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
    img {
      width: 100%;
      height: 100%;
      color: #b6da73;
    }
  }
  .img-content:hover {
    animation: borderanni 1s;
    animation-fill-mode: forwards;
  }

  @keyframes borderanni {
    0% {
    }
    100% {
      box-shadow: 0 12px 54px rgba(0, 0, 0, 0.336),
        0 10px 26px rgba(0, 0, 0, 0.04);
    }
  }
}
</style>