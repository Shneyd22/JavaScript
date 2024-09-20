const express = require('express');
const joi = require('joi');
const app = express();
const fs = require('fs');
const path = require('path');
const pathToUsersData = path.join(__dirname, '/users.json');
app.use(express.json());
const users = [];
let uniqueID = 0;
const userScheme = joi.object({
    firstName: joi.string().min(1).required(),
    secondName: joi.string().min(2).required(),
    age: joi.number().required(),
    city: joi.string().min(1)
})

app.get('/users', (req, res) => {
    const usersData = JSON.parse(fs.readFileSync(pathToUsersData, 'utf-8'));
    res.send(usersData)
});

app.get('/users/:id', (req, res) => {
    const usersData = JSON.parse(fs.readFileSync(pathToUsersData, 'utf-8'));
    const userID = +req.params.id;
    if (usersData[userID]) {
        res.send(usersData[userID])
    } else {
        res.status(404);
        res.send({ user: null })
    }
});

app.post('/users', (req, res) => {
    const usersData = JSON.parse(fs.readFileSync(pathToUsersData, 'utf-8'));
    uniqueID = Object.keys(usersData).length + 1;
    const result = userScheme.validate(req.body)
    if (result.error) {
        return res.status(404).send({ error: result.error.details });
    }
    usersData[uniqueID] = {
        id: uniqueID,
        ...req.body
    };
    fs.writeFileSync(pathToUsersData, JSON.stringify(usersData));
    res.send({ id: uniqueID })
})

app.put('/users/:id', (req, res) => {
    const usersData = JSON.parse(fs.readFileSync(pathToUsersData, 'utf-8'));
    const userID = +req.params.id;
    const result = userScheme.validate(req.body)
    if (result.error) {
        return res.status(404).send({ error: result.error.details });
    }
    if (usersData[userID]) {
        const { firstName, secondName, age, city } = req.body;
        usersData[userID].firstName = firstName;
        usersData[userID].secondName = secondName;
        usersData[userID].age = age;
        usersData[userID].city = city;
        fs.writeFileSync(pathToUsersData, JSON.stringify(usersData));
        res.send(usersData[userID])
    } else {
        res.status(404);
        res.send({ user: null })
    }
});

app.delete('/users/:id', (req, res) => {
    const userID = +req.params.id;
    const usersData = JSON.parse(fs.readFileSync(pathToUsersData, 'utf-8'));
    if (usersData[userID]) {
        delete usersData[userID];
        fs.writeFileSync(pathToUsersData, JSON.stringify(usersData));
        res.send(usersData[userID])
    } else {
        res.status(404);
        res.send({ user: null })
    }
});

app.listen(3000);

