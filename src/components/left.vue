<template>
<div class="mdui-drawer mdui-drawer-close" id="main-drawer">
	<div class="mdui-list" mdui-collapse="{accordion: true}" style="margin-bottom: 76px;">

		<!--menu-->
		<router-link v-for="(data,$index) in menu" :key="$index" :to="data.link">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons" :class=" 'mdui-text-color-' + data.color">
					{{data.icon}}
				</i>
				<div class="mdui-list-item-content">{{data.title}}</div>
			</div>
		</router-link>
		
	</div>
</div>
</template>
<script>
export default {
	name: 'left',
	data () {
	    return {
			menu:[
				{
					link: '/',
					icon: 'near_me',
					title: '首页',
					color: 'blue'
				},{
					link: '/php/curl',
					icon: 'layers',
					title: 'post/get 请求',
					color: 'blue'
				},{
					link: '/zip/json',
					icon: 'widgets',
					title: 'JSON',
					color: 'blue'
				},{
					link: '/time',
					icon: 'timer',
					title: '时间',
					color: 'purple'
				},{
					link: '/qrcode',
					icon: 'ac_unit',
					title: '二维码',
					color: 'cyan'
				},{
					link: '/encode',
					icon: 'accessibility',
					title: 'URL encode/decode',
					color: 'teal'
				},{
					link: '/translation',
					icon: 'assistant_photo',
					title: '翻译',
					color: 'brown'
   				},{
					link: '/base64',
					icon: 'view_carousel',
					title: 'Generating Base64',
					color: 'purple'   
				}
			]
		}
  	}
}
</script>

<style scoped>
/*解决菜单关闭后阴影还在的bug*/
.mdui-drawer-close{
	box-shadow: none;
}
</style>
