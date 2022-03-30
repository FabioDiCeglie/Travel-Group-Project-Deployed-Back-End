const { Router } = require("express");
const User = require("../models/").user;
const authMiddleware = require("../auth/middleware");
const router = new Router();
const Review = require("../models").review;
const City = require("../models").city;

router.post("/", authMiddleware, async (req, res) => {
  try {
    const userImage = req.user.image;
    const userId = req.user.id;
    const { rating, cityId, description } = req.body;
    const review = await Review.create({
      name: req.user.name,
      rating,
      cityId,
      userId,
      description,
    });
    res.send(review);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Id not found");
    }
    const city = await City.findByPk(id);
    if (!city) {
      return res.status(404).send("City not Found");
    }
    const reviews = await Review.findAll({
      where: { cityId: id },
      include: [User],
    });
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
