var express = require("express");
var router = express.Router();
users = [{ username: "Pranish" }];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

router.post("/", (req, res) => {
  console.log(req.body);
  users.push(req.body);
});
module.exports = router;
