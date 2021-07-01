const express = require('express')
const axios = require('axios')
const { response } = require('express')
const app = express()
const port = 5372
let port1

app.get('/', (req, res)=>{
    res.status(200).json({
        status: 200,
        message:'pong'
    })

    setTimeout(function(){
        axios.get('http://localhost:'+port1)
        .then(response => {
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error);
        })
    },500)

})



app.listen(port, () => {
    axios.get('http://localhost:8080/s2')
    .then(response=>{
        port1 = response.data.p2;
    })

})