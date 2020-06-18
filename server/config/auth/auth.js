import express from "express";
const router = express.Router();
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

router.get("/auth/google/callback", passport.authenticate("google"), function (
  req,
  res
) {
  res.status(200).send("Awesome boi");
});

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy({}, function (accessToken, refreshToken, profile, done) {
    done(null, profile);
  })
);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/failutre" }),
  function (req, res) {
    res.redirect("/autheticated");
  }
);
