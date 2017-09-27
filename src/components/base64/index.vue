<template>
  <div class="mdui-container doc-container doc-no-cover pdl240">
    <h1 class="doc-title mdui-text-color-theme">Generating Base64</h1>
    <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" @click="input.click()">Upload File</button>
    <div class="prview" v-if="base64">
      <p>size : {{ base64.length }}</p>
      <img :src="base64" v-if="base64.indexOf('data:image') >= 0"/>
    </div>
    <div class="mdui-textfield">
      <textarea class="mdui-textfield-input" placeholder="Please select a file" v-model="base64" @click="click"></textarea>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'base64',
    data() {
      return {
        input: document.createElement('input'),
        base64:''
      }
    },
    mounted() {
      document.title = 'MuMuTools - Generating Base64'
      this.input.setAttribute('type','file')
      this.input.addEventListener('change',this.changeFile)
    },
    methods: {
      changeFile() {
        let reader = new FileReader()
        reader.onload = evt =>{
          this.base64 = evt.target.result
        }
        this.base64 = 'loading...'
        reader.readAsDataURL(event.target.files[0])
      },
      click() {
        event.target.select()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .prview{
    margin-top: 16px;
    img{
      display: block;
      max-width: 300px;
    }
  }
</style>
