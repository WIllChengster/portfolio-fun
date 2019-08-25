const express = require('express');
const app = express();
const PORT = process.env.port || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
}) 

app.get('/hello', (req, res) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log('app is listening to port: ', PORT)
})