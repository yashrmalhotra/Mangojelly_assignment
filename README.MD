**1. Node.js version -  21.7.1**

**2. To install dependencies - npm install**

**3. To start express sever - npm run start**


| HTTP Methods | End points  |                   In Response                    |
| :----------: | :---------: | :----------------------------------------------: |
|     GET      |      /      |                  Get all books                   |
|     GET      | /searchbook |             Details of searched book             |
|     GET      | /pagination | provide sorted and filtered data with pagination |
|     POST     |  /addbook   |                   create book                    |
|     PUT      | /updatebook |       update book by its mongodb object id       |
|    DELETE    | /deletebook |     deletebook book by its mongodb object id     |

Here’s a polished version of your points:

1. Functions are defined in the `controller` directory, in a file named `controller.js`.
2. The API endpoint is defined in the `routes` directory, in a file named `routes.js`.
3. The database schema is defined in the `model` directory, in a file named `books.js`.