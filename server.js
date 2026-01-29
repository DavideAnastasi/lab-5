const cors = require("cors")
const express = require("express")
const app = express()
app.use(cors())
const port = 8080

app.get("/", (req, res) => {
    const messaggio = {
        "message" : "hello word dal server <3",
    }
    res.send(messaggio)
})

app.listen(port, () => {
    console.log("server listening on port ",port) 
})