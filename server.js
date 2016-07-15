'use strict'

const env           = process.env.NODE_ENV || 'development';
const DEV           = env==='development';
const dotenv        = (DEV) ? require('dotenv').config() : undefined;
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser')

const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

const taskRoutes  = require('./routes/tasks');

// set up some logging

//this says: if we're in dev, use dev, otherwise use common.  Dev gives you every little bit, common returns just a line
app.use( logger( DEV? 'dev':'common'));

app.use(bodyParser.json());


app.use( '/tasks', taskRoutes );
app.use(express.static(path.join(__dirname, 'dist')));

// Let's go!
app.listen(PORT , ()=>
  console.log(`server here! listening on`, PORT )
)


