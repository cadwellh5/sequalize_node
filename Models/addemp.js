const Sequelize=require('sequelize');
const db = new Sequelize('Experion_in', 'postgres', 'devipriyakn', {
  host: 'localhost',
  dialect:  'postgres'
});
const Gig =db.define('Vacancies', {

PrimarySkills:{
    type:Sequelize.STRING

},
Experience:
{
type:Sequelize.STRING
},
EndDate:
{
    type:Sequelize.DATE
},
Vacancies:
{
    type:Sequelize.STRING
},
JobDescriptionLink:
{
    type:Sequelize.STRING
},
status:{
    type:Sequelize.STRING
}


});
module.exports=addemp;