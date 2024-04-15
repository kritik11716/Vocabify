const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql2');
const sequelize = require("sequelize");
const multer = require('multer');
const bcrypt = require('bcrypt');
const db=require("./server.js");
const user =require("./user");
const app = express();
const cors = require('cors');
app.use(bodyParser.json());



app.use(cors({
  origin: 'http://localhost:8080', 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Request-Method", "GET, POST, DELETE, PUT, OPTIONS");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
 next();
 });



app.post('/user/register', (req, res) => {
    const { email, password ,name } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error while hashing password:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Store the hashed password in the database
        user.create({
            Name:name,
            Email: email,
            Password: hashedPassword,
            Status:'1'
        })
        .then(() => {
            res.status(201).send('User registered successfully');
        })
        .catch(error => {
            console.error('Error while registering user:', error);
            res.status(500).send('Internal Server Error');
        });
    });
});

app.post('/user/login', (req, res) => {
    const { email, password } = req.body;

    // Retrieve the hashed password from the database based on the provided email
    user.findOne({ where: { email: email } })
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found');
            }

            // Compare the provided password with the hashed password from the database
            bcrypt.compare(password, user.Password, (err, result) => {

                if (err) {
                    console.error('Error while comparing passwords:', err);
                    return res.status(500).send('Internal Server Error');
                }
                if (result) {
                    // Passwords match, login successful
                    res.send('Login successful');
                } else {
                    // Passwords do not match, login failed
                    res.status(401).send('Unauthorized');
                }
            });
        })
        .catch(error => {
            console.error('Error while finding user:', error);
            res.status(500).send('Internal Server Error');
        });
});



db.sync();

app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });