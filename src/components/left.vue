<template>
<div class="mdui-drawer" id="main-drawer">
	<div class="mdui-list" mdui-collapse="{accordion: true}" style="margin-bottom: 76px;">
	<!-- 	<div v-for="nav in navs">
			<router-link :to="nav.url" v-if='nav.type == 1 '>
				<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue">{{ nav.icon }}</i>
					<div class="mdui-list-item-content">{{ nav.name }}</div>
				</div>
			</router-link>
			<div class="mdui-collapse-item" v-else>
				<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-deep-orange">layers</i>
					<div class="mdui-list-item-content" ref="php">PHP类</div>
					<i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
				</div>
				<div class="mdui-collapse-item-body mdui-list">
					<router-link to="/php/curl"><a href="#/php/curl" class="mdui-list-item mdui-ripple ">curl</a></router-link>
				</div>
			</div>
		</div> -->
		<router-link to="/">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue">near_me</i>
				<div class="mdui-list-item-content">首页</div>
			</div>
		</router-link>
		<router-link to="/php/curl">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue">layers</i>
				<div class="mdui-list-item-content">post/get 请求</div>
			</div>
		</router-link>
	<!-- 	<div class="mdui-collapse-item" :class="{'mdui-collapse-item-open':php}">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-deep-orange">layers</i>
				<div class="mdui-list-item-content" ref="php">PHP类</div>
				<i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
			</div>
			<div class="mdui-collapse-item-body mdui-list">
				<router-link to="/php/curl"><a href="#/php/curl" class="mdui-list-item mdui-ripple ">post/get 请求</a></router-link>
			</div>
		</div> -->
		<div class="mdui-collapse-item" :class="{'mdui-collapse-item-open':zip}">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-deep-brown">widgets</i>
				<div class="mdui-list-item-content" ref="php">压缩/格式化</div>
				<i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
			</div>
			<div class="mdui-collapse-item-body mdui-list">
				<router-link to="/zip/json"><a href="#/zip/json" class="mdui-list-item mdui-ripple ">json</a></router-link>
			</div>
			<!-- <div class="mdui-collapse-item-body mdui-list">
				<router-link to="/zip/html"><a href="#/zip/html" class="mdui-list-item mdui-ripple ">HTML</a></router-link>
			</div>
			<div class="mdui-collapse-item-body mdui-list">
				<router-link to="/zip/javascript"><a href="#/zip/javascript" class="mdui-list-item mdui-ripple ">javascript</a></router-link>
			</div> -->
		</div>
		<!-- <router-link to="/json">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-brown">widgets</i>
				<div class="mdui-list-item-content">json</div>
			</div>
		</router-link> -->
		<router-link to="/time">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-purple">timer</i>
				<div class="mdui-list-item-content">时间</div>
			</div>
		</router-link>
		<!-- <router-link to="/time">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-yellow">ac_unit</i>
				<div class="mdui-list-item-content">javascript</div>
			</div>
		</router-link>
		<router-link to="/time">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-cyan">android</i>
				<div class="mdui-list-item-content">HTML</div>
			</div>
		</router-link> -->
		<router-link to="/qrcode">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-cyan">ac_unit</i>
				<div class="mdui-list-item-content">二维码</div>
			</div>
		</router-link>
		<!-- <router-link to="/base64">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-indigo">all_out</i>
				<div class="mdui-list-item-content">base64</div>
			</div>
		</router-link> -->
		<!-- <div class="mdui-collapse-item ">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-green">widgets</i>
				<div class="mdui-list-item-content">组件</div>
				<i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
			</div>
			<div class="mdui-collapse-item-body mdui-list">
				<a href="./ripple" class="mdui-list-item mdui-ripple ">涟漪动画效果</a>
				<a href="./button" class="mdui-list-item mdui-ripple ">按钮</a>
				<a href="./fab" class="mdui-list-item mdui-ripple ">浮动操作按钮</a>
				<a href="./select" class="mdui-list-item mdui-ripple ">下拉选择</a>
				<a href="./divider" class="mdui-list-item mdui-ripple ">分隔线</a>
				<a href="./panel" class="mdui-list-item mdui-ripple ">可扩展面板</a>
				<a href="./textfield" class="mdui-list-item mdui-ripple ">文本框</a>
				<a href="./selection_control" class="mdui-list-item mdui-ripple ">选择控件</a>
				<a href="./slider" class="mdui-list-item mdui-ripple ">滑块</a>
				<a href="./list" class="mdui-list-item mdui-ripple ">列表</a>
				<a href="./list_control" class="mdui-list-item mdui-ripple ">列表控制</a>
				<a href="./grid_list" class="mdui-list-item mdui-ripple ">网格列表</a>
				<a href="./tab" class="mdui-list-item mdui-ripple ">Tab 选项卡</a>
				<a href="./toolbar" class="mdui-list-item mdui-ripple ">工具栏</a>
				<a href="./appbar" class="mdui-list-item mdui-ripple ">应用栏</a>
				<a href="./drawer" class="mdui-list-item mdui-ripple ">抽屉式导航</a>
				<a href="./bottom_nav" class="mdui-list-item mdui-ripple ">底部导航栏</a>
				<a href="./card" class="mdui-list-item mdui-ripple ">卡片</a>
				<a href="./chip" class="mdui-list-item mdui-ripple ">纸片</a>
				<a href="./tooltip" class="mdui-list-item mdui-ripple ">工具提示</a>
				<a href="./snackbar" class="mdui-list-item mdui-ripple ">Snackbar</a>
				<a href="./table" class="mdui-list-item mdui-ripple ">表格</a>
				<a href="./dialog" class="mdui-list-item mdui-ripple ">对话框</a>
				<a href="./menu" class="mdui-list-item mdui-ripple ">菜单</a>
				<a href="./progress" class="mdui-list-item mdui-ripple ">进度指示器</a>
			</div>
		</div>
		<div class="mdui-collapse-item">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-brown">view_carousel</i>
				<div class="mdui-list-item-content">JavaScript 插件</div>
				<i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
			</div>
			<div class="mdui-collapse-item-body mdui-list">
				<a href="./collapse" class="mdui-list-item mdui-ripple mdui-list-item-active">Collapse</a>
				<a href="./headroom" class="mdui-list-item mdui-ripple ">Headroom</a>
			</div>
		</div>
		<div class="mdui-collapse-item ">
			<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-purple">local_mall</i>
				<div class="mdui-list-item-content">资源</div>
				<i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
			</div>
			<div class="mdui-collapse-item-body mdui-list">
				<a href="./material_icon" class="mdui-list-item mdui-ripple ">Material 图标</a>
			</div>
		</div> -->
	</div>
</div>
</template>
<script>
export default {
	name: 'left',
	data () {
	    return {
	      title: 'this is a app',
	      php: false,
	      zip: false,
	      navs:[
	      	{
	      		name:'首页',
	      		url:'/',
	      		icon:'near_me',
	      		type:1
	      	},
	      	{
	      		name:'php类',
	      		url:'php',
	      		icon:'near_me',
	      		type:2,
	      		nextNav:[
	      			{
	      				name:'curl',
	      				'url':'/php/curl'
	      			}
	      		]
	      	},
	      	{
	      		name:'json',
	      		url:'/json',
	      		icon:'widgets',
	      		type:1
	      	},
	      	{
	      		name:'时间',
	      		url:'/time',
	      		icon:'view_carousel',
	      		type:1
	      	}
	      ]
	    }
  	},
  	mounted () {  
    	let routePath = this.$route.fullPath
    	var ss = routePath.split("/");
    	if(ss[1] == 'php')
    	{
    		this.php = true
    	}
  	},
	methods: {
	 	openTab($id)
	 	{
	 		
	 	}  
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>