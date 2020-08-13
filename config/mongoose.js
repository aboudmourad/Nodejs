const mongoose = require('mongoose')
const db = 'mongodb+srv://aboud:1234567890@cluster0.ukski.mongodb.net/nodejs?retryWrites=true&w=majority'
mongoose.set('useFindAndModify', false);
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then ( result => console.log('connect to db'))
.catch( err => console.log(err))