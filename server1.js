const express = require('express')
const axios = require('axios')
const { response } = require('express')
const app = express()
const port = 4567
let port2

app.get('/', (req, res)=>{
    res.status(200).json({
        status: 200,
        message:'ping'
    })

    setTimeout(function(){
        axios.get('http://localhost:'+port2)
        .then(response => {
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error);
        })
    },500)
})



app.listen(port, () => {
    axios.get('http://localhost:8080/s1')
    .then(response => {
        port2 = response.data.p1;
        console.log(port2);
        axios.get('http://localhost:'+port2)
        .then(response =>{
            console.log(response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    })
    .catch(error =>{
        console.log(error);
    })

})