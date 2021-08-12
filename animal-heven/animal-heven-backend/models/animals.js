const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        gender: String,
        img: String,
        age: Number

},
{timestamps: true}

)

const Animals = mongoose.model('Animals', animalSchema)
module.exports = Animals;