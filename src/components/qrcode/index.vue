<template>
<div class="mdui-container doc-container doc-no-cover pdl240">
  <h1 class="doc-title mdui-text-color-theme">二维码生成</h1>
  <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-6 mdui-col-lg-6 mdui-col-xl-6">
      <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-focus">
        <i class="mdui-icon material-icons">message</i>
        <label class="mdui-textfield-label">二维码内容</label>
        <input class="mdui-textfield-input" v-model='url'></input>
      </div>
    <!--   <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-focus">
        <i class="mdui-icon material-icons">tv</i>
        <label class="mdui-textfield-label">二维码login</label>
        <input class="mdui-textfield-input" v-model='logoSrc'></input>
      </div> -->
      <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-focus">
        <i class="mdui-icon material-icons">beenhere</i>
        <label class="mdui-textfield-label">数据区域点缩小比例</label>
        <input class="mdui-textfield-input" v-model='dotScale'></input>
      </div>
      <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-focus">
        <i class="mdui-icon material-icons">child_care</i>
        <label class="mdui-textfield-label">size</label>
        <input class="mdui-textfield-input" v-model='size'></input>
      </div>
      <!-- <button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="craete()">下载</button> -->
  </div>
  <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-6 mdui-col-lg-6 mdui-col-xl-6 text-center">
  <div v-html="">
     <vue-qr :bgSrc="bgSrc" :logoSrc="logoSrc" :text="url" height="400" width="400" :colorDark="colorDark" :colorLight="colorLight" :dotScale="dotScale" :callback="callback" :size='size'></vue-qr>
  </div>
   
  </div>
  
</div>
</template>
<script>
import VueQr from 'vue-qr'
export default {
  components: {VueQr},
  data () {
      return {
          logoSrc:'http://odxoktz7n.bkt.clouddn.com/ava.fe7aff8.png',
          bgSrc:'http://odxoktz7n.bkt.clouddn.com/ava.fe7aff8.png',
          url:'www.baidu.com',
          colorDark:'#000000',
          colorLight: "#ffffff",
          dotScale: 0.5,
          end:'',
          size:400
      }
  },
  mounted () {  
    document.title="二维码生成"
  },
  methods: {
    onChangeImage(file) {
      /*
      {
        size: 93602,
        filetype: 'image/jpeg',
        filename: 'user.jpg',
        base64:   '/9j/4AAQSkZJRg...'
      }
      */
    },
    callback(dataURI)
    {
       this.end = dataURI
    },
    craete()
    {
        alert(1)
    }
  }
}
</script>
<style>
</style>