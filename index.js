const express = require('express');
const app = express();


app.use(express.static('public'))
app.use(express.json())

const clientData = [];

app.post('/api', (req, res) => {
    console.log('I got request from the client side')
    console.log(req.body);
    const data = req.body;
    clientData.push(data)
    res.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    })


    console.log(clientData)

})

app.listen(3000, () => console.log("listening from port 3000"))  
