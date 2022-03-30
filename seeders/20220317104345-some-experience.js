"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "experiences",
      [
        {
          location: "Amsterdam",
          description: "It is a beautiful place, and I like to smoke joint!",
          image:
            "https://tourscanner.com/blog/wp-content/uploads/2019/08/best-day-trips-from-Amsterdam.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("experiences", null, {});
  },
};
