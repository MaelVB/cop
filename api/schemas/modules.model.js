const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Modules = new Schema({
    description: { type: String },
    author: { type: String },
    priority: { type: String },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Modules', Modules, 'modules');