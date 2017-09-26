<template>
  <div class="chat-chat" v-if="show" transition="staggered" stagger="10000">
     <div class="chat-out  mdui-ripple" @click='hideChat' >
        <i class="mdui-icon material-icons">close</i>
      </div>
    <div class="chat-content " v-if="login">
      <div class="top">
        <div class="nickname">{{ loginUser }}</div>
        <div class="signature">在深邃的编码世界，做一枚轻盈的纸飞机</div>
      </div>
      <div class="chat-message mdui-color-theme">
        <div class="message" ref='message_'>
          <div class="message-list" v-for="list in messages">
            <div class="message-top">
              <div class="message-ava">
                <img :src="list.ava" alt="" height="50" width="50">
              </div>
              <span class="message-nickname">
                {{list.nickname}}
              </span>
              <span class="message-time">
                {{list.sendTime}}
              </span>
            </div>
            <div class="message-msg">
              <p class="msg">{{list.msg}}</p>
            </div>

          </div>
        </div>
        <div class="sendMessage">
          <div class="send-message">
            <input type="text" name="" id="" class="send" :value="message" v-model='message' @keyup.enter="send">
            <i class="mdui-icon material-icons other mdui-ripple" @click="clear">clear</i>
          </div>
        </div>
      </div>
    </div>
    <div class="login  mdui-color-theme" v-if="logini">
      <div class="login-submit">
        <div class="mdui-textfield mdui-textfield-floating-label">
              <i class="mdui-icon material-icons">tv</i>
              <label class="mdui-textfield-label">昵称</label>
              <input class="mdui-textfield-input" v-model='user' :value="user"></input>
        </div>
        <div class="text-center">
            <button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="logined()">登录</button> 
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import time from '../../fetch/time.js'
export default {
  name: 'vchat',
  data() {
    return {
      user: '',
      message: '',
      socket: '',
      messages: [],
      login:false,
      loginUser:'',
      logini:true
    }
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        this.$refs.message_.scrollTop = this.$refs.message_.scrollHeight
      })
    }
  },
  mounted() {
    var _this = this;
    if(this.isLogin())
    {
      this.chatWebSocket();
    }else{
        //this.login = false;
    }
  },
  props: ['show', 'button'],
  methods: {
    isLogin()
    {
      if(this.$cookie.get('user'))
      {
        this.loginUser = this.$cookie.get('user');
        this.logini = false
        this.login = true
        return true;
      }else{
        this.login = false
        return false;
      }
      //this.$cookie.delete('test');
      
    },
    logined()
    {
      var date = new Date;
      date.setDate(date.getDate() + 21);
      this.$cookie.set('user', this.user, { expires: '1h' });
      this.loginUser = this.user;
      this.logini = false;
      this.login = true;
      this.chatWebSocket();
    },
    chatWebSocket()
    {
      var _this = this;
      var url = 'ws://120.24.47.145:9502';
      this.socket = new WebSocket(url);
      this.socket.onopen = function(evt) {
        //websocket.send('进入房间');
      };
       _this.socket.onmessage = function(evt) {
        var res = JSON.parse(evt.data)
        console.log(res);
      _this.pushMessage(res)
      };
    },
    hideChat() {
      this.$emit('change', {
        show: false,
        button: true
      });
    },
    clear() {
      this.message = '';
    },
    send() {
      if (this.message == '') {
        swal("出错了!", "请填写内容!", "error")
        return false
      }
      //进行封装数据
      var message = {
        user: this.loginUser,
        message: this.message,
        time: time.unixToDateNoS(Date.parse(new Date()) / 1000),
        ava: 'http://tva4.sinaimg.cn/crop.0.0.180.180.180/6d424ea5jw1e8qgp5bmzyj2050050aa8.jpg'
      };
      var msg = JSON.stringify(message)
      this.socket.send(msg);
      this.message = '';
      //this.pushMessage(message)
    },
    pushMessage(msg) {
      this.messages.push({
        nickname: msg.user,
        ava: msg.ava,
        sendTime: msg.time,
        msg: msg.message
      })
    },
    isJSON(str) {
      if (typeof str == 'string') {

        try {
          var obj = JSON.parse(str);
          if (str.indexOf('{') > -1) {
            return true;
          } else {
            return false;
          }

        } catch (e) {
          console.log(e);
          return false;
        }
      }
      return false;
    }
  }
}
</script>
<style scoped>
.chat-chat {
  z-index: 1000000;
  position: relative;
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 300px;
  height: 600px;
  border: 1px solid #ccc;
  border-right: 0px;
}
.login{
  height: 100%;
}
.text-center
{
  margin-top: 20px;
  text-align: center;
}
.login-submit{
  width: 80%;
  padding-top: 250px;
  margin: 0 auto;
}
.chat-out {
  position: absolute;
  top: 10px;
  right: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.staggered-transition {
  transition: all .5s ease;
  overflow: hidden;
  margin: 0;
  height: 600px;
}

.staggered-enter {
  opacity: 0;
  height: 0;
}

.staggered-leave {
  opacity: 0;
  height: 0;
}

.top {
  z-index: 19891015;
  height: 100px;
  background-image: url('../../assets/img/skin/3.jpg');
  padding: 20px 20px 0 20px;
}

.nickname {
  margin-bottom: 10px;
  font-weight: bold;
}

.signature {
  white-space: nowrap;
  text-overflow: ellipsis;
}

.chat-message {
  /* background-color: rebeccapurple; */
  height: 500px;
}

.message {
  width: 100%;
  height: 390px;
  padding: 20px;
  overflow-y: scroll;
}

.sendMessage {
  padding: 10px;
  width: 100%;
  background-color: #F6F6F6;
  height: 60px;
  margin: 0 auto;
}

.send-message {
  width: 95%;
  background-color: #ccc;
  border-radius: 3px;
}

.send {
  padding: 0 5px;
  width: 85%;
  background-color: #ccc;
  border: 0px solid #ccc;
  height: 30px;
  border: 0;
  outline: none;
}

.other {
  width: 10%;
  display: inline-block;
  float: right;
  padding-top: 5px;
  vertical-align: top;
}

.message-ava img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.message-nickname {
  display: block;
  margin-top: -50px;
  margin-left: 55px;
}

.message-time {
  display: block;
  margin-top: -18px;
  margin-left: 150px;
}

.message-msg {
  margin-top: -5px;
  padding-left: 20%;
}

.msg {
  width: 80%;
}
</style>
