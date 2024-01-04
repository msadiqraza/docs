import { mongoose } from "mongoose";

const close = () => {
	mongoose.connection.close();
};

const create = async (collection, arr) => {
	const ins = await collection.insertMany(arr);
	console.log(ins);

	close();
};

// Select name, show name id v: { name: "One Piece" }, 'name _id __v';
// don't show id: '-_id'
const read = async (collection, identifier, readQuery) => {
	const find = await collection.find(identifier, readQuery);
	console.log(find);

	//close connection auto
	close();
};

const update = async (collection, identifier, updateQuery) => {
	const up = await collection.updateOne(identifier, updateQuery);
	console.log(up);
	close();
};

export { update, read, create };
