// Express
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const User = require('./persons');
const port = 5000

app.get('/', (req, res) => {
  User.find( {} , (err, user) => {
    res.json({user})
  })
})

const startServer = () => {
  app.listen(port)
  console.log(`App started on port ${port}`)
}

const connectDb = () => {
  mongoose.Promise = require('bluebird')

  const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
  mongoose.connect('mongodb+srv://anyakorytko:12345@cluster0.jpqjs.mongodb.net/persons?retryWrites=true&w=majority', options)
  return mongoose.connection
}

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer)

// app.use(express.json());
// app.use(cors());
//

// Mongoose
// const mongoose = require('mongoose');

// const dbURI = "mongodb+srv://anyakorytko:12345@cluster0.jpqjs.mongodb.net/persons?retryWrites=true&w=majority";

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.once('open', () => {
//   // app.listen(5000, () => console.log('Server is running...'));
//   console.log('we are connected')
//   User.findById('609149e713c01f43585c448e', (err, user) => {
//     console.log('res', err, user)
//   })
//   // const user = new User({name: "Alex"})
//   // console.log('user', user)
//   // user.save((err, createUser) =>{
//   //   console.log('result', err, createUser)
//   // })
// });

// db.on('error', (error) => console.error(error));
//

//

// Get All
// app.get('/', async (req, res) => {
//   res.json({Persons})
//   // const persons = await Persons.find();
//   // res.json({persons});
//   console.log({Persons})
// });

// Create One
// app.post('/', async (req, res) => {
//   const person = new Persons(
//     // {
//     //   name: req.body.name,
//     //   age: req.body.age
//     // }
//     {
//       ...req.body
//     }
//   );

//   try {
//     res.json(await person.save());
//   } catch (err) {
//     res.json({errMessage: err.message});
//   }
// });
