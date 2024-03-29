const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/login.html'));
});

app.post("/login", (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    // Check for this case only!
    if (username == "myUserName" && password == "mySup3r53cur3P45Sw0rD!") {
        res.send("Login Successfull")
    } 
    
    // We don't need to give the user a correct error all they need to know
    // is if the username or password is incorrect
    return res.send("Username or Password incorrect!")
    
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
// EOF