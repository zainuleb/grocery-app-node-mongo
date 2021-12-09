const express = require('express');
const mongoose = require('mongoose');
/* const bodyParser = require('body-parser'); */
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());

const productsRouter = require('./routes/products');
const orderRouter = require('./routes/orders');
const api = process.env.API_URL;

//middlewares
app.use(`${api}/products`, productsRouter);
app.use(`${api}/order`, orderRouter);

//DB Connection
mongoose
  .connect(process.env.MONGOOSE_CONNECTION_URL)
  .then(() => {
    console.log('Mongoose Connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log('Server is Running');
});
