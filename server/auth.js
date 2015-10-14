

var keys = require('./keys.js'),
    request = require('request'),
    accounts = 'https://accounts.spotify.com',
    passport = require('passport'),
    SpotifyStrategy = require('passport-spotify').Strategy,
    btoa = require('btoa'),
    User =require('./models/users'),
    mongoose = require('mongoose');

    app.use(passport.initialize());
    app.use(passport.session());

passport.use(new SpotifyStrategy({
    clientID: keys.client_id,
    clientSecret: keys.client_secret,
    callbackURL: keys.callback_uri
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('profile', profile)
    // User.find({ spotifyId: profile.id }).exec(function() {
      User.create({spotifyId: profile.id, username: profile.username}, function (err, user) {
        passport.serializeUser(function(user, done) {
          done(null, user);
        });
        passport.deserializeUser(function(user, done) {
          done(null, user);
        });
      return done(err, user);
    });
  }
));

module.exports = function (app) {

  app.get('/authorize', passport.authenticate('spotify'), function (req, res) {
    // var queryString = '?client_id='+keys.client_id+'&response_type=code&redirect_uri='+keys.callback_uri;

    // res.redirect(accounts+'/authorize/'+queryString);

  });

  app.get('/authorize/callback/', passport.authenticate('spotify', {failureRedirect: '/login'}),
    function (req, res) {
    res.redirect('/');
  });


  // app.get('/auth/heroku', passport.authenticate('heroku', {session: false}));

  // app.get('/auth/heroku/callback',
  //   passport.authenticate('heroku', {successRedirect: '/#/deploy', failureRedirect: '/auth/heroku/fail' })
  // );

  // app.get('/auth/check', function(req, res) {
  //    res.status(200).json(req.isAuthenticated());
  //   })


  // app.get('/logout', function (req, res){
  //   req.logout();
  //   res.redirect('/');
  // })

}
