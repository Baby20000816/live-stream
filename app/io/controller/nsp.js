'use strict'

const Controller = require('egg').Controller

class NspController extends Controller{
    async test() {
        const{ctx, app} = this
        //前端传过来的参数
        let message = ctx.args[0]
        console.log('ctx:'+ctx)
        const socket = ctx.socket

        const id = socket.id

        socket.emit(id,'来自后端的消息')
    }
}

module.exports = NspController