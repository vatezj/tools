<template>
<div class="doc-footer-nav mdui-color-theme">
  <div class="mdui-container">
    <div class="mdui-row">
      <a href="./progress" class="mdui-ripple mdui-color-theme mdui-col-xs-2 mdui-col-sm-6 doc-footer-nav-left">
        <div class="doc-footer-nav-text">
          <i class="mdui-icon material-icons">arrow_back</i>
          <span class="doc-footer-nav-direction mdui-hidden-xs-down">Previous</span>
          <div class="doc-footer-nav-chapter mdui-hidden-xs-down">进度指示器</div>
        </div>
      </a>
      
      <a href="./headroom" class="mdui-ripple mdui-color-theme mdui-col-xs-10 mdui-col-sm-6 doc-footer-nav-right">
        <div class="doc-footer-nav-text">
          <i class="mdui-icon material-icons">arrow_forward</i>
          <span class="doc-footer-nav-direction">Next</span>
          <div class="doc-footer-nav-chapter">Headroom</div>
        </div>
      </a>
    </div>
  </div>
</div>
</template>
<script>
export default {
name: 'fontNav',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>