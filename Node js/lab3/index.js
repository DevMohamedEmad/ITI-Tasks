const fs = require('fs')
const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    console.log('in middlware');
    next();
})
let users;

app.post('/register', function (request, response) {
    if (request.body.email == '' || request.body.name == '' || request.body.password == '') {
        response.send("enter all fields");
    } else {
        users = JSON.parse(fs.readFileSync('data.txt', 'utf-8'))
        users.push(request.body);
        response.send(users);
        fs.writeFileSync('data.txt', JSON.stringify(users));
    }
})

app.post('/login', function (request, response) {
    users = JSON.parse(fs.readFileSync('data.txt', 'utf-8'))
    let login = false;
    let message = { error: 'Invalid Credintials' }
    users.forEach(element => {
        if (element.email == request.body.email && element.password == request.body.password) {
            message = { message: "Login Successfully" }
            login = true;
        }
    });
    if (login == true) {
        response.send(JSON.stringify(message))
    } else {
        response.send(JSON.stringify(error))
    }
})

app.get('/todos', function (request, response) {
    response.send(fs.readFileSync('todos.json', 'utf-8'))
})

app.post('/todos', function (request, response) {
    console.log(request.body);
    if (request.body.title != '' || request.body.name != '' || request.body.price != '') {

        response.send({ message: "todo added successfully" })
    } else {
        response.send({ message: "Invalid Data" })
    }
})

app.get('/todo/:id', function (request, response) {
    let todo = JSON.parse(fs.readFileSync('todos.json', 'utf-8'))
    response.send(todo[parseInt(request.params.id) - 1])
})

app.listen(8000, function () {
    console.log('app listen on port 8000');
})