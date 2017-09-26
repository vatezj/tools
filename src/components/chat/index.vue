<template>
<div class="chat">
	 <a href="javascript:void(0)" @click="showCen" v-if="isShowChatNum">
     <div class="chat-in mdui-color-theme-accent">
        <i class="mdui-icon material-icons">message</i>
  	 </div>
   </a>
	<chat-cent :show="isShowChatCen" :button="isShowChatNum" @change="change"></chat-cent>
</div>
</template>
<script scoped>
import chatCent from '../chat/chat.vue'
export default {
  name: 'chat',
  components:{
    'chat-cent':chatCent
  },
  data()
  {
  	return{
  		'isShowChatNum':true,
  		'isShowChatCen':false
  	}
  },
  methods:{
  	showCen()
  	{
  		this.isShowChatCen = true;
      this.isShowChatNum = false;
  	},
    change(show)
    {
      this.isShowChatCen = show.show;
      this.isShowChatNum = show.button;
    }
  }
}
</script>
<style lang=''>
.chat-in{
  position: fixed;
  bottom: 0px;
  right: 20px;
  width: 50px;
  height: 25px;
  padding-top: 5px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  text-align: center;
}
</style>
