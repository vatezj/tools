<template>

<div class="mdui-container doc-container doc-no-cover pdl240 border-ccc">
	<div class="pdl240">
		<h1 class="doc-title mdui-text-color-theme">模拟 POST GET请求</h1>
	    <div class="select-url">
	   		<div class="clear">
		   		<div class="select-url-type fl" style="border:none;">
		   			<select class="mdui-select" mdui-select ref='type' style="border:none;">
			          <option v-for='type in types' :value="type.type">{{ type.name }}</option>
			          <!-- <option value="3" disabled>State 3</option> -->
			    	</select>
		   		</div>
			    <div class="mdui-textfield mdui-textfield-floating-label select-url-input fl mdui-textfield-focus" style="border:none;">
			          <i class="mdui-icon material-icons">tv</i>
			          <label class="mdui-textfield-label">url</label>
			          <input class="mdui-textfield-input" v-model='sendUrl'></input>
			    </div>
			    <div class="select-url-button fl">
			    	<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="touchAjax()">发送</button>
			    </div>
			    
		   </div>       
	    </div>
	    <div class="clear"></div>
	    <div class="url-param">
	   		<h4 class="border-bottom-ccc mdui-ripple mdui-text-color-theme">参数</h4>
	   		<div class="url-param-lists lists">
	   			<div v-for="param in params" class="param-list list">
	   				<div class="mdui-textfield mdui-textfield-floating-label wi50 fl">
			          <label class="mdui-textfield-label">key</label>
			          <input class="mdui-textfield-input" @click="addList(param.id)" :value="param.key" v-model='param.key'></input>
			    	</div>
			    	<div class="mdui-textfield mdui-textfield-floating-label wi50 fr">
			          <label class="mdui-textfield-label">value</label>
			          <input class="mdui-textfield-input" :value="param.value" @click="addList(param.id)" v-model='param.value'></input>
			    	</div>
	   			</div>
	   		</div>
	   	</div>
   	   <div class="clear"></div>
   	   <div class="result-json" :class="{'border':showResult}" v-html='resultJson'>
   	   	
   	   </div>
	</div>
</div>
</template>
<script>
import axios from 'axios'
import api from '../../fetch/api.js'
import fun from '../../fetch/fun.js'
export default {
  name: 'curl',
  data ()
  {
  	return {
  		baseU: 'http://api.vate.ren/Api/curl',
  		resultJson:'',
  		showResult:false,
      sendUrl:'http://music.163.com/api/playlist/detail?id=387699584',
  		params: [
        {
          id:1,
          key: '',
          value: ''
        }
      ],
      types:[
        {
          type:1,
          name:'GET'
        },
        {
          type:2,
          name:'POST'
        }
      ],
      checkedTypes:1
  	}
  },
  mounted () {  
    document.title="post get 请求"
  },
  methods:{
  	init(){
  		document.title="我是标题"
  	},
  	touchAjax:function()
  	{ 
  		this.get(this.sendUrl)
  		//console.log(url)
  	},
  	addList(id){
      if(this.params.length == id)
      {
        if(id > 1)
        {
          if(this.params[id-2]['key'] == '' || this.params[id-2]['value'] == '')
          {
            return false;
          }
        }
        var nextId = id + 1 ;
        this.params.push({
          id:nextId,
          key: '',
          value: ''
        })
      }
      //console.log(this.params)
  	},
  	isJSON(str) {
        if (typeof str == 'string') {
            try {
                var obj=JSON.parse(str);
                if(str.indexOf('{')>-1){
                    return true;
                }else{
                    return false;
                }
            } catch(e) {
                console.log(e);
                return false;
            }
        }
        return false;
	},
  	get:function(post_url)
  	{
  		var url = this.baseU
  		let data = {
            url: post_url,
            type:this.$refs.type.value,
            params:this.params
          }
  		api.Curl(url,data)
  			.then(res => {
          this.resultJson = res
        	this.showResult = true
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