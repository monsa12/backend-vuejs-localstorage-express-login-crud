const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let notesSchema = new Schema({
    tittle: {
        type: String,

    },
    test: {
        type: String,
    },

});




module.exports = mongoose.model('Notes', notesSchema);

