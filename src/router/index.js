import Vue from 'vue'
import Router from 'vue-router'

//路由
import index from '../components/index.vue'

//php
import php from '../components/php/index.vue'
import curl from '../components/php/curl.vue'

//zip
import zip from '../components/php/index.vue'
import json from '../components/zip/json'
import html from '../components/zip/html'
import javascript from '../components/zip/javascript'

//时间转换
import time from '../components/time/index.vue'

//qrcode
import qrcode from '../components/qrcode/index.vue'
//base64
import base64 from '../components/base64/index.vue'

//URI encode
import urlencode from '../components/url/encode.vue'

//翻译
import translation from '../components/translation.vue'

//图片压缩
import image from '../components/image.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  	{
	    path: '/',
	    name: 'index',
	    component: index
    },
    {
	    path: '/php',
	    // component: Foo,
	    component: php,
	    children: [
	      {path: 'curl', component: curl}
	    ]
  	},
  	{
	    path: '/zip',
	    // component: Foo,
	    component: zip,
	    children: [
	    	{path: 'html', component: html},
	    	{path: 'javascript', component: javascript},
	      	{path: 'json', component: json}
	    ]
  	},
  	{
	    path: '/time',
	    name: 'time',
	    component: time
  	},
  	{
	    path: '/qrcode',
	    name: 'qrcode',
	    component: qrcode
  	},
  	{
	    path: '/base64',
	    name: 'base64',
	    component: base64
  	},
  	{
	    path: '/encode',
	    name: 'encode',
	    component: urlencode
  	},
  	{
	    path: '/translation',
	    name: 'translation',
	    component: translation
	  },
	  {
	    path: '/image',
	    name: 'image',
	    component: image
  	}
  ]
})
