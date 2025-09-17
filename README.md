# Node.js MongoDB CRUD Starter

A beginner-friendly starter template for building CRUD applications using **Node.js**, **Express**, and **MongoDB**.  
This project demonstrates basic **Create, Read, Update, Delete (CRUD)** operations and is perfect for learning RESTful API development.

## 🚀 Features
- Basic CRUD operations (Create, Read, Update, Delete)
- MongoDB integration using **Mongoose**
- Modular folder structure for scalability
- Ready for further customization
- Tested with **Postman**

## 🛠 Prerequisites
- Node.js v14+  
- npm (comes with Node.js)  
- MongoDB (local installation or MongoDB Atlas)  
- Postman (optional, for testing API endpoints)


node-mongo-crud-starter/
│
├── controllers/ # Business logic
├── models/ # Mongoose models
├── routes/ # Express routes
├── config/ # Configuration files
├── .env.example # Example environment variables
├── server.js # Entry point
└── package.json


## 🔌 API Endpoints

- `POST /api/items` → Create a new item  
- `GET /api/items` → Get all items  
- `GET /api/items/:id` → Get a single item by ID  
- `PUT /api/items/:id` → Update an item by ID  
- `DELETE /api/items/:id` → Delete an item by ID


## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## 📄 License
This project is licensed under the **MIT License**.
