const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Get Requests
app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
});

app.get("/api/v1/bootcamps/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

// Post Requests
app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
});

// Put Requests
app.put("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Display bootcamp ${req.params.id}` });
});

// Delete Requests
app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

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
