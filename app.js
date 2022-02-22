const express = require('express')
const app = express()
app.use(require('morgan')('dev'));
const port = 8000


app.get('/', (req, res) => {
  res.send('/ da dinleyen app!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})