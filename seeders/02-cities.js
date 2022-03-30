"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cities",
      [
        {
          lng: 16.866667,
          lat: 41.125278,
          location: "Bari,Italy",
          description:
            "Bari is the capital city of the Metropolitan City of Bari and of the Apulia region, on the Adriatic Sea, southern Italy. It is the second most important economic centre of mainland Southern Italy after Naples.The city has a redeveloped airport, Karol Wojtyła Airport, with connections to several European cities.",
          restriction: "No coronavirus restrictions at all.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lng: 38.93184,
          lat: 15.33805,
          location: "Asmara",
          description:
            " Asmera, is the capital and most populous city of Eritrea, in the country's Central Region.Asmara is known to be an exceptionally modern city, not only because of its architecture, but Asmara also had more traffic lights than Rome did when the city was being built.The city incorporates many features of a planned city.",
          restriction: "No coronavirus restrictions at all.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lng: -54.436718,
          lat: -25.69523,
          location: "Iguazu falls",
          description:
            " The falls divide the river into the upper and lower Iguazu. The Iguazu River rises near the heart of the city of Curitiba. For most of its course, the river flows through Brazil; however, most of the falls are on the Argentine side. Below its confluence with the San Antonio River, the Iguazu River forms the border between Argentina and Brazil. Aerolíneas Argentinas has direct flights from Buenos Aires to Iguazu International Airport. Azul, GOL, and LATAM Brasil offer services from main Brazilian cities to Foz do Iguaçu.",
          restriction: "No corona in Brasil.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lng: 4.89707,
          lat: 52.377956,
          location: "Amsterdam",
          description:
            " The Port of Amsterdam is the fifth largest in Europe. The KLM hub and Amsterdam’s main airport, Schiphol, is the Netherlands’ busiest airport as well as the third busiest in Europe and 11th busiest airport in the world. The Dutch capital is considered one of the most multicultural cities in the world, with at least 177 nationalities represented.",
          restriction: "Wear mask in public transport.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lng: -56.48194,
          lat: -21.12111,
          location: "Bonito",
          description:
            " There are more than 30 tours available in and around the Bonito area. The majority of the tours are based around exploring the ecology and natural environment of the area. Almost all of the tours need to be booked through an official tourist agency in the town and require an accredited guide, although this will be organised at the time of booking.",
          restriction: "No corona in Brasil.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lng: 139.839478,
          lat: 35.652832,
          location: "Tokyo",
          description:
            " The city has hosted multiple international events, including the 1964 Summer Olympics and Paralympics, the postponed 2020 Summer Olympics and Paralympics and three G7 Summits (1979, 1986, and 1993). Tokyo is an international center of research and development and is represented by several major universities, notably the University of Tokyo.",
          restriction: "No coronavirus restrictions.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lng: -0.118092,
          lat: 51.509865,
          location: "London",
          description:
            " London is the 'greenest city' in Europe with 35,000 acres of public parks, woodlands and gardens. The largest parks in the central area of London are three of the eight Royal Parks, namely Hyde Park and its neighbour Kensington Gardens in the west, and Regent's Park to the north. Hyde Park in particular is popular for sports and sometimes hosts open-air concerts. Regent's Park contains London Zoo",
          restriction: "No coronavirus restrictions.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lng: 2.349014,
          lat: 48.864716,
          location: "Paris",
          description:
            " Paris has been one of the world's major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts. Paris is a major railway, highway, and air-transport hub served by two international airports.",
          restriction: "No coronavirus restrictions.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lng: -9.142685,
          lat: 38.736946,
          location: "Lisbon",
          description:
            " Lisbon is recognised as an alpha-level global city because of its importance in finance, commerce, media, entertainment, arts, international trade, education and tourism. Lisbon is one of the oldest cities in the world, and the second-oldest European capital city (after Athens), predating other modern European capitals by centuries",
          restriction: "No coronavirus restrictions.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lng: -75.0,
          lat: 43.0,
          location: "New York",
          description:
            " New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, dining, art, fashion, and sports, and is the most photographed city in the world.",
          restriction: "No coronavirus restrictions.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
