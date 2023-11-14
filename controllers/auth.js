const { Users, user_name, email } = require('../models/users');

exports.signup = async (req, res) => {
    try {
        const result = await Users.create({
            firstname: "aaar",
            lastname: "@234"
        });
        console.log("User created:", result);
        res.json(result);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
}
