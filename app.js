const express = require('express');
const { listenerCount } = require('process');
const app = express()

app.get('/',(req,res)=> {
    res.send('Welcome Azure')
}) 

app.listen(8080, ()=> {
    console.log('Server is listening on port 8080....')
})