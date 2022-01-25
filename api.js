const express = require('express')
const app = express()
const port = 8080

app.post('/receive', (req, res) => {
    console.log("hello");
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
