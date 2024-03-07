const router = require("express").Router()
const pool = require("./db")


//Registering
router.post("/register", async (req, res) => {
    try {
        
        //1. destructure the req.body (username, password)
        
        const { name , password} = req.body;


        //2.Check if user exist (If user exist thenthrow error)

        const user = await pool.query("SELECT * FROM users WHERE username = $1",
        [name]
        );

        res.json(user.rows);
        //3. Bcrypt the user password

        //Enter  the new user inside the database

        //5. generating our jwt token

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Bucket buddy server Error")
    }
});


module.exports = router