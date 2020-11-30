var express = require('express');
var app = express();
var port = process.env.PORT || 9999;
var bodParser = require('body-parser');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient
var mongourl = "mongodb://localhost:27017";
var cors = require('cors');
var db;

app.use(cors());
app.use(bodParser.urlencoded({extended:true}));
app.use(bodParser.json())

app.get('/',(req,res)=>{
    res.send("it is working")
})
app.get(`/mylogin/login`,(req,res) => {
    db.collection('login').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})
// menu api for all id
app.get('/menu/:id',(req,res) => {
    console.log(req.params.id)
    var query = {_id:req.params.id}
    db.collection('menu').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
});
// item api for all id
app.get('/item/:id',(req,res) => {
    console.log(req.params.id)
    var query = {itemid:req.params.id}
    db.collection('item').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
});
// menu api for id and itemtype
app.get('/menu',(req,res) => {
    var query = {};
    if(req.query.id){
        query={_id:req.query.id}
    }
    else if(req.query.itemtype){
        query={mealid:req.query.itemtype}
    }
    else{
        query={}
    }
    db.collection('menu').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})
// item api for id and itemtype
app.get('/item',(req,res) => {
    var query = {};
    if(req.query.id && req.query.mealid){
        query={itemid:req.query.id,mealid:req.query.mealid}
    }
    else if(req.query.id){
        query={itemid:req.query.id}
        console.log(query)
    }
    else if(req.query.mealid){
        query={mealid:req.query.mealid}
    }
    else if (req.query.itemid){
        query={itemid:req.query.itemid}
    }
    else{
        query={}
    }
    db.collection('item').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})
app.post('/add',(req,res) => {
    db.collection('item').insertOne(req.body,(err,result) => {
        if(err){
            throw err
        }else{
            res.send('Data Added')
        }
    })
});

app.put('/update',(req,res) => {
    db.collection('item').update({itemid:req.body.itemid},
        {
            $set:{
                
                name:req.body.name,
                price:req.body.price
            }
        },(err,result) => {
            if(err) throw err;
            res.send('data updated')
        })
})
app.delete('/delete',(req,res) => {
    db.collection('item').remove({itemid:req.body.itemid},(err,result) => {
        if(err) throw err;
        res.send('data deleted')
    })
})

MongoClient.connect(mongourl,(err,connection) => {
    if(err) throw err;
    db = connection.db('prototype');
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})

// http://localhost:9999/restaurent?city=1&mealtype=1
//http://localhost:9999/menu?id=1&itemtype=2

