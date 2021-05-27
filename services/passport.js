const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongooes = require('mongoose');
const keys = require('../config/keys');

const User = mongooes.model('users');

passport.serializeUser((user, done) => {
  // this user.id will come from the mongodb database named _id
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // we already have a record with the give profile ID
          done(null, existingUser);
        } else {
          // We don't have a user record with this ID, make a new record.
          new User({ googleId: profile.id })
            .save()
            .then((newUser) => done(null, newUser));
        }
      });
    }
  )
);
