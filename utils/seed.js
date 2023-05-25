const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomName, getRandomThought } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("Connection to database successful.");
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];
    const thoughts = getRandomThought(9);
	
    for (let i = 0; i < 15; i++) {
		// There is a chance that this random seeding hits the same name twice :(( can be fixed later
        const fullName = getRandomName();
        users.push({
            email: `${fullName.replace(/\s/g, "")}@domain.com`,
            username: `${fullName}`,
        });
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info("Seeding complete!");
    process.exit(0);
});