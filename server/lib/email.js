

const nodemailer    = require('nodemailer')

class Email {
    constructor () {
        this.user = 'admin@upfain.com'
        this.pass = '226Fc9a6c0d0cc10'
        this.host = 'smtp.mxhichina.com'
    }
    send(option) {
        return new Promise((suc,err) => {
            let transporter = nodemailer.createTransport({
                host: this.host,
                port: 25,
                secure: false,
                auth: {
                    user: this.user,
                    pass: this.pass
                }
            })
            transporter.sendMail({
                from: this.user,
                to: option.to,
                subject: option.title,
                text: option.content
            },error => {
                if(error === null){
                    suc()
                }else{
                    err(error)
                }
            })
        })
    }
}

module.exports = new Email()

