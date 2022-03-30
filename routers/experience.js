const { Router } = require("express");
const router = new Router();
const Experience = require("../models/").experience;
const authMiddleWare = require("../auth/middleware");

router.get("/", async (req, res, nxt) => {
  try {
    const response = await Experience.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
