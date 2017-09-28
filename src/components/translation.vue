<template>
  <div class="mdui-container doc-container doc-no-cover pdl240 translation">
    <h1 class="doc-title mdui-text-color-theme">Translator</h1>
    <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5 te">
      <textarea v-model="start"></textarea>
    </div>
    <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-2 mdui-col-lg-2 mdui-col-xl-2 center">
      <select class="mdui-select" ref="type" id="select">
        <option value="1">Chinese To English</option>
        <option value="2">English To Chinese</option>
      </select>
    </div>
    <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-5 mdui-col-lg-5 mdui-col-xl-5 te">
      <textarea v-model="end"></textarea>
    </div>
  </div>
</template>

<script>
  import Http from '../fetch/api.js'
  export default {
    data () {
      return {
        start : '木木工具',
        end   : '',
        timer : null
      }
    },
    mounted () {
      document.title = 'MuMuTools - Translator'
      this.getResult()
      new mdui.Select('#select', {
        position:'bottom'
      })
    },
    watch: {
      start() {
        window.clearTimeout(this.timer)
        this.timer = setTimeout(this.getResult, 300)
      }
    },
    methods: {
      getResult() {
        Http.Curl('https://api.vate.ren/Api/translate',{
          query: this.start,
          from : this.$refs.type.value == 1 ? 'zh' : 'en',
          to   : this.$refs.type.value == 2 ? 'zh' : 'en',
        }).then(res => {

          res.trans_result && (() => {

            this.end = res.trans_result.map(item => {
              return item.dst
            }).join('\n')

          })()

        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .translation{
    *{
      box-sizing: border-box;
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
    .center{
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media screen and (max-width: 1024px) {
      .center{
        padding: 30px 0;
        height: auto;
      }
    }
  }
</style>
