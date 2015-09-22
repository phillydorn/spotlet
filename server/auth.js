

var keys = require('./keys.js'),
    request = require('request'),
    accounts = 'https://accounts.spotify.com',
    passport = require('passport'),
    SpotifyStrategy = require('passport-spotify').Strategy,
    btoa = require('btoa');


passport.use(new SpotifyStrategy({
    clientID: keys.client_id,
    clientSecret: keys.client_secret,
    callbackURL: keys.callback_uri
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

module.exports = function (app) {

  app.get('/authorize', function (req, res) {
    var queryString = '?client_id='+keys.client_id+'&response_type=code&redirect_uri='+keys.callback_uri;

    res.redirect(accounts+'/authorize/'+queryString);

  });

  app.get('/authorize/callback/', function (req, res) {
    var code = res.req.query.code;
    request({
      method: 'POST',
      url: accounts + '/api/token',
      data: {
        body: {
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: keys.callback2
        }
      },
      headers: {
        Authorization: 'Basic ' + btoa(keys.client_id+':'+keys.client_secret)
      }
    }, function (err, resp, body) {
      console.log('body', resp.body)
    });
    res.sendStatus(200);
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
