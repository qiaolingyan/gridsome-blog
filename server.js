const fs = require('fs')
const express = require('express')
const app = express()

const port = 8080
// 打包后的项目文件, 全部放在 public 目录中, public被视为网站根目录
app.use('/',express.static('dist'));

app.listen(port,  () => {
  console.log(`Server is running at :${port}/`)
})
