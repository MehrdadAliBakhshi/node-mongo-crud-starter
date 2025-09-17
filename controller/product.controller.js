const productModel = require('../model/product.model.js');

async function get(req, res) {
    try {
        const products = await productModel.find();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(products));
        res.end();
    } catch (error) {
        res.write(error);
        res.end();
    }
}
async function getById(req, res) {
    try {
        const id = req.url.split('/')[3];
        let product = await productModel.findById(Number(id));
        if (product) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(product));
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: 'Product not found' }));
            res.end();
        }

    } catch (error) {
        res.write(error);
        res.end();
    }
}
async function create(req, res) {
    try {
        let body = '';
        req.on('data', (monk) => {
            body += monk.toString();
        })
        req.on('end', async () => {
            const product = {
                id: Date.now(),
                ...JSON.parse(body)
            }
            const result = await productModel.create(product);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(result));
            res.end()
        })

    } catch (error) {
        res.write(error);
        res.end();
    }
}
async function update(req, res) {
    try {
        let body = '';
        let id = req.url.split('/')[3];
        req.on('data', (chunk) => {
            body += chunk.toString();
        })
        req.on('end', async () => {
            const parsBody = { ...JSON.parse(body) };
            const product = productModel.findById(id);
            if (product) {
                const result = await productModel.update(id, parsBody);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify(result));
                res.end()
            } else {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.write(JSON.stringify({ message: "Product Not Found" }));
                res.end();
            }
        })
    } catch (error) {

    }
}
async function deleteProduct(req, res) {
    try {
        const id = req.url.split('/')[3];
        const product =await productModel.findById(id);
        if(!product){
            res.writeHead(404,{"Content-Type":"application/json"});
            res.write({message : "Product not found"});
            res.end();
        }else{
            const result = await productModel.deleteProduct(id);
            res.writeHead(201,{'Content-Type':"application/json"});
            res.write(JSON.stringify(result));
            res.end();
        }
    } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "Product Not Found" }));
        res.end();
    }
}
productController = {
    get,
    getById,
    create,
    update,
    deleteProduct
}
module.exports = productController;