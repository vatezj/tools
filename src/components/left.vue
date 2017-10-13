<template>
<div class="mdui-drawer" id="main-drawer">
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
					link: '/image',
					icon: 'local_mall',
					title: '压缩图片',
					color: 'deep-orange'
				},{
					link: '/ping',
					icon: 'assistant_photo',
					title: '域名ip',
					color: 'cyan'
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
					title: 'base64 转换',
					color: 'purple'
				}
			]
		}
  	}
}
</script>

<style scoped>
/*解决菜单关闭后阴影还在的bug*/
.mdui-drawer{
  box-shadow: none;
}
@media (min-width: 1024px){
  .mdui-drawer-open{
    box-shadow: none!important;
  }
}
.mdui-drawer-open{
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12);
}
</style>
