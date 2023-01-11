const express = require('express')
const cors = require('cors')
const location = require('./src/location')
const app = express()
const port = 3000 || process.env.PORT

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<h2> Microtask #3 </h2>
  <p>Endpoint: /locate/address?lat=[latitude]&lon=[longitude]</p> `)
})

app.use('/locate', location);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

module.exports = app;