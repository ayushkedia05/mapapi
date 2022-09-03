const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');
let cors = require("cors");
app.use(cors());
// console.log(process.env);
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,

    useUnifiedTopology: true
  })
  .then(con => {
    // console.log(con.connection);
    console.log('DB connection successful');
  });

// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have a name'],
//     unique:false
//   },
//   rating: {
//     type: Number,
//     default: 4.6
//   },
//   price: {
//     type: Number,
//     required: [true, 'A tour must have a price']
//   }
// });

// const Tour = mongoose.model('Tour', tourSchema);

// const testTour = new Tour({
//   name: 'dgkkdgdg',
//   rating: 4.5,
//   price: 54
// });

// testTour
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log('Error *:', err);
//   });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
