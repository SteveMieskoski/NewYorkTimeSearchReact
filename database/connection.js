const mongoose = require("mongoose");
mongoose.Promise = Promise;
// Local Database Configuration with Mongoose
let MONGO_URI;
if(process.env.MONGODB_URI){
	MONGO_URI = process.env.MONGODB_URI;
} else {
	MONGO_URI = "mongodb://localhost/nytsearch";
}

mongoose.connect(MONGO_URI, function(error) {
	if(error) throw error;
});

mongoose.connection.on('connected', function () {
	console.log('Database connection open');
});

mongoose.connection.on('error',function (err) {
	console.log('Mongoose default connection error: ' + err);
	//tryReconnect();
});

mongoose.connection.on('disconnected', function () {
	console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});


module.exports = mongoose.connection;