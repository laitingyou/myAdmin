import Koa from 'koa'
const app = new Koa()
import views from 'koa-views'
import path from 'path'
import ejs from 'ejs'


app.use(views(path.join(__dirname, '/view'), {
    map:{html:'ejs'}
}))

app.use(require('./router/index'))







app.use(async ctx=>{
    ctx.body = 'hello world'
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
})

app.listen(3000)
