const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Modules = new Schema({
    name: { type: String },
    structural_elements: [String],
    configs: [String]
});

module.exports = mongoose.model('Modules', Modules, 'modules');