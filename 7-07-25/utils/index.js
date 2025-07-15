import express from 'express'

const app = express()

app.get("/", (req,res) => {
    res.send("Hello how are you")
})

app.listen(8000,() => {
    console.log('server connected')
}) 