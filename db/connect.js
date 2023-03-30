// setting up connection in db/connect.js
const mongoose = require('mongoose')



//in the string change add password - 12345678Save and database name - TASK-MANAGER
// user name already entered by default - idemudia


const connectDB = (uri) => {
    return mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, // this second option is to remove display err, mongoose version 6 do not require them
})
}

module.exports = connectDB


// .then(() => console.log('CONNECTED TO DB ...'))
// .catch((err) =>{
//     console.log(err)
// })