const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({
  path: './config.env',
});
const app = require('./app');
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
console.log(DB);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('db succesful');
  });

//SERVER
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
