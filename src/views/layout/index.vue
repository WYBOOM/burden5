<template>
  <div class="wy-content">
    <wyTitle />
    <router-view />
  </div>
</template>

<script>
import { wyTitle } from "./components";
export default {
  components: { wyTitle }
}
</script>

<style lang="scss" scoped>
</style>