import express from "express";
import db from "./config/dbConnect.js";  
import users from "./models/User.js";
import routes from "./routes/index.js";
import route from "./routes/index.js";


db.on("error",console.log.bind(console,"erro de conexão!"))
db.once("open",() => {
  console.log('conexão feita com sucesso');
})

const app = express();

app.use(express.json())

routes(app);


export default app