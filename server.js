const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const {engine} = require('express-handlebars');
const router = require('./router/router')


app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));

//*************************************************** */

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//*************************************************** */
app.use(router);



app.listen(3000,(err)=>{
    if (err) {
        console.error(err.message)
    } else {
        console.log("http://localhost:3000")
    }
})

