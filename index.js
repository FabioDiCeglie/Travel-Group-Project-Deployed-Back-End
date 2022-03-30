const express = require("express");
const cors = require("cors");
// Auth middleware: our own code. Checks for the existence of a token in a header called `authentication`.
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const citiesRouter = require("./routers/cities");
const reviewsRouter = require("./routers/reviews");
const experienceRouter = require("./routers/experience");
const { PORT } = require("./config/constants");

// Create an express app
const app = express();

app.use(cors());

// express.json():be able to read request bodies of JSON requests a.k.a. body-parser
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

/**
 * Routes
 *
 * Define your routes and attach our routers here (now that middlewares are configured)
 */

app.use("/auth", authRouter);

// Router used to pick data about cities
app.use("/cities", citiesRouter);
// Router used to pick data about reviews
app.use("/reviews", reviewsRouter);
// Router used to pick data about experience
app.use("/experience", experienceRouter);

// POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user;
  // don't send back the password hash
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
