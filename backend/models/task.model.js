const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  username: { type: String, required: true },
  task_name:{type: String, required: true},
  description: { type: String, required: true },
  priority: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;