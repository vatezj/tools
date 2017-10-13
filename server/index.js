

const express = require('express')
const app     = express()
const email   = require('./lib/email')

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.get('/send-mail',(req,res) => {

   if(!req.query.to || req.query.title === undefined || req.query.content === undefined){
       res.json({
           code: '0',
           msg: '缺少必要的信息'
       })
   }else {
    email.send({
        to: req.query.to,
        title: req.query.title,
        content: req.query.content
    }).then(() => {
        res.json({
            code: 1,
            msg: '发送成功'
        })
    }).catch(error => {
        res.json({
            code: 0,
            msg: '发送失败'
        })
    })
   }
    
})

app.listen(1234,error => {
    if(error){
        throw new Error('server open failure')
    }else{
        console.log('listen is : 1234')
    }
})

