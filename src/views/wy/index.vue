<template>
  <div class="content">
    <h1 style="text-align:center">wydir</h1>
  </div>
</template>

<script>
import { get_posts, post_posts, get_users, post_users } from "@/api/api";
export default {

  async  created () {
    let res = await post_users({
    })
  }

}
</script>

<style>
#canvas {
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1a1724;
}
.canvas-wrap {
  position: relative;
}
div.canvas-content {
  position: relative;
  z-index: 2000;
  color: #fff;
  text-align: center;
  padding-top: 30px;
}
</style>