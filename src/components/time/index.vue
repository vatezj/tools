<template>

<div class="mdui-container doc-container doc-no-cover pdl240">
	<div class="pdl240">
	   <h1 class="doc-title mdui-text-color-theme">时间戳转换</h1>
		<div class="content">
			<div class="now-time">
				<div class="mdui-container">
					<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-6 mdui-col-lg-6 mdui-col-xl-6 vt">现在的Unix时间戳(Unix timestamp)是:&nbsp;&nbsp;&nbsp;&nbsp;
						<input class="cr" type="" :value="time">&nbsp;&nbsp;&nbsp;&nbsp;
					</div>
					<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-6 mdui-col-lg-6 mdui-col-xl-6">
						<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="startT()">开始</button>
						<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="stopT()">停止</button>
						<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="refresh()">刷新</button>
					</div>
				</div>
			</div>
			<div class="change-time">
				<div class="mdui-container">
					<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12 mdui-col-lg-12 mdui-col-xl-12 vt">
						Unix时间戳（Unix timestamp）:&nbsp;&nbsp;&nbsp;&nbsp;
						<input type="" :value="inTime" v-model="inTime">&nbsp;&nbsp;&nbsp;&nbsp;
						<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="uTod(inTime)">转化为北京时间</button>&nbsp;&nbsp;&nbsp;&nbsp;
						<input type="" :value="dateB" v-model='dateB'>
					</div>

				</div>
			</div>
			<div class="change-time">
				<div class="mdui-container">
					<div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12 mdui-col-lg-12 mdui-col-xl-12 vt">北京时间（年-月-日 时:分:秒）:&nbsp;&nbsp;&nbsp;&nbsp;<input type="" :value="dateA" v-model="dateA">&nbsp;&nbsp;&nbsp;&nbsp;<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="dToU(dateA)">转化为unix时间戳</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="" :value="unixA" v-model='unixA'></div>

				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import time from '../../fetch/time.js'
export default {
	name: 'time',
	mounted () {
    document.title = 'MuMuTools - Time Stamp'
    	this.init();
  	},
 	data () {
	    return {
	      title: 'this is a app',
	      //当前时间戳
	      time: Date.parse(new Date())/1000,
	      stop:false,
	      inTime:'',
	      dateB:'',
	      dateA:'',
	      unixA:''
	    }
  	},
  	methods:{
  		init()
  		{
  			this.inTime = Date.parse(new Date())/1000;
			//this.dateB = time.unixToDate(this.inTime);
			this.dateA = time.unixToDate(Date.parse(new Date())/1000)
  			var t = null;
  			t = setTimeout(this.timed(t),1000);
  		},
  		timed(t)
	    {
	       clearTimeout(t);//清除定时器
	       if(this.stop){

	       }else{
		       this.time = this.time + 1;
		       setTimeout(this.timed,1000); //设定定时器，循环执行
	       }

	    },
	    stopT()
	    {
	    	this.stop = true;
	    },
	    startT(){
	    	if(this.stop == true)
	    	{
	    		this.stop = false;
    			var t = null;
  				t = setTimeout(this.timed(t),1000);
	    	}
	    },
	    refresh(){
	    	if(this.time !== Date.parse(new Date())/1000)
	    	{
	    		this.stop = false;
		    	var t = null;
		    	this.time = Date.parse(new Date())/1000
	  			t = setTimeout(this.timed(t),1000);
	    	}

	    },
    	dToU(nS)
    	{
    		this.unixA = time.dateToUnix(nS);
    	},
    	uTod(nS)
    	{
    		this.dateB = time.unixToDate(this.inTime);
    	}
  	}

}
</script>
<style>
.now-unix-time{
	display: block;
	color: red;
}
.now-time{
	padding-bottom: 20px;
	border-bottom: 1px solid #ccc;
}
.change-time{
	padding-top: 20px;
	border-bottom: 1px solid #ccc;
	padding-bottom: 20px;
}
.content{
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #f3f5f9;
}
.vt{
	margin-top: 12px;
}
.cr{
	color: red;
}
</style>
