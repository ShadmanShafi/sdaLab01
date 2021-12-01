const express = require('express');
const app = express()

app.get('/',(req,res)=> {
    res.send('Welcome to Azure.')
}) 

app.listen(1337, ()=> {
    console.log('Server is listening on port 1337....')
})