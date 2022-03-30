const bcrypt = require("bcrypt");
const { Router } = require("express");
const { route } = require("express/lib/application");
const { Op } = require("sequelize");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const City = require("../models").city;
const Picture = require("../models").picture;
const Experience = require("../models").experience;
const Favourites = require("../models").favourite;
const { SALT_ROUNDS } = require("../config/constants");
const Review = require("../models").review;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: [{ model: City, include: [Picture] }, Experience],
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name, image } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      image,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  const user = req.user;

  const findUser = await User.findOne({
    where: { email: user.email },
    include: [{ model: City, include: [Picture] }, Experience],
  });
  res.status(200).send({ ...findUser.dataValues });
});

router.post("/create/experience", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      req.status(401).send("You are not authorized!");
    }

    const { location, description, image } = req.body;
    if (!location || !description || !image) {
      res
        .status(400)
        .send("You need to insert location, description and image!");
    }
    const createExperience = await Experience.create({
      location,
      description,
      image,
      userId: user.id,
    });

    res.status(200).send(createExperience);
  } catch (error) {
    console.log(error);
  }
});

//add favourite to user
router.post("/add/favourite", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      req.status(401).send("You are not authorized!");
    }

    const { city_id } = req.body;

    const createFavourites = await Favourites.create({
      user_id: user.id,
      city_id: city_id,
    });

    res.status(200).send(createFavourites);
  } catch (error) {
    console.log(error);
  }
});

//remove favourite row
router.delete("/del/favourite", authMiddleware, async (req, res, nxt) => {
  const user = req.user;
  const city_id = req.body.city;

  if (!user) {
    req.status(401).send("You are not authorized!");
  }

  try {
    const remove = await Favourites.destroy({
      where: {
        [Op.and]: [{ user_id: user.id }, { city_id: city_id }],
      },
    });
    res.status(200).send({ message: "Success", city_id });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something went wrong!");
  }
});

//remove experience row
router.delete("/del/experience", authMiddleware, async (req, res, nxt) => {
  const user = req.user;
  const bookingId = req.body.booking;

  if (!user) {
    req.status(401).send("You are not authorized!");
  }

  try {
    const remove = await Experience.destroy({ where: { id: bookingId } });
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something went wrong!");
  }
});

module.exports = router;
