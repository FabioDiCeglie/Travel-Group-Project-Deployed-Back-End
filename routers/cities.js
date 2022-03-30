const { Router } = require("express");
const Museum = require("../models/").museum;
const Activity = require("../models/").activity;
const router = new Router();
const {
  getAttractions,
  getHoltels,
  getRestaurants,
  getWeatherData,
} = require("../utils/getDataFromApi");
const City = require("../models/").city;
const Picture = require("../models/").picture;
const Favourite = require("../models/").favourite;
const authMiddleWare = require("../auth/middleware");
const Review = require("../models").review;
const User = require("../models").user;

router.get("/random", async (req, res, nxt) => {
  const numberOfCities = await City.count().then((c) => c);
  const randomNumber = Math.floor(Math.random() * numberOfCities) + 1;
  const randomCity = await City.findByPk(randomNumber, {
    include: [Picture, Review],
  });

  res.status(200).send(randomCity);
});

router.get("/details/:id", async (req, res, nxt) => {
  const city_id = req.params.id;
  const response = await City.findByPk(city_id, {
    include: [Picture, Museum, Activity, { model: Review, include: [User] }],
  });
  res.status(200).send(response);
});

router.get("/favourite", authMiddleWare, async (req, res, nxt) => {
  const user_id = req.user.id;
  const response = await Favourite.findAll({
    where: {
      user_id: user_id,
    },
    attributes: ["city_id"],
  });
  res.status(200).json(response);
});

router.get("/favourite/:id", authMiddleWare, async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Id not found");
    }
    const users = await Favourite.findAll({
      where: {
        city_id: parseInt(id),
      },
      include: [User],
    });
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//TODO: router to get the number of users who favourited a city
router.get("/favourite/:id/count", async (req, res, nxt) => {
  const city_id = req.params.id;

  try {
    const numberOfFavourite = await Favourite.count({
      where: {
        city_id: city_id,
      },
    });
    res.status(200).send({ numberOfFavourite });
  } catch (error) {
    console.log(error.message);
    nxt(error);
  }
});

// router to get Hotels using the api made by Mak (Mind-blowing!)
router.get("/services/hotels", async (req, res, nxt) => {
  const { lat, lng } = req.query;
  try {
    const hotels = await getHoltels(lat, lng);
    res.status(200).json(hotels);
  } catch (error) {
    console.log(error.message);
    nxt(error);
  }
});

// router to get Restaurants using the api made by Mak (Mind-blowing!)
router.get("/services/restaurants", async (req, res, nxt) => {
  const { lat, lng } = req.query;
  try {
    const restaurants = await getRestaurants(lat, lng);
    console.log("restaurant", restaurants);
    res.status(200).json(restaurants);
  } catch (error) {
    console.log(error.message);
    nxt(error);
  }
});
// router to get attractions using the api made by Mak (Mind-blowing!)
router.get("/services/attractions", async (req, res, nxt) => {
  const { lat, lng } = req.query;
  try {
    const attractions = await getAttractions(lat, lng);
    res.status(200).json(attractions);
  } catch (error) {
    console.log(error.message);
    nxt(error);
  }
});

router.get("/weather", async (req, res, next) => {
  try {
    const { lat, lng } = req.query;
    const response = await getWeatherData(lat, lng);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
