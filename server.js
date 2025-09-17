const http = require('http');
const { get, getById, create,update,deleteProduct } = require('./controller/product.controller');
const { notFound } = require('./controller/errorHandler.controller');
const PORT = '3000';
const server = http.createServer((req, res) => {
    const apiRout = 'api';
    const productRoutes = `/${apiRout}/products`;
    const singleProductRoute = /\/api\/products\/[0-9]+/;
    let {url,method} = req;
    if (url == productRoutes && method == "GET") {
        get(req, res);
    } else if (req.url.match(singleProductRoute) && method == "GET") {
        getById(req, res);
    } else if (url == productRoutes && req.method == "POST") {
        create(req, res);
    } else if (req.url.match(singleProductRoute) && method == "PUT") {
        update(req,res);
    } else if(req.url.match(singleProductRoute) && method == "DELETE"){
        deleteProduct(req,res);
    }
    else {
        notFound(res);
    }


})
server.listen(PORT);
console.log(`server run sucessfully on port: ${PORT}`);