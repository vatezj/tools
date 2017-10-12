

<template>
<div class="mdui-container doc-container">
    <h1 class="doc-title mdui-text-color-theme">图片压缩</h1>
    <div class="preview">
         <div class="mdui-col-xs-6">
            <div class="mdui-typo">
                <h5 class="mdui-typo-display-4-opacity">原图 Size : {{oldImg.size}} KB</h5>
            </div>
            <img :src="oldImg.url">
        </div>
        <div class="mdui-col-xs-6">
            <div class="mdui-typo">
                <h5 class="mdui-typo-display-4-opacity">压缩后 Size : {{newImg.size}} KB</h5>
                <img :src="newImg.url">
            </div>
        </div>
    </div>
    <p class="mdui-col-xs-3">调整滑块来选择质量 当前质量 : {{size}}</p>
    <label class="mdui-slider mdui-slider-discrete mdui-col-xs-9">
        <input type="range" step="1" min="1" max="100" value="50" v-model="size"/>
    </label>
    <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" @click="input.click()">上传图片</button>
    <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" @click="download">保存图片</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
             input: document.createElement('input'),
             oldImg: {
                 url: require('./../assets/img/img_min_test.png'),
                 size: '938'
             },
             newImg: { },
             size:'50'
        }
    },
    mounted() {
        document.title = 'MuMuTools - 压缩图片'
        this.input.setAttribute('type','file')
        this.input.addEventListener('change',this.seleteFile)
        this.minImg()
        mdui.updateSliders()
    },
    watch: {
        size() {
            this.minImg()
        },
        'oldImg.url'() {
            this.minImg()
        }
    },
    methods: {
        todoURL(url,size) {
            return new Promise((suc,err) => {
                let canvas = document.createElement('canvas')
                let ctx    = canvas.getContext('2d')
                let img    = new Image()
                img.src    = url
                img.onload = () => {
                    canvas.width = img.width
                    canvas.height = img.height
                    ctx.drawImage(img, 0, 0, canvas.width,canvas.height)
                    suc(canvas.toDataURL('image/jpeg',size))    
                }
            })
        },
        dataURLtoBlob(dataurl) {
            let arr   = dataurl.split(','), 
                mime  = arr[0].match(/:(.*?);/)[1],
                bstr  = atob(arr[1]), 
                n     = bstr.length, 
                u8arr = new Uint8Array(n)
            while(n--){
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new Blob([u8arr], {type:mime})
        },
        getFileInfo(file) {
            return {
                url: window.URL.createObjectURL(file),
                size: (file.size / 1024).toFixed(2)
            }
        },
        seleteFile() {
            this.oldImg = this.getFileInfo(event.target.files[0])
        },
        minImg(){
            this.todoURL(this.oldImg.url,this.size/100).then(imgData => {
                this.newImg = this.getFileInfo(this.dataURLtoBlob(imgData))
            })
        },
        download() {   
            let link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
            link.href = this.newImg.url
            link.download = '下载图片'
            let event = document.createEvent('MouseEvents')
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            link.dispatchEvent(event)
        }
    }
}
</script>


<style lang="scss">
.preview{
    margin-bottom: 40px;
    img{
        max-width: 100%;
        width: auto;
        max-height: 500px;
    }
    &:after{
        content: '';
        display: block;
        clear: both;
    }
}
</style>

