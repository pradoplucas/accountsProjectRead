const mongoose = require('mongoose');
const { Schema } = mongoose;

const billSchema = new Schema({
	accountId: {
		type: mongoose.ObjectId,
        required: true
	},
	debtorId: {
		type: mongoose.ObjectId,
        required: true
	},
	accountNameShow: {
		type: String,
        required: true
	},
    debtorNameShow: {
		type: String,
        required: true
	},
    date: {
		type: Date,
        required: true
	},
	dateInput: {
		type: String,
        required: true
	},
	type: {
		type: String,
        required: true
	},
	value: {
		type: Number,
        required: true
	},
	info: {
		type: String,
        required: true
	}
});

module.exports = mongoose.model('bill', billSchema);