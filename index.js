
const express = require ('express') ;
var cors = require('cors')
const app = express() ;
bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(cors())
const item = {
    juice: 'lemon',
    iceCream: 'poolar' ,
    chips : 'lays' ,
    cooldrinks : 'sprite'
};
const user = ['shakib' , 'rakib' , 'jakib' , 'makib']
// const price = {
//     juicePrice: 20,
//     iceCreamPrice: 40 ,
//     chipsPrice : 35 ,
   
// }


app.get('/' , (req,res) => res.send(item))
// app.get('/items/price' , (req, res) => res.send(price))
app.get('/users/:id' , (req ,res) =>{
   const id = req.params.id ;
   const name = user[id] ;
   res.send({id , name})

})
// post 

app.post('/post' , (req ,res) => {
    console.log('data recieve',req.body);
    const user = req.body ;
    user.id  = 2 ;
    res.send(user)
})

app.listen(51100, () => console.log('thank you set for 51100 server url '))