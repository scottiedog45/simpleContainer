const mongoose = require("mongoose");
//when running locally in docker, this is the only thing that really matters in terms of connecting to the db..?

//this first url is for docker container stuff
const connection = "mongodb://mongo:27017/mongo-test";

//this url is for runnning locally
// const connection = "mongodb://localhost/mongo-test";

const dbOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectDb = () => {
    return mongoose.connect(connection, dbOpts);
};
module.exports = connectDb;