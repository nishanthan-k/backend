const express = require('express')
const app = express()
const PORT = 3000

const zod = require('zod')

app.use(express.json())

const schema = zod.object({
  "email": zod.string().email(),
  "password": zod.string().min(5, {message: "Password should have minimum 5 characters"}).max(10, {message: "Password should have maximum 10 characters"})
})

app.post("/zod", (req, res) => {
  const response = schema.safeParse(req.body);
  console.log(response)
  res.send(response)
})

app.listen(PORT, () => console.log('App is listening'))