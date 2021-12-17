const { parse } = require('url')
const next = require("../nextv12/node_modules/next");

const app = next({ 
    dev: false,
    conf: {
        compress: false,
        distDir: "nextv12/.next",
    }
});

const handle = app.getRequestHandler();

module.exports = async function (context, req) {
    await app.prepare();
    
    context.req.url = "/";

    try {    
        await handle(context.req, context.res);
    } catch(e) {
        console.error(e);

        context.res = {
            status: 500,
            body: JSON.stringify(e)
        };
    }
}