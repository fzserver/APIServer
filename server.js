const express = require("express");
const dotenv = require("dotenv");
// const logger = require("./middleware/logger");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route Files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Body Parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use(logger);

// Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

// const http = require('http');

// const todos = [
//     {id: 1, name: 'Parth'},
//     {id: 2, name: 'Sahil'},
//     {id: 3, name: 'Surya'}
// ]

// const server = http.createServer((req, res) => {
//     // console.log(req.headers.authorization);
//     const { method, url } = req;
//     let body = [];
//     req.on('data', chunk => {
//         body.push(chunk);
//     }).on('end', () => {
//         body = Buffer.concat(body).toString();

//         let status = 404;
//         const response = {
//             success: false,
//             data: null,
//             error: null,
//         }

//         if(method === 'GET' && url === '/todos') {
//             status = 200;
//             response.success = true;
//             response.data = todos;
//         } else if(method === 'POST' && url === '/todos') {
//             const {id, text} = JSON.parse(body);

//             if(!id || !text) {
//                 status = 400;
//                 response.error = 'Please add id & text';
//             } else {
//                 todos.push({ id, text });
//                 status = 201;
//                 response.success = true;
//                 response.data = todos;
//             }
//         }

//         res.writeHead(status, {
//             'Content-Type': 'application/json',
//             'X-Powered-By': 'Node.js'
//         });
//         res.end(
//             JSON.stringify(response)
//         );
//     });

// });

// const PORT = 8081;
// server.listen(PORT, () => console.log(`Server Running at ${PORT}!`));
