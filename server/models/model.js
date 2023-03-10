const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const squareSchema = new Schema({
    boxId: {type: String, unique: true},
    number: {type: Number}
});

// squareSchema.plugin(findOrCreate);

// const Model = mongoose.model('Model', modelSchema);
const SquareModel = mongoose.model('SquareModel', squareSchema);

module.exports = {
    // Model: Model,
    SquareModel: SquareModel
}