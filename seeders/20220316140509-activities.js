"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "activities",
      [
        {
          location: "Lungomare, Bari, Italy",
          description:
            "Bari is a coastal resort, therefore it stands to reason that it should have a fantastic promenade, and it does – The Lungomare Nazario Sauro.",
          image:
            "https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Lungomare-Nazario-Sauro.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 1,
        },
        {
          location: "Cattedrale di Asmara",
          description:
            "Admire the complex Romanesque and Gothic facade of Cattedrale di Asmara. Built in 1922 by the Italian colonial government, this brick and stone edifice features a 52 m (170 ft) belfry clock tower and a number of ornate pinnacles. Step inside to see the ornately decorated interior with arches and chandeliers, and the play of light coming from round side-windows and the main cupola. The building serves as the seat of the Eritrean Archeparchy of Asmara.",
          image:
            "https://s.inspirockcdn.com/ds10/photos/Eritrea/2/cattedrale-di-asmara-415218507.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 2,
        },
        {
          location: "Iguassu Falls Day Tour ",
          description:
            "See the mighty Iguassu Falls from every angle of the Argentinian side on a full-day tour from Puerto Iguazú. Take a walk through the mist at the base of the falls, then follow the upper path for amazing panoramic views. And bring your wet-weather gear for an amazing boat ride under the falls, which was named one of the New Seven Wonders of Nature in 2011. Add on a jungle-truck ride through Iguazú National Park to enjoy even more amazing views, flora and fauna.",
          image:
            "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/6e/db/c3.jpg?auto=compress&crop=center&fit=crop&format=auto&h=832&w=1920",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 3,
        },
        {
          location: "Foodhallen",
          description:
            "Explore the city’s thriving street food scene at this super-trendy gastro palazzo. What began life as an old tram depot is now Oud-West’s very own quirky culinary destination, with more than 30 food stalls and bars. Seriously, if you can’t find something you want to eat here, there is no hope.",
          image:
            "https://www.amsterdamtips.com/news/wp-content/uploads/2014/11/foodhallen-amsterdam.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 4,
        },
        {
          location: "Estancia Mimosa",
          description:
            "Estância Mimosa is a private nature reserve, located just north of Bonito. This admission ticket lets you explore the ranch on a guided tour, following the scenic forest trails to caves, lookout points, and eight different waterfalls. Stop along the way to swim in the natural pools beneath the falls, admire views of the Bodoquena Mountains, then enjoy a delicious lunch at the Estancia’s restaurant.",
          image:
            "https://www.bonitoway.com.br/public/posts/blog_transicao_estancia_mimosa_bonito_ms_a.png",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("activities", null, {});
  },
};
