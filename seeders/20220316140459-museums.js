"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "museums",
      [
        {
          location: "Fiera Del Levante, Lungomare Starita, 4, Bari, Italy",
          description:
            "The Planetario Sky Skan is a planetarium in Bari in Italy. It facilitates a journey through the stars, full of special effects.",
          priceTicket: 20,
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f1/de/4b/planetario-sky-skan.jpg?w=1200&h=-1&s=1",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 1,
        },
        {
          location: "Governor's Palace",
          description:
            "The function of the National Museum of Eritrea is to promote Eritrean history, both within the country and abroad. It also aims to investigate new archaeological sites, and to explore the country's history. In 1996, Eritrea's central government nominated the following six sites to be considered as UNESCO World Heritage Sites: Adulis, Dahlak Kebir, Matara, Nakfa and Qohaito.",
          priceTicket: 0,
          image:
            "https://momaa.org/wp-content/uploads/2019/10/Asmara_museo_nazionale_ingresso-1024x568.png",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 2,
        },
        {
          location: "Museumstraat 1, 1071 XX Amsterdam",
          description:
            "The Rijksmuseum is the national museum of the Netherlands dedicated to Dutch arts and history and is located in Amsterdam. The museum is located at the Museum Square in the borough Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw.",
          priceTicket: 40,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Rijksmuseum_in_Amsterdam.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("museums", null, {});
  },
};
