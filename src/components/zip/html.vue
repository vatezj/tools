<template>

<div class="mdui-container doc-container doc-no-cover pdl240 border-ccc">
		<h1 class="doc-title mdui-text-color-theme">HTML压缩/格式化</h1>
</div>
</template>
<script>
export default {
  name: 'html',
  data ()
  {
  	return {
  	
    }
  },
  mounted () {  
    document.title="HTML压缩/格式化"
  },
  methods:{
  		
	}
}
</script>
<style>
.select-url{
	border-top: 1px solid #ccc;
	padding: 1px;
	clear: both;	
}
.select-url-type{
	padding-top: 34px;
	padding-bottom: 8px;
	width: 10%;
	border: 1px solid #ffffff;
	
}
.select-url-input{
	width: 68%;
	border: 1px solid #ffffff;
}
.select-url-button{
	margin-top: 34px;
	margin-top: 35px;
	margin-left: 10px;
	width: 10%;
}
.url-param{
	/* margin-top: 10px; */
	clear: both;	
	/* border: 1px solid red; */
	border-top: 1px solid #ccc;
}
.url-param h4{
	padding: 10px 0;
}
.wi50{
	width: 50%;
}
.result-json{
	padding: 20px;
	width: 90%;	
}
.border{
	border: 1px solid #ccc;
}
</style>