const express = require('express')
const app = express()
app.use(require('morgan')('dev'));
const port = 8001

app.get('/', (req, res) => {
  res.send(`anotherapp.local domaininde "/" path'inde dinleyen anotherapp`)
})

app.listen(port, () => {
  console.log(`anotherapp listening on port ${port}`)
})