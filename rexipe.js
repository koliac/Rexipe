//require('./db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const unirest = require('unirest');
const handlebars = require("handlebars");
const hbs=require("hbs");



const app = express();
//enable passport
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

// enable sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'secrte signing',
    resave: true,
      saveUninitialized: true
};
app.use(session(sessionOptions));


//hbs set up

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//register a custom helper block
//group every n elements togetehr
//This is a online source and great appreciation goes to Tim Robertson
hbs.registerHelper('grouped_each', function(every, context, options) {
    var out = "", subcontext = [], i;
    if (context && context.length > 0) {
        for (i = 0; i < context.length; i++) {
            if (i > 0 && i % every === 0) {
                out += options.fn(subcontext);
                subcontext = [];
            }
            subcontext.push(context[i]);
        }
        out += options.fn(subcontext);
    }
    return out;
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));





//route handling
app.get("/",(req,res)=>{
  res.render("home");

});
app.get("/about",(req,res)=>{
  res.render("about",{layout:"general-layout.hbs"});
});
app.get("/meat-lover",(req,res)=>{
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=beef&limitLicense=true&number=12&ranking=1")
.header("X-Mashape-Key", "BZRGUJ49fPmshPSgJI7hlqToE59Dp1LHZckjsnWmV83L25tYKs")
.header("Accept", "application/json")
.end(function (result) {
  const list = [];

  result.body.forEach((ele)=>{
  list.push({"id":ele.id,"title":ele.title,"image":ele.image});
  });
console.log(list);


  res.render("meat-lover",{layout:"general-layout.hbs","list":list});

});

});
app.get("/admin",(req,res)=>{
  res.render("dashboard",{layout:"general-layout.hbs"});
});

app.listen(3000);
