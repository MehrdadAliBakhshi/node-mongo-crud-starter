const { MongoClient } = require("mongodb");

module.exports = class ConnectToMongoDB {
    #db_url = "mongodb://localhost:27017/product-node-js";
    #db = null;
    async #connect() {
        try {
            let client = new MongoClient(this.#db_url);
            let db = client.db();
            return db;
        } catch (error) {
            console.log(error.message);
        }
    }
    async Get() {
        try {
            if(this.#db){
                console.log("db connection is already alive");
                return this.#db;
            }else{
                this.#db= await this.#connect;
                return this.#db;
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}
