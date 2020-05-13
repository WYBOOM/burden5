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
    <div class="img-content wy-img-content">
      <el-image :src="wyImgSrc"
                @click.native='shouLoginForm'
                :class="wyImgName"
                fit="fit">
      </el-image>

      <transition name="slide-fade">
        <el-form v-if="wyIsLogin"
                 ref="wyLoginForm"
                 :rules="WyRules"
                 :model="wyFormData">
          <el-form-item prop="name">
            <el-input placeholder="账号"
                      size="small"
                      :autofocus='true'
                      v-model="wyFormData.name"
                      ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码"
                      size="small"
                      @keydown.enter.native='login'
                      v-model="wyFormData.password"
                      type="password"></el-input>
          </el-form-item>
          <el-button size="small"
                     @click="login">登录</el-button>
          <el-button size="small"
                     @click="jump('wy')">游客登录</el-button>
        </el-form>
      </transition>

    </div>
    <el-divider direction="vertical">

    </el-divider>
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

import { login } from "@/api/login";
export default {
  data () {
    return {
      /**
       * wy Data
       */
      WYimg: {
        WYimgListName: ['chandler.jpg', 'joey1.jpg', 'chandler2.jpg', 'friends1.jpg'],
        WYimgListContent: [],
        wysrc: ''
      },
      wyFormData: {
        name: '',
        password: ''
      },
      wyIsLogin: false,
      wyImgName: '',
      wyImgSrc: '',

      //表单验证规则
      WyRules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'change' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  created () {
    this.requireImg('/img/wy-img/', this.WYimg.WYimgListName, this.WYimg.WYimgListContent)
    this.wyImgSrc = this.WYimg.WYimgListContent[Math.floor(Math.random() * (this.WYimg.WYimgListName.length))]
  },
  methods: {
    requireImg (Url, imgListName, imgListContennt) {
      imgListName.forEach(element => {
        imgListContennt.push(`${Url}${element}`)
      });
    },

    //展示登录表单
    shouLoginForm () {
      if (this.wyIsLogin) {
        // this.wyImgName = 'toRight'
      } else {
        // this.wyImgName = 'toLeft'
      }
      this.wyIsLogin = !this.wyIsLogin
    },

    login () {
      this.$refs['wyLoginForm'].validate(async (valid) => {
        if (valid) {
          let res = await login({
            username: this.wyFormData.name,
            password: this.wyFormData.password
          })
          if (res.status == 200) {
            //登录成功

            // 将token传入localstorage用于之后接口验证
            window.localStorage.setItem('token', res.data.token)
            this.jump('wy')

          } else {
            this.$alert(`${res.data.message}`, '错误', {
              type: 'error',
              confirmButtonText: '确定',
              dangerouslyUseHTMLString: true,
            });
          }

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },


    //url跳转
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
  overflow: auto;
  .particles {
    height: 100%;
    width: 100%;
    z-index: 1;
    position: absolute;
  }
  .gradient {
    height: 100%;
    width: 100%;
    z-index: 0;

    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #1a1724;
  }
  .el-divider {
    height: 40vh;
    margin: 0 5vw;
  }
  .img-content {
    z-index: 10;
    box-sizing: border-box;
    border-radius: 5%;

    // 用户禁止选择
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    .el-image {
      width: 30vh;
      height: 30vh;
      min-height: 200px;
      min-width: 200px;
      border-radius: inherit;
    }
  }

  .wy-img-content {
    .el-form {
      position: absolute;
      left: 15vw;
      top: 35vh;
      opacity: 0.7;
    }

    .slide-fade-enter-active {
      transition: all 0.3s ease;
    }
    .slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  .el-image:hover {
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