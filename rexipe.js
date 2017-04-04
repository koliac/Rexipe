//require('./db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

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


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
  res.render("home");

});

app.listen(3000);
