<template>
  <div id="app2">
    <module-header></module-header>

    <router-view></router-view>

    <module-footer></module-footer>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ModuleFooter from './components/module-footer.vue'
import ModuleHeader from './components/module-header.vue'

export default {
  name: 'app',
  components: {
    Hello,ModuleFooter,ModuleHeader
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
