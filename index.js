const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 0, name: 'Ali Ahmed', phone: '01619141476', address: 'Bandura' },
    { id: 1, name: 'Zulekha Ahmed', phone: '01619141476', address: 'Bikrompur' },
    { id: 2, name: 'Zubair', phone: '01619141476', address: 'Dhaka' },
    { id: 3, name: 'Parul Akther', phone: '01619141476', address: 'Kishorgonj' },
    { id: 4, name: 'Fatima Tuz Zahra', phone: '01619141476', address: 'Sreemangal' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;

    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }

    else {
        res.send(users);
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// Dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits/mangoes', (req, res) => {
    res.send(["mohon bag", "fazli", "himsagor"])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Best mango in Bangladesh')
})

app.listen(port, () => {
    console.log('this is port ', port);
})