<template>

<div class="mdui-container doc-container doc-no-cover pdl240">
	<h1 class="doc-title mdui-text-color-theme">二维码生成</h1>
  <vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>
  <input type="text" :value='config.value' v-model="config.value">
</div>
</template>
<script>
import VueQArt from 'vue-qart'
export default {
  components: {VueQArt},
  data () {
      return {
          config: {
              value: 'http://',
              imagePath: './static/img/ava.fe7aff8.png',
              filter: 'color'
          },
          downloadButton: false
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
    }
  }
}
</script>
<style>
</style>