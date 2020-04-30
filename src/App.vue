<template>
  <div id="app">
    <BladeContainer/>
  </div>
</template>

<script>
import BladeContainer from './components/BladeContainer.vue'

export default {
  name: 'App',
  components: {
    BladeContainer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
