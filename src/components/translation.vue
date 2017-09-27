<template>

<div class="mdui-container doc-container doc-no-cover pdl240">
	<h1 class="doc-title mdui-text-color-theme">翻译</h1>
	<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5 te">
		<div class="encode">
			<textarea ref='zh'>
				
			</textarea>
		</div>
	</div>
	<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-2 mdui-col-lg-2 mdui-col-xl-2 w1">
		<div class="change-button">
			<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="zhToen()">中转英<i class="mdui-icon material-icons">arrow_forward</i></button>
			<div class="mb30"></div>
			<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="enTozh()"><i class="mdui-icon material-icons">arrow_back</i>英转中</button>
		</div>
	</div>
	<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5 te">
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
	      baseU:'https://api.vate.ren/Api/translate',
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
  		zhToen()
  		{
  			var query = this.$refs.zh.value;
  			var from = 'zh';
  			var to = 'en';
  			var ret = this.get(query,from,to,1);
  		},
  		enTozh()
  		{
  			var query = this.$refs.en.value;
  			var from = 'en';
  			var to = 'zh';
  			var ret = this.get(query,from,to,2);
  		},
  		get:function(query,from,to,type)
	  	{
	  		var url = this.baseU
	  		let data = {
	            query: query,
		        from: from,
		        to: to,
	        }
	        api.Curl(url,data)
  			.then(res => {
  				var ret = res.trans_result;
  				var end = '';
  				for(var i =0;i<=ret.length;i++)
  				{
  					if(ret[i]){
  						end += ret[i].dst+"\r\n";
  					}
  					
  				}
  				console.log(end)
  				if(type == 1)
  				{
					this.$refs.en.value = end;
  				}else {
  					this.$refs.zh.value = end;
  				}
	        })
	        .catch((error) => {
	        	// swal("出错了!", "请求出错!", "error")
	           console.log(error)
	           return false
	        })
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
.mb30{
	margin-bottom: 30px;
}
.change-button{
	/* text-align: center;
	padding: 100px 10px; */
	padding: 110px 0;
}
@media screen and (max-width: 1024px) {
    .change-button{
		padding: 30px 0;
	}
	.mb30{
		display: none;
	}
}
</style>