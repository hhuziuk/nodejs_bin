const express = require("express")
const path = require("path")
const EventEmitter = require("events")
const emitter = new EventEmitter();
const app = express()

const PORT = 3001

emitter.on('time', (time) => {
    res.send(time)
})

const requestTime = function(req, res, next) {
    emitter.emit('time', Date.now())
    next()
}

app.use(requestTime);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening on ${PORT}`)
})