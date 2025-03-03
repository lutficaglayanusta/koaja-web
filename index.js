const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if(ctx.path === '/'){
    ctx.type = "text/html";
    ctx.body = '<h1>Welcome to the Home Page</h1>';
  }
  else if(ctx.path === "/about"){
    ctx.type = "text/html"
    ctx.body = '<h1>Welcome to the About Page</h1>';
  }
  else if(ctx.path === "/contact"){
    ctx.type = "text/html"
    ctx.body = '<h1>Welcome to the Contact Page</h1>';
  }
  else {
    ctx.type = "text/html"
    ctx.body = '<h1>404 Page Not Found</h1>';
  }
});

const port = 3000
app.listen(port, ()=>{
  console.log(`Server Çalışmaya Başladı Port: ${port}`)
});