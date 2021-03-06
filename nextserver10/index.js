const { parse } = require('url')
const next = require("../nextv10/node_modules/next");

const app = next({ 
    dev: false,
    conf: {
        compress: false,
        distDir: "nextv10/.next",
    }
});

const handle = app.getRequestHandler();

module.exports = async function (context, req) {
    await app.prepare();
    
    const parsedUrl = parse("/", true)

    try {    
        await handle(context.req, context.res, parsedUrl);
    } catch(e) {
        console.error(e);

        context.res = {
            status: 500,
            body: JSON.stringify(e)
        };
    }
}