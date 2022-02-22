const express = require('express')
const app = express()
app.use(require('morgan')('dev'));
const port = 8002


app.get('/', (req, res) => {
  res.send('/ da dinleyen app! /app dan gelecekler buraya yonlendirilmeli')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})