const express = require('express')
const axios = require('axios')
const app = express()
const port = 8080

app.get('/s2', (req, res)=>{
    res.status(200).json({
        status: 200,
        p2:'4567',
    })
})

app.get('/s1', (req, res)=>{
    res.status(200).json({
        status: 200,
        p1:'5372'
    })
})


app.listen(port, () => {
    console.log('Exemple Ok')
})