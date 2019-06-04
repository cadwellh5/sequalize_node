const express=require('express');
//const exphbs=require('express-handlebars');
const bodyParser=require('body-parser');
const path = require('path')
const app=express();
const Sequelize = require('sequelize');
//const sequelize = new Sequelize('postgres://localhost:5432/codegig');
app.use(bodyParser.urlencoded({extended:false}));
//app.engine('handlebars',exphbs({defaultLayout:'main'}));
//app.set('view engine','handlebars');

//setting static folder
//app.use(express.static(path.join(__dirname,'public')));

//app.get('/',(req,res)=>res.render('index', { layout : 'landing'}));

//app.use('/gigs',require('./routes/gigs'));

//app.use(require('connect').bodyParser());

const PORT =  process.env.port || 6000;
app.listen( PORT ,()=>console.log('server started on port' + PORT ))

const db = new Sequelize('Experion_in', 'postgres', 'devipriyakn', {
  host: 'localhost',
  dialect:  'postgres'
});

db.authenticate()
 .then(()=>console.log("Database connected"))
 .catch(err=>console.log("ERROR:"+err))
