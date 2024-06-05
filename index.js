const express = require ("express"); 
const app = express();

var users=[{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());

//Popular input style for get request is "Query Parameters"
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

// Popular input for Post request , you can send data  in the " body "
//user can add the new kidney
app.post("/" , function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({                     //here giving an input by user and pushing in the array
          healthy: isHealthy
    })
    res.json({
      msg: "Done!"
    })

})

app.listen(3000);    