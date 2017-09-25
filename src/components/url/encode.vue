<template>

<div class="mdui-container doc-container doc-no-cover pdl240">
	<h1 class="doc-title mdui-text-color-theme">URL encode/decode</h1>
	<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5">
		<div class="encode">
			<textarea ref='encode'>
				
			</textarea>
		</div>
	</div>
	<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-2 mdui-col-lg-2 mdui-col-xl-2 w1">
		<div class="change-button">
			<button class="mdui-btn mdui-color-theme-accent mdui-ripple v30" @click="urlEncode()">编码<i class="mdui-icon material-icons">arrow_forward</i></button>
			<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="urlDecode()"><i class="mdui-icon material-icons">arrow_back</i>解码</button>
		</div>
	</div>
	<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5">
		<div class="encode">
			<textarea ref='decode'>
				
			</textarea>
		</div>
	</div>
</div>
</template>
<script>
import time from '../../fetch/time.js'
export default {
	name: 'url',
	mounted () {  
    	document.title="URL encode/decode";
    	this.$refs.encode.value = this.encode; 
    	this.$refs.decode.value = this.decode;
  	},
 	data () {
	    return {
	      encode:'木木工具',
	      decode:'%e6%9c%a8%e6%9c%a8%e5%b7%a5%e5%85%b7'
	    }
  	},
  	methods:{
  		urlEncode()
  		{
  			this.$refs.decode.value = encodeURI(this.$refs.encode.value);
  		},
  		urlDecode()
  		{
  			this.$refs.encode.value = decodeURI(this.$refs.decode.value);
  		}
  	}
}
</script>
<style>
.content{
	/* text-align: center; */
}
.w1{
	text-align: center;
}
.encode{
	padding: 10px;
}
.encode textarea{
	width: 100%;
	height: 300px;
	padding: 10px;
	font-weight: bold;
	font-family: "微软雅黑";
	font-size: 18px;
}
.v30{
	margin-bottom: 30px;
}
.change-button{
	/* text-align: center;
	padding: 100px 10px; */
	padding: 100px 0;
}
@media screen and (max-width: 1024px) {
    .change-button{
		padding: 30px 0;
	}
	.v30{
		margin-bottom: 0px;
	}
}
</style>