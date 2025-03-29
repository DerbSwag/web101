const express = require('express')
const app = express()

// สร้าง GET API path /test
app.get('/test', (req, res) => {
  let user = {
    firstname: 'ชื่อจริง',
    lastname: 'นามสกุล',
    age: 20
  }
  res.json(user)
})

const port = 8000
app.listen(port, () => {
  console.log(`Server is running on port  ${port}`)
})