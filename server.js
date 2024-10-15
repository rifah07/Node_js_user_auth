const express= require('express');
const app = express();
const bodyParser=require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.json({message: "Welcome to Rifah's Practice app!" });
})

let users= []
let lastId= 0

app.post('/users', (req,res) =>{
    const user= req.body
    user.id= ++lastId;
    users.push(user)
    res.status(201).json(user)
})

app.get('/users',(req,res) =>{
    res.json(users)
})


const port= 5000;

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});