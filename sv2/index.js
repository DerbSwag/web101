const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Parse incoming JSON data
app.use(bodyParser.json())

// เราสร้างตัวแปร users ขึ้นมาเป็น Array จำลองการเก็บข้อมูลใน Server (ซึ่งของจริงจะเป็น database)
let users = []

// Route handler for creating a new user
app.post('/user', (req, res) => {
  const data = req.body

  const newUser = {
    firstname: data.firstname,
    lastname: data.lastname,
    age: data.age
  }

  //
  users.push(newUser)

  // Server ตอบกลับมาว่าเพิ่มแล้วเรียบร้อย
  res.status(201).json({ message: 'User created successfully', user: newUser })
})

app.listen(8000, () => {
  console.log('Server started on port 8000');
})