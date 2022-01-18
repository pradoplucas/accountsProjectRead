/*  Módulos */
const mongoose = require('mongoose'); /* Importa o módulo mongoose */

/* Conectar no banco */
module.exports = mongoose
	.connect(process.env.MONGODB_SERVER_KEY, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('##### -- MongoDB Connect: Success\n');
	})
	.catch((err) => {
		console.log('##### -- MongoDB Connect: Error\n' + err + '\n');
	});