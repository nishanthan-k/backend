const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const userAuthentication = (req, res, next) => {
  // const userRole = req.query.role;
  
  // userRole !== "admin" ? next() : res.send("Don't use official id for personal check ups")
}

app.post("/kidney-checkup", userAuthentication, (req, res) => {
  console.log(req)
  const kidney = req.body.kidney;
  const kidneyLength = kidney.length;
  console.log(kidney)
  // res.send("You have " + kidneyLength + kidneyLength > 1 ? " kidneys" : "kidney")
  res.send( kidney)
})


// global catches
app.use((err, req, res, next) => {
  res.send("Some error occured in between the process")
})



app.listen(PORT)