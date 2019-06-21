const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  domains: {
    type: Array,
    default: []
  },
  managers: {
    type: [String],
    default: []
  },
  organizations: {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  },
  projects: {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('WorkSpace', workspaceSchema);
