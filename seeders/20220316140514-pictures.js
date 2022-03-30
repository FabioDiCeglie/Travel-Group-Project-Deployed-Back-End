"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pictures",
      [
        {
          image:
            "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/ports/bari-italy/overview/polignano-a-mare%20village-rocks-sunrise-bari-apulia.jpg?$750x320$",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 1,
        },
        {
          image:
            "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2019/01/Bari-In-January-OG.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 1,
        },
        {
          image:
            "https://qph.fs.quoracdn.net/main-qimg-0967bd5690f51f40572a22d0cfa661cd-lq",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 1,
        },
        {
          image:
            "https://media.istockphoto.com/photos/colorful-south-italy-village-in-puglia-in-the-town-of-polignano-picture-id1033101684?k=20&m=1033101684&s=612x612&w=0&h=0F_mjQXnGTnoL-w9HXbyqB-SF1Drk7YCJTs1A9lCkKg=",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 1,
        },
        {
          image:
            "https://uniglobephillipstravel.com/content/1391701775_original.jpeg-20210730143831.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 1,
        },
        {
          image:
            "https://i.guim.co.uk/img/media/e660b13d9d83b88b71746684a30ab9a930b60982/381_31_1817_1090/master/1817.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7f7d7bd1bd40eaa7ce84983fa8800d8d",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 2,
        },
        {
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1b/01/70/cathedral.jpg?w=1200&h=-1&s=1",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 2,
        },
        {
          image: "http://reviewc.nl/wp-content/uploads/asmara1928.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 2,
        },
        {
          image:
            "https://cdn.britannica.com/19/195819-050-0201D7BF/Asmara-Eritrea.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 2,
        },
        {
          image:
            "https://media.gettyimages.com/photos/asmara-eritrea-church-of-our-lady-of-the-rosary-picture-id1297866617?s=612x612",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 2,
        },
        {
          image:
            "https://www.tripsavvy.com/thmb/xJ1-kvBsuglBvNpiAhvcgiKZUuQ=/1885x1414/smart/filters:no_upscale()/iguazu-falls--iguazu-national-park--brazil-argentina-paraguay-border--1171077586-0c0af92a39e24d179bfa236d3248b2db.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 3,
        },
        {
          image:
            "https://i0.wp.com/nitdb.org/wp-content/uploads/2021/08/iguazu-falls-0.jpg?fit=1920%2C1272&ssl=1",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 3,
        },
        {
          image:
            "https://images.panoramix.getaway.nl/media/guide/0001/27/ac90adc84b3e96e1bee58e6184d33cdfe226f43c.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 3,
        },
        {
          image:
            "https://reisexpert.b-cdn.net/wp-content/uploads/2016/08/Iguaza-Falls-Brazilie-ST.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 3,
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sunset_over_Iguazu2.jpg/250px-Sunset_over_Iguazu2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 3,
        },
        {
          image: "https://media.timeout.com/images/105504583/750/422/image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 4,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUBJARRoInA5ZIWvff9ZOxsg_EaPcvHxMLA&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 4,
        },
        {
          image:
            "https://images.musement.com/cover/0002/15/amsterdam_header-114429.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 4,
        },
        {
          image:
            "https://www.amsterdam.nl/publish/pages/987083/63677-spiegelgracht-01-16dec2021-e-v-eis1940.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 4,
        },
        {
          image:
            "https://travel.thewom.it/pictures/2019/04/01/amsterdam-cosa-vedere.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 4,
        },
        {
          image:
            "https://xplorebraziladventures.com/wp-content/uploads/2019/09/bonito-1-1024x681.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 5,
        },
        {
          image:
            "https://images.panoramix.getaway.nl/media/guide/0001/80/014f031df03f3fdf61ea978ca4e9c9790596f7a0.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 5,
        },
        {
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b8/70/bc/nossa-vita-interna-iluminada.jpg?w=400&h=300&s=1",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 5,
        },
        {
          image:
            "https://reisexpert.b-cdn.net/wp-content/uploads/2020/06/Bonito-Grotto-of-the-Blue-Lake-Brazilie.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 5,
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Abismo_Anhumas%2C_Bonito%2C_MS.JPG/1200px-Abismo_Anhumas%2C_Bonito%2C_MS.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 5,
        },
        {
          image:
            "https://media.istockphoto.com/photos/mt-fuji-and-tokyo-skyline-picture-id904453184?k=20&m=904453184&s=612x612&w=0&h=COFq7OBD_h8N84G6TcibIU7wGKzxVoxNcNqUa50f4ZM=",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 6,
        },
        {
          image:
            "https://www.hydro.com/globalassets/08-about-hydro/hydro-worldwide/hydro_in_japan_tokyo.jpg?quality=85&width=470&height=264&mode=crop&center=0.5,0.5",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 6,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnp9mnadtc53ue1RIt1O-WiY0UxMKTd3lWIg&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 6,
        },
        {
          image:
            "https://www.waar-en-wanneer.nl/site/images/illustration/oualler/-tokyo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 6,
        },
        {
          image:
            "https://cms.finnair.com/resource/blob/720476/0511bb2bc91953d4ef3506d00933819b/tokyo-main-data.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 6,
        },
        {
          image:
            "https://media.istockphoto.com/photos/aerial-view-of-london-and-the-tower-bridge-picture-id1265900812?k=20&m=1265900812&s=170667a&w=0&h=fqVHPg6PIok9Sm2_9RaTAxwxzGE6CtWNFBKSaV1t9J4=",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 7,
        },
        {
          image:
            "https://www.thetrainline.com/content/vul/hero-images/city/london/2x.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 7,
        },
        {
          image:
            "https://www.visitbritain.com/sites/default/files/consumer_components_enhanced/header_image/mobile/vb34141644-london-skyline.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 7,
        },
        {
          image:
            "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 7,
        },
        {
          image:
            "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 7,
        },
        {
          image:
            "https://ics-seville.org/wp-content/uploads/2021/10/eiffel-tower-in-paris-151-medium.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 8,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4dqxI_b5mibdJdHG8cf3dBuafGUmIqA9fQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 8,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPlF5CqftzUcyGPgW4Mo21QoqZHYu25k2FA&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 8,
        },
        {
          image:
            "https://a.cdn-hotels.com/gdcs/production38/d1419/a60c7ed4-cc5d-478e-98fa-0c4210ed2908.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 8,
        },
        {
          image:
            "https://kkhotels-ce53.kxcdn.com/wp-content/uploads/2020/01/Paris-City-Eiffeltower-View.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 8,
        },
        {
          image:
            "https://images.squarespace-cdn.com/content/v1/569e766e69492e9dd5373ef6/1583506514632-YSOAGKQCO2SBOOP1RGWK/_ABX1613-alex.jpg?format=1000w",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 9,
        },
        {
          image:
            "https://travelinspires.org/wp-content/uploads/2020/02/Lisbon-Portugal-Girls-Weekend-Destination-Alfama-District.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 9,
        },
        {
          image:
            "https://www.seabourn.com/content/dam/sbn/inventory-assets/ports/LIS/lisbon-rooftops-alfama-136150069.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 9,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kDSGdqT5or25VXN48P_YP10R6wxxx_tteg&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 9,
        },
        {
          image:
            "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Ff36bcb78-b8bb-11eb-88a0-2b24633e3d76.jpg?crop=2250%2C1500%2C0%2C0",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 9,
        },
        {
          image:
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3b/51/37.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 10,
        },
        {
          image:
            "https://s1.travix.com/no/north-america-united-states-new-york-times-square-lights-medium.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 10,
        },
        {
          image:
            "https://www.travelvalley.nl/uploads/headers/new-york-shoppen-2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 10,
        },
        {
          image:
            "https://lonedrifters.nl/wp-content/uploads/2019/10/leuke-wijken-in-New-York-1-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 10,
        },
        {
          image:
            "https://s1.travix.com/no/north-america-new-york-times-square-medium.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: 10,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("pictures", null, {});
  },
};
