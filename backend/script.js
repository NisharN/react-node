const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const fruits=[]
app.get("/fruits",(req,res)=>{
    res.send(`fruit name is ${req.query.name}`);
    fruits.push(req.query.name);
    console.log(fruits);

})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})