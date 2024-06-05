const express = require ("express"); 
const app = express();

var users=[{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]

//user can check how many kidneys they have and their health
app.get("/" , function(req , res) {
   

  const john_kidneys = users[0].kidneys;
  const numberofKidneys = john_kidneys.length;
  
  let numofhealthykidneys = 0;
  for (let i=0; i<john_kidneys.length; i++){
     if (john_kidneys[i].healthy){
        numofhealthykidneys = numofhealthykidneys + 1;
     }
  }
  const noOfUnhealthyKidneys = numberofKidneys - numofhealthykidneys ;

  res.json({
    numberofKidneys,
    numofhealthykidneys,
    noOfUnhealthyKidneys

  })
    
})

app.listen(3000);    