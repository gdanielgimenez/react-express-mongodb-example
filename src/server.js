const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./todo');
//express app
const app = express();
// connect to database
mongoose.connect('mongodb://localhost:27017/testReact', {useNewUrlParser: true})
.then((result)=> console.log('connected to dataBase'))
.catch((err)=> console.log(err));
//middleware
app.use(express.urlencoded ({extended: true}));
//listen for requests
app.listen(5000, ()=> console.log('listening for requests on port 5000'));
//response to requests GET
app.get('/api', (req,res)=>{
    Todo.find()
    .then((result)=>{
         res.json(result)
    })
    .catch((err)=>console.log(err));
            
 }); 
 //POST requests
 app.post('/api', (req,res)=>{
     const todo = new Todo (req.body);
     todo.save()
     .then((result)=>{
        res.redirect('/index.html')
     })
     .catch((err)=>{
         console.log(err);
     });
 });
 
 //DELETE requests
 app.delete('/:_id',(req,res)=>{
    const ide = req.url;
    const id= ide.slice(1);
     Todo.findByIdAndDelete(id)
     .then(result =>{
         console.log(result)
     })
     .catch(err =>console.log(err));
 });