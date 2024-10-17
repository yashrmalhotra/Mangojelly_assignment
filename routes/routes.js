const express = require("express")
const router = express.Router()
const {getBooks,addBooks,updateBooks, deleteBooks, getBookByID,pagination} = require("../controller/controller.js")
router.get("/",getBooks)//endpoint to send all books in response
router.get("/pagination",pagination)//endpoint to send sorted, filterd, and paginated data in response
router.get("/searchbook",getBookByID)//endpoint to search specific book by its mongodb object id and send book details in response
router.post("/addbook",addBooks)//endpoint to create and store book in mongodb
router.put("/updatebook",updateBooks)//endpoint to update existing book details in mongodb
router.delete("/deletebook",deleteBooks)//endpoint to delete existing book details in mongodb
module.exports = router