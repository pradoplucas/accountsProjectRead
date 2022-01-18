const mongoose = require('mongoose');
const { Schema } = mongoose;

const debtorSchema = new Schema({
	nameId: {
		type: String,
        required: true
	},
	nameShow: {
		type: String,
        required: true
	},
	total: {
		type: Number,
        required: true
	},
	n1: {
		type: Number,
        required: true
	},
	n2: {
		type: Number,
        required: true
	}
});

module.exports = mongoose.model('debtor', debtorSchema);