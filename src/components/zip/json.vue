<template>

<div class="mdui-container doc-container doc-no-cover pdl240">
	<div class="pdl240">
	   <h1 class="doc-title mdui-text-color-theme">json</h1>
		<div class="json-input">
			<textarea class="json-input-textarea" :class="{'boder-red': red,'boder-green': green}" id="json" ref='input1'>

			</textarea>
		</div>
		<div class="json-button">
			<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="check()">校验</button>
			<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="copy()">复制</button>
			<button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="clear()">清空</button>
		</div>
		<div class="show-json">

		</div>
		<div class="json-tip mdui-ripple">
			如下原因会造成JSON校验失败,而且会让你不知道为什么失败<br>
			&nbsp;&nbsp;&nbsp;&nbsp;1：JSON字符串里的非数字型键值没有双引号<br>
			&nbsp;&nbsp;&nbsp;&nbsp;2：JSON中存在\t这样的制表符,看起来和空格一样,但是就是因为它的存在校验不通过。去掉就能过了。<br>
			&nbsp;&nbsp;&nbsp;&nbsp;3：编辑器有bom头也会造成
		</div>
	</div>
</div>
</template>
<script>
export default {
  name: 'curl',
  data () {
  	return {
  		green:false,
  		red:false
  	}
  },
  mounted () {
    document.title = 'MuMuTools - Json'
  },
  methods: {
  	check:function() {
  		let json = this.$refs.input1.value;
  		if(!this.isJSON(json))
  		{
  			this.$refs.input1.value = '不是一个json';
  			this.red = true;
  			return false;
  		}
  		this.$refs.input1.value = this.beautify(json)
  		this.green = true;
  	},
  	beautify:function(json)
  	{
        var i           = 0,
            len          = 0,
            tab         = "    ",
            targetJson     = "",
            indentLevel = 0,
            inString    = false,
            currentChar = null;
    	for (i = 0, len = json.length; i < len; i += 1) {
        currentChar = json.charAt(i);
            switch (currentChar) {
            case '{':
            case '[':
                if (!inString) {
                    targetJson += currentChar + "\n" + this.repeat(tab, indentLevel + 1);
                    indentLevel += 1;
                } else {
                    targetJson += currentChar;
                }
                break;
            case '}':
            case ']':
                if (!inString) {
                    indentLevel -= 1;
                    targetJson += "\n" + this.repeat(tab, indentLevel) + currentChar;
                } else {
                    targetJson += currentChar;
                }
                break;
            case ',':
                if (!inString) {
                    targetJson += ",\n" + this.repeat(tab, indentLevel);
                } else {
                    targetJson += currentChar;
                }
                break;
            case ':':
                if (!inString) {
                    targetJson += ": ";
                } else {
                    targetJson += currentChar;
                }
                break;
            case ' ':
            case "\n":
            case "\t":
                if (inString) {
                    targetJson += currentChar;
                }
                break;
            case '"':
                if (i > 0 && json.charAt(i - 1) !== '\\') {
                    inString = !inString;
                }
                targetJson += currentChar;
                break;
            default:
                targetJson += currentChar;
                break;
            }
    	}
    	return targetJson;
  	},
  	//json 格式化
  	repeat:function (s, count) {
  		 return new Array(count + 1).join(s);
  	},
  	//验证是否是json
    isJSON: function (str) {
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
	//复制
	copy: function()
	{
		let json = document.querySelector('#json');
		json.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
    swal("复制成功!", "", "success")
    setTimeout(function(){
          swal.close()
    },2000);
	},
	clear:function()
	{
		this.$refs.input1.value = '';
	}
  }
}
</script>
<style>
.json-input-textarea{
	width: 80%;
	height: 300px;
}
.json-tip{
	margin-top: 20px;
	padding: 10px 0 10px 10px;
	border: 1px solid #ccc;
	width: 80%;
}
.boder-red
{
	border: 1px solid red;
}
.boder-green
{
	border: 1px solid green;
}
</style>
