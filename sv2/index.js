const express = require('express')
const app = express()

// สร้าง GET API path /user
app.get('/user', (req, res) => {
  res.json({
    firstname: 'ชื่อจริง',
    lastname: 'นามสกุล',
    age: 20
  });
})

const port = 8000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})