const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Module = new Schema({
    name: { type: String },
    infos: [String],
    configurations: [String]
});

module.exports = mongoose.model('Module', Module, 'modules');