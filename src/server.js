const express = require('express');
//express app
const app = express();
//listen for requests
app.listen(5000, ()=> console.log('listening for requests on port 5000'));
//response to get requests
app.get('/api', (req,res)=>{
    res.sendFile('./users.json', {root: __dirname} );
});
