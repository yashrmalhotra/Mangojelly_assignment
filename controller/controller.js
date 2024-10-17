const Book = require("../model/books.js")
const Books = require("../model/books.js")
const getBooks = async (req, res) => {
    await Books.find({}).then(books => res.send(books))
}

const getBookByID = async (req, res) => {// function to find book by id in mongodb, id recieve in url query parameter
    const id = req.query.id
    await Books.findById(id)
        .then(books => {
           
            books === null ? res.send("Book not found") : res.send(books)// response send based on check if book object empty or not 
        })
        .catch(err => res.send(err))
}

const addBooks = async (req, res) => {// function to store book in mongodb, books details recieve in requested body
    const details = req.body
    await Books.create({
        book_name: details.book_name,
        author: details.author,
        number_of_pages: details.number_of_pages,
        price: details.price,
        discount: details.discount,
        condition: details.condition,
        description: details.description
    }).then(() => {
        res.send("Book created succesfully")
    }).catch((err) => {
        if (err.errors) {
            let keysArray = Object.keys(err.errors)
            let msgArray = []
            keysArray.forEach(keys => {
                msgArray.push(err.errors[keys].message)
            })
            res.send(msgArray)
        } else {
            res.send(err)
        }

    })
}

const updateBooks = async (req, res) => {//function to update  book in mongodb , find books by mongodb id in requested body and updte book details which recieved in requested body
    const details = req.body
    await Books.findByIdAndUpdate(details.id,
        {
            book_name: details.book_name,
            author_name: details.author_name,
            price: details.price,
            number_of_pages: details.number_of_pages,
            description: details.description
        }
    ).then(() => {
        res.send("Book updated succesfully")
    }).catch((err) => {
        res.send(err.message)
    })
}
const pagination = async (req, res) => {//function to paginate, sort, and filter book data
    const currentPage = Number(req.query.currentPage) - 1
    const limit = Number(req.query.limit)
    const skip = currentPage * limit
    const totalItems = await Book.countDocuments()
    const totalPages = Math.ceil(totalItems / limit)
    await Books.find({
        price: { $lt: 1000 }//"Filter books that have a price of less than rs100
    })
        .skip(skip)
        .limit(limit).sort({ price: 1 })//sort books in ascending order by price
        .then(books => res.json({ books, page: currentPage + 1, limit, totalItems, totalPages }))
        .catch(err => res.send(err))
}
const deleteBooks = async (req, res) => {//function to delete book from mongodb, find book by book's mongodb obj id  recieved in url query parameter, and book will delete from mongodb
    const id = req.body.id
    await Book.findByIdAndDelete(id)
        .then(() => res.send("Book deleted succesfully"))
        .catch(() => { res.send("Something went wrong") })
}

module.exports = {
    getBooks,
    getBookByID,
    addBooks,
    updateBooks,
    deleteBooks,
    pagination
}