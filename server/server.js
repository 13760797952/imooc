const express = require('express')
// 引入库
const mongoose = require('mongoose')

// 链接mongoose
const DB_URL = 'mongodb://localhost:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('connect success')
})
// 类似于MySQL的表，mongo里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true },
  age: { type: Number, require: true }
}))

// 新建数据 create
// User.create({
//   user:'imooc1',
//   age:18
// },function(err,doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })

// 更新 update
// User.update({'age':22},{'$set':{user:'屈臣氏'}},function(err,doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })

// 删除 remove
// User.remove({
//   age:20
// },function(err,doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })



// 新建app
const app = express()


app.get('/', function (req, res) {
  res.send("<h1>9093</h1>")
})

app.get('/data', function (req, res) {
  // 查询数据 find
  /** findOne 只查找一条 */
  User.find({},function(err,doc){
    res.json(doc)
  })
  // res.json({ name: 'imooc', age: 20 })
})

app.listen(9093, function () {
  console.log('localhost:9093')
})