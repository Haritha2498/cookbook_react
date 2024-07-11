const express = require('express');

const path = require('path');

const loginroute = express.Router();
const session = require('express-session');

loginroute.use(express.json())

loginroute.use(express.urlencoded({extended:false}))

loginroute.use(express.static(path.join(__dirname, '../../public')))

// let  cookdb= {};
loginroute.use(session({
  secret: '1',
  resave: false,
  saveUninitialized: false
}))




const cookdb=require('../models/schema')
const recipedb=require('../models/recipe')


loginroute.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/static', 'signup.html'))
})

loginroute.post('/signup', async(req, res) => {

    const {username, email, password} = req.body;
    const user= {username, email, password} 
    const newuser={username, email, password, favourites: [] } 
    // console.log(req.body)
    try{
        const exist=await cookdb.findOne({username:username})
        if(exist){
            res.send("User already exists. Click login")
        }else{
            // cookdb[username]= {email: email, password: password, favourites: []}
            const data=await cookdb.create(newuser)
            req.session.username = username;
            req.session.favourites = data.favourites;
        
        }
    
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }

    
})

// loginroute.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/static', 'login.html'))
// })
let  session_user=""

loginroute.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // console.log(username,'',password)
    try {
      const user = await cookdb.findOne({ username: username });
      console.log(user);
      // console.log(user.password);


      if (!user) {
        return res.send("Invalid username or password. Please signup first");
      }
      else
      if (user.password === password) { 
        req.session.username = username;
        req.session.favourites = user.favourites;
        session_user=req.session.username
        console.log(session_user,"session user")
        // return res.redirect('/home');
        res.json({status: true});
      } else {
        return res.send("Invalid username or password. Please signup first");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });



loginroute.post('/addfavo', async(req,res) => {
    const {recipetitle,color} = req.body;
    // console.log('recipetitle')
    console.log(recipetitle,"",color)
    const username = req.session.username;
    console.log(username)
    // const data=recipetitle;

try {
    // const user = await cookdb.findOne({ username: username });
    const user = await cookdb.findOne({ username: session_user });
    console.log(user)
    if (!user) {
      return res.status(404).send('User not found');
    }
      if(color=='grey'){
        // console.log(recipetitle)
        user.favourites.push({title:recipetitle});
        await user.save();
        req.session.favourites = user.favourites; 
        console.log("added")
        res.json({ message: 'Recipe added to favourites' });
        
    
    

      }
      else{
        // console.log('yellow')
        user.favourites = user.favourites.filter(favorite => favorite.title !== recipetitle);
        await user.save();
        req.session.favourites = user.favourites;
        console.log("removed")
        res.json({ message: 'Recipe removed from favourites' });
      }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

loginroute.get('/favorite/fav', async (req, res) => {
    const username =session_user;
    console.log(username)
    // if (!username) {
    //   return res.status(401).send('User not logged in');
    // }
  
    try {
      const user = await cookdb.findOne({ username: username });
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      res.json(user.favourites);

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });





loginroute.get('/logout', (req, res) => {
    req.session.destroy();
    console.log("session destroyed")
    res.json({status: true});
})


loginroute.get('/getrecipe/:core',async(req,res)=>
{
  try{
    const core=req.params.core;
    // console.log(core)
    const recipes=await recipedb.find({core:core})
    // console.log(recipes);
    res.json(recipes);


  }
   catch(error){
    console.log(error,"eror in getrecipe")
   }
})

loginroute.get('/uniquerecipe/:title',async(req,res)=>
  {
    try{
      const title=req.params.title;
      // console.log(title,"inside unique recipe")
      const recipes=await recipedb.findOne({title:title})
      // console.log("recipe inside unique recipe");
      res.json(recipes);
  
  
    }
     catch(error){
      console.log(error,"eror in uniquerecipe")
     }
  })


module.exports = loginroute