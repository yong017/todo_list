const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  done: {
    type: Boolean
  }
})

module.exports = mongoose.model('Todo', todoSchema)
//匯出的時候我們把這份 model 命名為 Todo，以後在其他的檔案直接使用 Todo 就可以操作和「待辦事項」有關的資料