<template>
<div class="mdui-dialog" id="dialog-docs-theme">
  <div class="mdui-dialog-title">设置文档主题</div>
  <div class="mdui-dialog-content">
    <p class="mdui-typo-title">主题色</p>
    <div class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">
      <div class="mdui-col">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-layout" class="layout" ref ="theme"  value="1" checked />
          <i class="mdui-radio-icon"></i>
          Light
        </label>
      </div>
      <div class="mdui-col">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-layout" class="layout" ref = "theme" value="dark" @click=""/>
          <i class="mdui-radio-icon"></i>
          Dark
        </label>
      </div>
    </div>
    <p class="mdui-typo-title mdui-text-color-theme">主色</p>
    <form class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">
      <div class="mdui-col mdui-text-color-amber">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="amber" />
          <i class="mdui-radio-icon"></i>
          Amber
        </label>
      </div>
      <div class="mdui-col mdui-text-color-blue">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="blue" />
          <i class="mdui-radio-icon"></i>
          Blue
        </label>
      </div>
      <div class="mdui-col mdui-text-color-blue-grey">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="blue-grey" />
          <i class="mdui-radio-icon"></i>
          Blue Grey
        </label>
      </div>
      <div class="mdui-col mdui-text-color-brown">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="brown" />
          <i class="mdui-radio-icon"></i>
          Brown
        </label>
      </div>
      <div class="mdui-col mdui-text-color-cyan">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="cyan" />
          <i class="mdui-radio-icon"></i>
          Cyan
        </label>
      </div>
      <div class="mdui-col mdui-text-color-deep-orange">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="deep-orange" />
          <i class="mdui-radio-icon"></i>
          Deep Orange
        </label>
      </div>
      <div class="mdui-col mdui-text-color-deep-purple">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="deep-purple" />
          <i class="mdui-radio-icon"></i>
          Deep Purple
        </label>
      </div>
      <div class="mdui-col mdui-text-color-green">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="green" />
          <i class="mdui-radio-icon"></i>
          Green
        </label>
      </div>
      <div class="mdui-col mdui-text-color-grey">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="grey" />
          <i class="mdui-radio-icon"></i>
          Grey
        </label>
      </div>
      <div class="mdui-col mdui-text-color-indigo">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="indigo" checked/>
          <i class="mdui-radio-icon"></i>
          Indigo
        </label>
      </div>
      <div class="mdui-col mdui-text-color-light-blue">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="light-blue" />
          <i class="mdui-radio-icon"></i>
          Light Blue
        </label>
      </div>
      <div class="mdui-col mdui-text-color-light-green">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="light-green" />
          <i class="mdui-radio-icon"></i>
          Light Green
        </label>
      </div>
      <div class="mdui-col mdui-text-color-lime">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="lime" />
          <i class="mdui-radio-icon"></i>
          Lime
        </label>
      </div>
      <div class="mdui-col mdui-text-color-orange">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="orange" />
          <i class="mdui-radio-icon"></i>
          Orange
        </label>
      </div>
      <div class="mdui-col mdui-text-color-pink">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="pink" />
          <i class="mdui-radio-icon"></i>
          Pink
        </label>
      </div>
      <div class="mdui-col mdui-text-color-purple">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="purple" />
          <i class="mdui-radio-icon"></i>
          Purple
        </label>
      </div>
      <div class="mdui-col mdui-text-color-red">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="red" />
          <i class="mdui-radio-icon"></i>
          Red
        </label>
      </div>
      <div class="mdui-col mdui-text-color-teal">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="teal" />
          <i class="mdui-radio-icon"></i>
          Teal
        </label>
      </div>
      <div class="mdui-col mdui-text-color-yellow">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-primary" class = "primary" value="yellow" />
          <i class="mdui-radio-icon"></i>
          Yellow
        </label>
      </div>
    </form>
    <p class="mdui-typo-title mdui-text-color-theme-accent">强调色</p>
    <form class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">
      <div class="mdui-col mdui-text-color-amber">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="amber" />
          <i class="mdui-radio-icon"></i>
          Amber
        </label>
      </div>
      <div class="mdui-col mdui-text-color-blue">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="blue" />
          <i class="mdui-radio-icon"></i>
          Blue
        </label>
      </div>
      <div class="mdui-col mdui-text-color-cyan">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="cyan" />
          <i class="mdui-radio-icon"></i>
          Cyan
        </label>
      </div>
      <div class="mdui-col mdui-text-color-deep-orange">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="deep-orange" />
          <i class="mdui-radio-icon"></i>
          Deep Orange
        </label>
      </div>
      <div class="mdui-col mdui-text-color-deep-purple">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="deep-purple" />
          <i class="mdui-radio-icon"></i>
          Deep Purple
        </label>
      </div>
      <div class="mdui-col mdui-text-color-green">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="green" />
          <i class="mdui-radio-icon"></i>
          Green
        </label>
      </div>
      <div class="mdui-col mdui-text-color-indigo">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="indigo" />
          <i class="mdui-radio-icon"></i>
          Indigo
        </label>
      </div>
      <div class="mdui-col mdui-text-color-light-blue">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="light-blue" />
          <i class="mdui-radio-icon"></i>
          Light Blue
        </label>
      </div>
      <div class="mdui-col mdui-text-color-light-green">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="light-green" />
          <i class="mdui-radio-icon"></i>
          Light Green
        </label>
      </div>
      <div class="mdui-col mdui-text-color-lime">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="lime" />
          <i class="mdui-radio-icon"></i>
          Lime
        </label>
      </div>
      <div class="mdui-col mdui-text-color-orange">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="orange" />
          <i class="mdui-radio-icon"></i>
          Orange
        </label>
      </div>
      <div class="mdui-col mdui-text-color-pink">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="pink" checked/>
          <i class="mdui-radio-icon"></i>
          Pink
        </label>
      </div>
      <div class="mdui-col mdui-text-color-purple">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="purple" />
          <i class="mdui-radio-icon"></i>
          Purple
        </label>
      </div>
      <div class="mdui-col mdui-text-color-red">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="red" />
          <i class="mdui-radio-icon"></i>
          Red
        </label>
      </div>
      <div class="mdui-col mdui-text-color-teal">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="teal" />
          <i class="mdui-radio-icon"></i>
          Teal
        </label>
      </div>
      <div class="mdui-col mdui-text-color-yellow">
        <label class="mdui-radio mdui-m-b-1">
          <input type="radio" name="doc-theme-accent" class="accent" value="yellow" />
          <i class="mdui-radio-icon"></i>
          Yellow
        </label>
      </div>
    </form>
  </div>
  <div class="mdui-divider"></div>
  <div class="mdui-dialog-actions">
    <button class="mdui-btn mdui-ripple mdui-float-left" mdui-dialog-cancel @click="ret()">恢复默认主题</button>
    <button class="mdui-btn mdui-ripple" mdui-dialog-confirm @click="change()">ok</button>
  </div>
</div>
</template>
<script>
export default {
  name: 'alert',
  mounted () {  
      this.init()
  },
  methods:{
    init()
    {
      var bg = this.$ls.get('bg');
      if(!bg){
        bg = 'mdui-theme-layout-1'
      }
      var primary = this.$ls.get('primary');
      if(!primary){
        primary = 'mdui-theme-primary-teal'
      }
      var accent = this.$ls.get('accent');
      if(!accent){
        accent = 'mdui-theme-accent-cyan'
      }
      
      //this.$ls.set('foo', 'boo', 60 * 60 * 1000);
      document.getElementById("body").removeAttribute("class");
      document.getElementById("body").classList.add('mdui-loaded');
      document.getElementById("body").classList.add('mdui-drawer-body-left');
      document.getElementById("body").classList.add('mdui-appbar-with-toolbar');
      document.getElementById("body").classList.add(bg);
      document.getElementById("body").classList.add(primary);
      document.getElementById("body").classList.add(accent);
    },
    change(){
      let bg = 'mdui-theme-layout-'+this.check_radio('doc-theme-layout');
      let primary = 'mdui-theme-primary-'+this.check_radio('doc-theme-primary');
      let accent = 'mdui-theme-accent-'+this.check_radio('doc-theme-accent');
      this.$ls.set('bg', bg, 60 * 60 * 1000);
      this.$ls.set('primary', primary, 60 * 60 * 1000);
      this.$ls.set('accent', accent, 60 * 60 * 1000);
      if(this.check_radio('doc-theme-layout') == ''){
        bg = ''
      } 
      document.getElementById("body").removeAttribute("class");
      document.getElementById("body").classList.add('mdui-loaded');
      document.getElementById("body").classList.add('mdui-drawer-body-left');
      document.getElementById("body").classList.add('mdui-appbar-with-toolbar');
      document.getElementById("body").classList.add(bg);
      document.getElementById("body").classList.add(primary);
      document.getElementById("body").classList.add(accent);
    },
    ret(){
      document.getElementById("body").removeAttribute("class");
      document.getElementById("body").classList.add('mdui-loaded');
      document.getElementById("body").classList.add('mdui-drawer-body-left');
      document.getElementById("body").classList.add('mdui-appbar-with-toolbar');
      document.getElementById("body").classList.add('mdui-theme-primary-indigo');
      document.getElementById("body").classList.add('mdui-theme-accent-pink');
    },
    check_radio(name){
      var radio = document.getElementsByName(name);
      var i = 0;  
      for (i=0; i<radio.length; i++) {  
        if (radio[i].checked) {  
            return radio[i].value  
        }  
      }  
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>