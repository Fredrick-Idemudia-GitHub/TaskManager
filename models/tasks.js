 //mongoose is the interface or middleware between our schema(data structure) 
 //and our database/coolection
 const mongoose = require('mongoose')

 const taskSchema = new mongoose.Schema({ //Schema is simply the structure of 
   //our data, wrapped in mongoose
    name: {
      type:String,
      required:[true, 'must provide name.'],
      trim:true,
      maxlenght:[20, 'name can not be more than 20 chars.']
    },
    completed: {
      type: Boolean,
      default: false,
    },
 })

 module.exports = mongoose.model("TASK", taskSchema) //TASK is the name of the schema