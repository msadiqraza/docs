const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
const db = client.db("db-sandbox");
const collection = db.collection("order");

const find = client.connect(async (err) => {
	console.log("connected");

	const a = await collection.findOne({ _id: 1 });

	console.log(a);
	insert(db, () => {
		client.close();
	});
});

const insert = async (db, callback) => {
	const strip1 = db.collection("order");

	await strip1.insertOne(
		{ _id: "6", name: "demon child", a: 1 },
		(err, result) => {
               console.log(result);
			callback(result);
		}
	);
};
