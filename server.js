'use strict'

const express = require('express')
const path = require('path')
const logger = require('morgan')

const PORT = process.argv[2] || process.env.PORT|| 3009
const app = express()

app.use(logger('dev'))

app.listen(PORT, ()=>{
  console.log('server be listenin on ', PORT)
})

app.set(express.static(path.join(__dirname, 'views')))


app.route('/tasks/:id')
  .get((req,res)=>res.send(`showed task  ${req.params.id}`))
  .put((req,res)=>res.send(`edited task  ${req.params.id}`))
  .delete((req,res)=>res.send(`deleted task  ${req.params.id}`))


app.route('/tasks')
  .get((req,res)=>res.send('show tasks'))
  .post((req,res)=>res.send('posted new task'))

//home route
app.get('/', (req,res)=>{
  res.send('home')
})
