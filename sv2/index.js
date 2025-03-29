const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
let users = []

// ใช้สำหรับสร้างก่อน
app.post('/user', (req, res) => {const data = req.body})

// ใช้สำหรับแก้ไข
app.put('/user/:id', (req, res) => {
  const id = req.params.id
  const data = req.body

  const userToUpdate = users.find((user) => user.id === parseInt(id))

  if (!userToUpdate) {
    return res.status(404).json({ message: 'User not found' })
  }

  userToUpdate.firstname = data.firstname || userToUpdate.firstname
  userToUpdate.lastname = data.lastname || userToUpdate.lastname
  userToUpdate.age = data.age || userToUpdate.age

  res.json({ message: 'User updated successfully', user: userToUpdate })
})