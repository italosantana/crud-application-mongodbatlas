const mongoose = require('mongoose');

require('dotenv').config();
const connectionParams = {
	useNewUriParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.5uq6s.mongodb.net/test?retryWrites=true&w=majority`
const connexion = mongoose.connect(uri, connectionParams).then(()=> console.log('connected to cloud atlas'))
.catch((err) => console.log(err));

module.exports = connexion;
