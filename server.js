const express = require("express")
const mongoose = require("mongoose")
const Contact = require("./log.js");
const app = express()

const PORT = 3001
const db = 'mongodb+srv://ignat-ebanat:pass1234@cluster0.7i71zh8.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(db)
    .then((res) => console.log('connected to db'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    const title = 'Contacts'
    Contact
        .find()
        .then((contacts) => res.send({contacts, title}))
        .catch((err) => console.log(err))
})

// app.post('/', (req, res) => {
//     contacts.insertOne(
//         { id: 1, login: 'login1', name: 'name1', gender: 'male' },
//         (err, result) => {
//           if (err) {
//             console.log('Unable insert user: ', err)
//             throw err
//           }
//         }
//       )
// })



app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening on ${PORT}`)
})