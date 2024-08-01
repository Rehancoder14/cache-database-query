const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./src/connection/db');
const router = require('./src/router/router')
dotenv.config();

connectDb();
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);


app.listen(port, () => {
  console.log(`cache query app listening on port ${port} `);
});