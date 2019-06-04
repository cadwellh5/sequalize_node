const express=require('express');
const router=express.Router();
const Sequelize = require('sequelize');

const db = new Sequelize('Experion_in', 'postgres', 'devipriyakn', {
  host: 'localhost',
  dialect:  'postgres'
});
const addemp = require('../Models/addemp');


router.get('/',(req,res)=>addemp.findAll()
          .then(vacancy=>{
	         res.render('vacancy',{
				 vacancy:vacancy
			 });
                    })
           .catch(err=>console.log(err)));
//display add form
router.get('/addvacancy',(req,res)=>res.render('add'));


//to add
router.post('/addvacancy',(req,res)=>{
 // console.log(req)

   const {PrimarySkills,Experience,EndDate,Vacancies,JobDescriptionLink,status}=req.body;
        //insert
    addemp.create(
   {
    PrimarySkills,Experience,EndDate,Vacancies,JobDescriptionLink,status
     })
     .then(gig=>res.redirect('/vacancies'))
     .catch(err=>console.log(err));
  
        
        
    });
          

module.exports=router;
