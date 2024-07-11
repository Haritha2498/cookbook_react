const express = require ('express');
const session = require ('express-session')
const { mongoose } = require("mongoose");

// const cookieParser=require("cookie-parser")
// app.use(cookieParser())

const app = express();
const cors = require("cors");

app.use(
    cors({ 
      origin: "http://localhost:5173",
    })
  );

const pageroute = require('./routes/pageroutes')

const loginroute = require('./routes/loginroutes')

const apiroute = require('./routes/apiroutes')


mongoose.connect(
    "mongodb://localhost:27017/cookbookreactDB"
)

const database=mongoose.connection;
database.on("error",(error)=>
{
    console.log(error)
});
database.once("connected",()=>
{
    console.log("database connected");
})


app.use(session({
    secret: '1',
    resave: false,
    saveUninitialized: false
}))

app.use('/', pageroute, loginroute, apiroute);

app.listen(3000, () => {
    console.log("The server is starting at port 3000")
})