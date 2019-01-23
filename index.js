const express = require("express")
const app = express()
const port = 3002
const environment = process.env.NODE_ENV || "development";
const knexconfig = require("./knexfile.js")[environment];
const db = require("knex")(knexconfig);

const sql = db("notecards").toString()
console.log(sql)

app.get("/", (req, res) => {
  db.select("*").from("methods")
  .then((rows) => {res.send(rows)})
  .then(console.log("It works"))
  .catch((err) => {console.log(err)})
})

app.listen(port, () => console.log(`Porty on port ${port}!`))