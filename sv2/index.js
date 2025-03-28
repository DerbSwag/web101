// เรียกใช้ library express ด้วยคำสั่ง require
const express = require('express')

// ประกาศเริ่มต้นการใช้ express
const app = express()
const port = 8000

// สร้าง API path '/' และคืนคำ Hello world ออกมาผ่าน API
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// ประกาศ​gxbf http server ที่ port 8000 (ตามตัวแปร port)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})