var express = require("express");
var router = express.Router();
const User = require("../../models/users/user");
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  let user;
  try {
    user = await User.findOne({ email });
    if (user) {
      const passwordCheck = await user.validatePassword(password);
      if (passwordCheck) {
        const token = jwt.sign(password, process.env.TOKEN);
        res.setHeader("Auth-token", token);
        res.send(token);
      }
    } else {
      res.send("No user found");
    }
  } catch (err) {
    if (err) throw err;
  }
});
// POST request
router.post(
  "/auth",
  // [
  //   // username must be an email
  //   check("email").isEmail(),
  //   check("username").trim().isEmpty(),

  //   // password must be at least 5 chars long
  //   check("password")
  //     .isLength({ min: 6 })
  //     .equals(check("confirmPassword").isLength({ min: 6 })),
  // ],
  async (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return req.flash("error", errors.array());
    // }

    const { email, username, password, confirmPassword } = req.body;

    let user;
    try {
      user = new User({
        username,
        email,
        password,
      });
      await user.save();
      res.status(200).send("OK");
    } catch {
      if (user == null) {
        throw new Error("Null user");
      }
    }
  }
);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

module.exports = router;
