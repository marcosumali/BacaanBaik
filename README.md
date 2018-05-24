# BacaanBaik
Hactiv8 - Livecode Phase 2 Week 4

1. Deskripsi program yang kita buat:
    - Program: BacaanNetizen - forum
    - Client: html framework: vuejs and vuex; css framework: Materialize
    - Server: js framework: express generator
    - Database: mongodb with mlab

2. Langkah-langkah yang perlu dijalankan:
    - Client: npm run serve
    - Server: nodemon start

3. API Endpoint:
    - /users:
        - get: '/'            ==> getUsers: get all users
        - post: '/signup'     ==> createUser: register new user
        - post: '/signin'     ==> getUser: sign in user

    - /books:
        - get: '/'            ==> getBooks: get all books
        - get: '/single'      ==> getBook: get single book
        - post: '/save'       ==> createBook: save new book posted by user
        - delete: '/delete'   ==> deleteBook: delete book by authorised user

    - /comments:
        - get: '/'            ==> getComments: get all Comment
        - get: '/byBook'      ==> getComments by book: get Comments by book id
        - post: '/save'       ==> createComment: save new Comment posted by user
        - delete: '/delete'   ==> deleteComment: delete Comment by authorised user

![Spiderman](http://octodex.github.com/images/spidertocat.png)  

