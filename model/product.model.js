
const products = require('../data/products.json');
const fs = require('fs');
const ConnectToMongoDB = require('../utils/mongodb-connection');
const { ObjectId } = require('mongodb');

async function find() {
    const db = await new ConnectToMongoDB().Get()
    return new Promise(async (resolve, reject) => {
        const products = await db.collection("product").find({},{sort:{_id:-1}}).toArray();
        resolve(products);
    }
    )
}
async function findById(id) {
    const db = await new ConnectToMongoDB().Get()
    return new Promise(async (resolve, reject) => {
        const product = await db.collection("product").findOne({_id:new ObjectId(String(id))});
        resolve(product);
    })
}
async function create(product) {
    const db = await new ConnectToMongoDB().Get()
    return new Promise((resolve, reject) => {
        products.push(product);
        fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(products), (err) => {
            if (err) reject(err)
            else resolve({ message: "product created successfuly", data: product })
        })
    })
}
async function update(id, payload) {
    const db = await new ConnectToMongoDB().Get()
    return new Promise((resolve, reject) => {
        products.map(product => {
            if (product.id == id) {
                Object.assign(product, payload);
            }
            return product;
        })
        fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(products), (err) => {
            if (err) reject(err)
            else resolve({ message: "product updated successfully" })
        })
    })
}
async function deleteProduct(id) {
    const db = await new ConnectToMongoDB().Get()
    return new Promise((resolve, reject) => {
        const result = products.filter(product => product.id != id);
        fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(result), (err) => {
            if (err) reject(err);
            else resolve({ message: "product deleted successfuly" })
        })
    })
}
const productModel = {
    find,
    findById,
    create,
    update,
    deleteProduct
}
module.exports = productModel;