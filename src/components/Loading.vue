<template>
  <div class="la-pacman la-3x" :style="{ color: loadingColor }">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingColor: '#209cee'
    }
  }
}
</script>
