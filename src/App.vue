<template>
  <div>
    <t-nav></t-nav>
    <left></left>
    <router-view></router-view>
    <alert></alert>
    <chat></chat>
  </div>
</template>

<script>
import chat    from './components/chat/index.vue'
import tNav    from './components/nav.vue'
import left    from './components/left.vue'
import alert   from './components/alert.vue'
import fontNav from './components/fontNav.vue'
export default {
  name: 'app',
  components: {
    left, alert, fontNav, tNav, chat
  }
}
</script>

<style>
.ml240{
	margin-left: 240px;
}
.ml32{
  margin-left: 32px;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.clear
{
  clear: both;
}
.border-bottom-ccc{
  border-bottom: 1px solid #ccc;
}
.text-center{
  text-align: center;
}
</style>
