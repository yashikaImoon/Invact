let express = require('express');
let app = express();

 let port = 3000;
app.listen(port,()=>{
  console.log("Server is running on port ", + port);
})

app.get("/github-profile",(req,res)=>{
  let username= req.query.username;
  res.send(generateProfileUrl(username));
});

function generateProfileUrl(username){
  return "https://github.com/"+ username;
}

app.get("/certificate",(req,res)=>{
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  res.send(generateCertificate(firstName,lastName,courseName));
});

function generateCertificate(firstName,lastName,courseName){
  return "This certification is awarded to " +firstName+ " " + lastName +  " for completing the course " + courseName;
}

app.get("/grade",(req,res)=>{
  let maths = parseFloat(req.query.maths);
  let english = parseFloat(req.query.english);
  let science = parseFloat(req.query.science);
  res.send(calulateGrade(maths,english,science));
});

function calulateGrade(maths,english,science){
  let gradeInPercentage = parseInt(((maths + english + science) / 300 ) * 100);
  return ("Your grade in percentage is "+gradeInPercentage+"%")
}

app.get("/split-bill",(req,res)=>{
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);
  res.send(splitBill(billAmount,numberOfFriends));
});

function splitBill(billAmount,numberOfFriends){
  let splitAmount = billAmount / numberOfFriends;
  return ("Each friend owes Rs. " + splitAmount + " against the bill")
}

app.get("/monthly-salary",(req,res)=>{
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseInt(req.query.hourlyWage);
  res.send(calculateSalary(totalHours,hourlyWage));
});

function calculateSalary(totalHours,hourlyWage){
  let monthlySalary = hourlyWage * totalHours;
  return "Result: Your monthly salary is ₹" + monthlySalary;
}