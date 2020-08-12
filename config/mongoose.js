const mongoose = require('mongoose')
// add your own mongodb db
const db=''

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then ( result => console.log('connect to db'))
.catch( err => console.log(err))