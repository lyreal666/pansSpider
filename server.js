const Koa2 = require('koa2');

const server = new Koa2();

server.use(require('koa-body-parser')());
server.use(async (ctx, next) => {
    switch (ctx.method) {
        case 'POST':
            ctx.type = 'text/html';
            ctx.body = `<h2>post 请求成功</h2>
<p>${JSON.stringify(ctx.request.body)}</p>`;
            break;
        case 'GET':
            ctx.type = 'text/html';
            ctx.body = `<h3>get 请求成功</h3>`;
            break;
        default:
            //
    }   
});

const port = 8080;
server.listen(8080);
console.debug(`server is running at http://localhost:${port}`);
