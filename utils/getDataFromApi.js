const axios = require("axios");
require("dotenv").config();

const getRestaurants = async (lat, lng) => {
  try {
    const restaurantsResponse = await axios.get(
      "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
      {
        params: {
          latitude: lat,
          longitude: lng,
          limit: "20",
          currency: "USD",
          distance: "2",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "02533ee3e6mshe54857d795b43abp1ddea5jsnb9b73dfa75d8", //process.env.API_KEY,
        },
      }
    );
    console.log("what is rest", restaurantsResponse);
    const filteredRestaurants = restaurantsResponse.data.data.map(
      (restaurant) => {
        const {
          name,
          num_reviews,
          photo,
          location_string,
          awards,
          rating,
          price,
          web_url,
        } = restaurant;
        return {
          name,
          num_reviews,
          photo: photo,
          location_string,
          awards,
          rating,
          price,
          web_url,
        };
      }
    );
    return filteredRestaurants;
  } catch (error) {
    return error;
  }
};

const getAttractions = async (lat, lng) => {
  try {
    const attractionResponse = await axios.get(
      "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng",
      {
        params: {
          longitude: lng,
          latitude: lat,
          limit: "20",
          lunit: "km",
          currency: "USD",
          lang: "en_US",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "02533ee3e6mshe54857d795b43abp1ddea5jsnb9b73dfa75d8", //process.env.API_KEY,
        },
      }
    );
    //console.log("what is attraction response", attractionResponse.data.data);
    const filteredAttracttion = attractionResponse.data.data.map(
      (attraction) => {
        const {
          name,
          location_string,
          photo,
          web_url,
          num_reviews,
          description,
        } = attraction;
        return {
          name,
          location_string,
          image: photo,
          web_url,
          num_reviews,
          description,
        };
      }
    );
    //console.log("what is filtered attraction", filteredAttracttion);
    return filteredAttracttion;
  } catch (error) {
    return error;
  }
};
const getHoltels = async (lat, lng) => {
  try {
    const hotlesResponse = await axios.get(
      "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng",
      {
        params: {
          latitude: lat,
          longitude: lng,
          hotel_class: "1,2,3",
          limit: "20",
          currency: "USD",
          lang: "en_US",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "02533ee3e6mshe54857d795b43abp1ddea5jsnb9b73dfa75d8", //process.env.API_KEY,
        },
      }
    );
    //console.log("what is hotles response", hotlesResponse);
    const filteredHotels = hotlesResponse.data.data.map((hotel) => {
      const {
        name,
        num_reviews,
        location_string,
        photo,
        price,
        awards,
        rating,
      } = hotel;
      return {
        name,
        num_reviews,
        location_string,
        photo: photo,
        price,
        awards,
        rating,
      };
    });
    //console.log("what is hotels", filteredHotels);
    return filteredHotels;
  } catch (error) {
    return error;
  }
};

const getWeatherData = async (lat, lng) => {
  try {
    const response = await axios.get(
      "https://yahoo-weather5.p.rapidapi.com/weather",
      {
        params: { lat: lat, long: lng, format: "json", u: "f" },
        headers: {
          "x-rapidapi-key":
            "9dc87257f7msh8f54a859f46cac6p1fe03ejsnc632b0856976",
          "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
        },
      }
    );
    const { forecasts } = response.data;
    return { forecasts };
  } catch (error) {
    return error;
  }
};

module.exports = { getAttractions, getHoltels, getRestaurants, getWeatherData };
