import express from "express";
import db from "./config/dbConnect.js";  
import users from "./models/User.js";


db.on("error",console.log.bind(console,"erro de conexão!"))
db.once("open",() => {
  console.log('conexão feita com sucesso');
})

const app = express();

app.use(express.json())


app.get('/',(req,res) =>{

    users.find((err,users) => {
      res.status(200).json(users);
    })
    
})


export default app