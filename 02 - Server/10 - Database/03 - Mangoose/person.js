import { mongoose } from "mongoose";
import { create } from "./crud.js";
import {manhwaSchema, jjk } from "./manhwa.js";

const uri = "mongodb://localhost:27017/db-sandbox";
mongoose.connect(uri);

const close = () => {
	mongoose.connection.close();
};

const personSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Check kar"],
	},
	age: Number,
	job: String,
	manhwa: manhwaSchema,
});

const Person = mongoose.model("person", personSchema);

const gojo = new Person({
	name: "Gojo Satoru",
	age: 30,
	job: "Special Grade Curse User",
	manhwa: jjk,
});


