

<template>
    <div class="mdui-container doc-container">
        <h1 class="doc-title mdui-text-color-theme">Send E-mail</h1>
        <div class="mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label">Email</label>
            <input class="mdui-textfield-input" type="email" v-model="to"/>
        </div>
        <div class="mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label">Title</label>
            <input class="mdui-textfield-input" type="text" v-model="title"/>
        </div>
        <div class="mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label">Message</label>
            <textarea class="mdui-textfield-input min_200" v-model="content"></textarea>
        </div>
        <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" @click="send">发送</button>
   </div>
</template>

<script>
export default {
  data() {
      return {
          to:'',
          title: '',
          content: '',
          allow:true  //防止连续点击
      }
  },
  methods: {
      isEmail(str){ 
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(str)
      },
      send() {
          if(!this.allow){
              return
          }
          this.allow = false
          if(!this.isEmail(this.to)){
              alert('邮箱不对')
              return
          }else if(this.title === ''){
              alert('请输入标题')
              return
          }else if(this.content === ''){
              alert('请输入内容')
              return
          }else{
              let query = 'to=' + this.to + '&title=' + this.title + '&content=' + this.content
              //    http://127.0.0.1:1234/send-mail
              fetch('https://tools.vate.ren/send-mail?' + query).then(res => {
                 res.json().then(data => {
                    this.allow = true
                    alert(data.msg)
                 })
              })
          }
      }
  }
}
</script>


<style lang="scss" scoped>
.min_200{
    min-height: 200px;
}
</style>
