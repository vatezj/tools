<template>
	<div class="mdui-container doc-container doc-no-cover pdl240">
		<h1 class="doc-title mdui-text-color-theme">域名ip</h1>
		<div class="mdui-container">
			<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-2 mdui-col-lg-2 mdui-col-xl-2">
				<center>
					<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="ping()">ping</button>
				</center>
			</div>
			<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-4 mdui-col-lg-4 mdui-col-xl-4">
				<input type="text" v-model="url" class="mdui-textfield-input" @keyup.enter="ping">
			</div>
			<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-4 mdui-col-lg-4 mdui-col-xl-4">
				<input type="text" v-model="ip" class="mdui-textfield-input" >
			</div>
			</div>
	</div>
</template>

<script>
import api from '../fetch/api.js'
export default {
	data()
	{
		return{
			'api':'https://local.vate.ren/ping.php',
			'url':'vate.ren',
			'ip':'47.93.20.8'
		}
	},
	mounted() {
        document.title = 'MuMuTools - 域名ip'
    },
	methods:
	{
		ping()
		{
			let data = {
	            name: this.url,
	        }
  			api.Curl(this.api,data)
  			.then(res => {
	          this.ip = res
	        })
	        .catch((error) => {
	        	swal("出错了!", "请求出错!", "error")
	           console.log(error)
	        })
		}
	}
}
</script>
<style>
	.mdui-container{
		width: 80%;
	}
</style>
