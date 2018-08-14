const passport = require('passport');
const request = require('request');
const LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

/**
 * JWT Strategy
 */
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SESSION_SECRET;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

  User.findOne({ email: jwt_payload.email.toLowerCase() }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { msg: `Email ${email} not found.` });
    }
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { msg: 'Invalid email or password.' });
    });
  });
}));

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (passport.authenticate('jwt', { session: false })) {
    return next();
  }
  return res.json({ status: 401, msg: 'Invalid authentication token.' });
};

/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
  const provider = req.path.split('/').slice(-1)[0];
  const token = req.user.tokens.find(token => token.kind === provider);
  if (token) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
};
