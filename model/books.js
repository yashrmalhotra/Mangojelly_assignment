const {Schema,model} = require("mongoose")

const bookSchema = new Schema({
    book_name:{
        type:String,
        required:[true,"Book name is required"]
        
    },
    author:{
        type:String,
        required:[true,"Author name is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        cast:[null, "Price must be a number"]
    },
    discount:{
        type:Number,
        cast:[null, "Discount must be a number"]
    },
    condition:{
        type:String,
        enum:{
            values:["old","new"],
            message:"Condition either new or old"
        },
        required:[true,"Condition is required"]
    },
    number_of_pages:{
        type:Number,
        required:[true,"Number of pages is required"],
        cast:[null, "Number of pages must be a number"]
    },
    description:{
        type:String
    },

})

const Book = model("Book",bookSchema)
module.exports = Book