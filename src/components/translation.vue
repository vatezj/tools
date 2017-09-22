<template>

<div class="mdui-container doc-container doc-no-cover pdl240">
	<h1 class="doc-title mdui-text-color-theme">翻译</h1>
	<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5">
		<div class="encode">
			<textarea ref='zh'>
				
			</textarea>
		</div>
	</div>
	<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-2 mdui-col-lg-2 mdui-col-xl-2 w2">
		<div class="change-button">
			<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="get()">中转英<i class="mdui-icon material-icons">arrow_forward</i></button>
			<br>
			<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="get()"><i class="mdui-icon material-icons">arrow_back</i>英转中</button>
		</div>
	</div>
	<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5">
		<div class="encode">
			<textarea ref='en'>
				
			</textarea>
		</div>
	</div>
</div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
import api from '../fetch/api.js'
import md5 from 'js-md5';
export default {
	name: 'url',
	mounted () {  
    	document.title="翻译";
    	this.$refs.zh.value = this.zh; 
    	this.$refs.en.value = this.en;
  	},
 	data () {
	    return {
	      zh:'木木工具',
	      en:'Wood tools',
	      baseU:'http://api.fanyi.baidu.com/api/trans/vip/translate',
	      query:'翻译',
	      appid:'20170922000084666',
	      salt:(new Date).getTime(),
	      to:'en',
	      sign:'',
	      key:'UI5nVVO2eTqZh6lLWll4',
	      from:'zh'
	    }
  	},
  	methods:{
  		get:function()
	  	{
	  		var str1 = this.appid + this.query + this.salt + this.key;
			this.sign = md5(str1);
	  		var url = this.baseU
	  		let data = {
	            q: this.query,
		        appid: this.appid,
		        salt: this.salt,
		        from: this.from,
		        to: this.to,
		        sign: this.sign
	        }
	    
	  //        axios.post(url,data).then(re=>{
			//   console.log(re);
			// });
	  		api.Curl(url,data)
	  			.then(res => {
	          this.resultJson = res
	        	this.showResult = true
	        })
	        .catch((error) => {
	           console.log(error.trans_result[0].dst)
	        })
		}
  	}
}
</script>
<style>
.content{
	/* text-align: center; */
}
.w2{
	/* margin: 0 auto; */
	/* border: 1px solid red; */
}
.encode{
	width: 100%;
	height: 300px;
}
.encode textarea{
	width: 100%;
	height: 100%;
}
.mdui-btn{
	margin-bottom: 30px;
}
.change-button{
	text-align: center;
	padding: 100px 10px;
	
}
@media screen and (max-width: 1024px) {
    .change-button{
		padding: 30px 0;
	}
	.mdui-btn{
		margin-bottom: 0px;
	}
}
</style>