const Router =require('koa-router')
const appRouter= new Router()
const React = require('react')
const ReactDOMServer  = require('react-dom/server')
import Hello from '../conponents/Hello'

//
let HelloHtml=ReactDOMServer.renderToString(<Hello/>);
appRouter
    .get('/', async (ctx) => {
        await ctx.render('index',{content:HelloHtml});
})

module.exports = appRouter.routes();