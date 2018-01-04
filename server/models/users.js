var mongoose = require('mongoose');


var Users = mongoose.model('Users', {
    text: { type: String, required: true, minlength: 2, trim: true },
    completed: { type: Boolean, default: false },
    completedAt: { type: Number, default: null }

});

module.exports = { Users };