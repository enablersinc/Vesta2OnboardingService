const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WorkSpace',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  orgHierarchy: {
    type: [{}],
    default: []
  },
  workforce: {
    type: [
      {
        employee: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
        },
        role: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
        },
        reportsTo: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
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

module.exports = mongoose.model('Organization', organizationSchema);
