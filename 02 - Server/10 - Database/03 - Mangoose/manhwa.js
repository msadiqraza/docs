import { create, update, read } from "./crud.js";
import {mongoose} from "mongoose";



//uri directly to the database  , {useNewUrlParser:true}
const uri = "mongodb://localhost:27017/db-sandbox";
mongoose.connect(uri);

const close = () => {
	mongoose.connection.close();
};

//schema doesn't interfer if all key values are not in object
//if new key is added in a object schema doesn't let it store in db
const manhwaSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Check kar"],
	},

	// this is also possible
	tier: {
		type: String,
		//validators, check docs
	},
	type: String,
});

const Manhwa = mongoose.model("manhwa", manhwaSchema);

const jjk = new Manhwa({
	name: "Jujutsu Kaisen",
	tier: "A",
});

const op = new Manhwa({
	name: "One Piece",
	tier: "S",
});

var arr = [];
const readQuery = "name -_id";
const identifier = {
	name: "Jujutsu Kaisen",
};
const updateQuery = {
	name: "Jujutsu Kaisen Up",
};
arr = [op, jjk];

// read(Manhwa, identifier, readQuery);


export {manhwaSchema, jjk };