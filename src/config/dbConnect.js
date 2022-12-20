import mongoose from 'mongoose';

mongoose.set("strictQuery", true);
mongoose.connect('mongodb+srv://master:123@teste.kgo8wtx.mongodb.net');

let db = mongoose.connection;

export default db;