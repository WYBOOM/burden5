<template>
  <div class="content">
    <el-switch v-model="switch1"
               @change='dodo'
               inactive-text="立即手冲开关"
               active-color="#13ce66"
               inactive-color="#ff4949">
    </el-switch>
    <img class="img"
         v-if="switch1"
         src="../assets/img/img1.jpg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      switch1: false
    }
  },
  methods: {
    dodo () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  margin: 30px auto;
  text-align: center;
  .img {
    display: block;
    height: 50%;
    border-radius: 50%;
    margin: 50px auto
  }
}
</style>