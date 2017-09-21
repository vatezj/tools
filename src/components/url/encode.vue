<template>

<div class="mdui-container doc-container doc-no-cover pdl240">
	<h1 class="doc-title mdui-text-color-theme">URL encode</h1>
	<div class="content">
		<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5">
			<div class="encode">
				<textarea class="encode">
					
				</textarea>
			</div>
		</div>
		<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-2 mdui-col-lg-2 mdui-col-xl-2 w2">
			<div class="change-button">
				<button class="mdui-btn mdui-color-theme-accent mdui-ripple">UrlEncode编码</button>
				<button class="mdui-btn mdui-color-theme-accent mdui-ripple">UrlDecode解码</button>
			</div>
		</div>
		<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5">
			<div class="uncode">
				<textarea class="encode">
					
				</textarea>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import time from '../../fetch/time.js'
export default {
	name: 'url',
	mounted () {  
    	document.title="URL encode";
  	},
 	data () {
	    return {
	      
	    }
  	},
  	methods:{
  		
  	}
}
</script>
<style>
.content{
	text-align: center;
}
.w2{

	margin: 0 auto;
}
.encode{
	width: 98%;
	height: 300px;
}
.mdui-btn{
	margin-bottom: 30px;
}
.change-button{
	padding: 100px 0;
	/* margin: 100px 0; */
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