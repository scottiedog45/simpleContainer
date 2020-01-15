const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;
const connectDb = require("./connection");
const User = require("./models/User");
const UUID = require("uuid/v4");

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.post("/user-create", async (req, res) => {
    const user = new User({ username: UUID() });
    await user.save().then(() => console.log("User created: " + user.username));
    res.send(`User created: ${user.username}\n`);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    connectDb().then(() => {
        console.log("MongoDb connected");
    });
});
