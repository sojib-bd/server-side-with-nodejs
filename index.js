const express = require('express');
const app = express();
const Datastore = require('nedb');


app.use(express.static('public'))
app.use(express.json())

const database = new Datastore('database.db');

database.loadDatabase();
database.insert({ name: "sojib" })
app.post('/api', (req, res) => {
    console.log('I got request from the client side')
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data)

    res.json({
        status: 'success',
        timestamp: timestamp,
        latitude: data.lat,
        longitude: data.lon
    })




})

app.listen(3000, () => console.log("listening from port 3000"))  
