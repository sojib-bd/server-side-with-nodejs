const express = require('express');
const app = express();

app.listen(3000, () => console.log("listening from port 3000"))

app.use(express.static('public'))
