const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  clientId: {
    // for each mongoose schema,
    // it will get a unique id automatically
    type: mongoose.Schema.Types.ObjectId,
    // refer to Client model/schema
    ref: 'Client',
  },
})

module.exports = mongoose.model('Project', ProjectSchema)
