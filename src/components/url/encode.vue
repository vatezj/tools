<template>
  <div class="mdui-container doc-container doc-no-cover pdl240 encode">
    <h1 class="doc-title mdui-text-color-theme">URL encode/decode</h1>
    <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5">
      <textarea ref='encode'></textarea>
    </div>
    <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-2 mdui-col-lg-2 mdui-col-xl-2">
      <div class="change-button">
        <button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="urlEncode()">编码<i class="mdui-icon material-icons">arrow_forward</i></button>
        <button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="urlDecode()"><i class="mdui-icon material-icons">arrow_back</i>解码</button>
      </div>
    </div>
    <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5">
      <textarea ref='decode'></textarea>
    </div>
  </div>
</template>
<script>
import time from '../../fetch/time.js'
export default {
	name: 'url',
	mounted () {
    	document.title = 'MuMuTools - Encode/Decode'
    	this.$refs.encode.value = this.encode;
    	this.$refs.decode.value = this.decode;
  	},
 	data () {
	    return {
	      encode:'木木工具',
	      decode:'%e6%9c%a8%e6%9c%a8%e5%b7%a5%e5%85%b7'
	    }
  	},
  	methods:{
  		urlEncode()
  		{
  			this.$refs.decode.value = encodeURI(this.$refs.encode.value);
  		},
  		urlDecode()
  		{
  			this.$refs.encode.value = decodeURI(this.$refs.decode.value);
  		}
  	}
}
</script>

<style rel="stylesheet/scs" lang="scss">
  .encode{
    *{
      box-sizing: border-box;
    }
    .change-button{
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      button{
        margin-bottom: 30px;
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
    textarea{
      min-height: 300px;
      width: 100%;
      height: 300px;
      padding: 10px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 18px;
      outline: none;
      max-width: 100%;
      min-width: 100%;
      color: #333;
      border: 1px solid #dfdfdf;
    }
  }
  @media screen and (max-width: 1024px) {
    .change-button{
      padding: 30px 0;
      height: auto!important;
    }
  }
</style>
