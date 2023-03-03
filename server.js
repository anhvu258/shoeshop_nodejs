const express = require('express');
const bodyParser = require("body-parser");
const dbConnect = require('./config/dbConnect');

const dotenv = require('dotenv').config();
const PORT = 5000;
const authRouter = require('./routes/authRoute');
const cors = require('cors');
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions))
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/",authRouter);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//  app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

app.listen(PORT, () => {
    console.log(`Server is running  at PORT http://localhost:${PORT}`);
  });