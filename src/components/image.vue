

<template>
<div class="mdui-container doc-container">
    <h1 class="doc-title mdui-text-color-theme">图片压缩</h1>
    <div class="preview" v-if="oldImgURL">
         <div class="mdui-col-xs-6">
            <div class="mdui-typo">
                <h4>原图 Size : {{oldImgSize}}</h4>
            </div>
            <img :src="oldImgURL">
        </div>
        <div class="mdui-col-xs-6">
            <div class="mdui-typo">
                <h4>压缩后 Size : {{newImgSize}}</h4>
                <img :src="newImgURL">
            </div>
        </div>
    </div>
    <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" @click="input.click()">Upload File</button>
    <input type="range" max="100" min="1" value="50" v-model="size">
  </div>
</template>

<script>
export default {
    data() {
        return {
             input: document.createElement('input'),
             oldImgURL: '',
             oldImgSize:'',
             newImgURL: '',
             newImgSize:'',
             size:'50'
        }
    },
    mounted() {
        document.title = 'MuMuTools - 压缩图片'
        this.input.setAttribute('type','file')
        this.input.addEventListener('change',this.seleteFile)
    },
    watch: {
        size() {
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
        seleteFile() {
            let file = event.target.files[0]
            //上传的图片
            this.oldImgURL = window.URL.createObjectURL(file)
            this.oldImgSize = (file.size / 1024).toFixed(2) + 'K'
            this.minImg()
        },
        minImg(){
             //压缩图片
            this.todoURL(this.oldImgURL,this.size/100).then(imgData => {
                let newFile = this.dataURLtoBlob(imgData)
                this.newImgURL = window.URL.createObjectURL(newFile)
                this.newImgSize = (newFile.size / 1024).toFixed(2) + 'K'
            })
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

