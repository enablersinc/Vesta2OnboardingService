const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WorkSpace',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  priority: {
    type: String
  },
  description: {
    type: String
  },
  region: {
    type: String
  },
  fromDate: {
    type: Date,
    default: Date.now
  },
  toDate: {
    type: Date,
    default: Date.now
  },
  organizations: {
    type: [
      {
        organization: {
          type: mongoose.Schema.Types.ObjectId
        },
        contactPerson: {
          type: mongoose.Schema.Types.ObjectId
        }
      }
    ],
    default: []
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);
