"use strict";

const Hapi = require("@hapi/hapi");
const axios = require("axios");

const init = async () => {
  var swapidata = [];

  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: true
    }
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return 'Server running';
    },
  });

  server.route({
    method: "GET",
    path: "/getData",
    handler: (request, h) => {
      return swapidata;
    },
  });

  server.route({
    method: ['GET', 'POST'],
    path: '/{any*}',
    handler: (request, reply) => {
      const accept = request.raw.req.headers.accept
      console.log("404")
      if (accept && accept.match(/json/)) {
        return reply(Boom.notFound('This resource isn’t available.'))
      }
      reply.view('404').code(404)
    }
  })

  const getData = () => {
    let cpt = 0;
    let urlArray = [
      "https://swapi.dev/api/films/?page=1",
      "https://swapi.dev/api/people/?page=1",
      "https://swapi.dev/api/planets/?page=1",
      "https://swapi.dev/api/species/?page=1",
      "https://swapi.dev/api/starships/?page=1",
      "https://swapi.dev/api/vehicles/?page=1",
    ];

    while (cpt < 6) {
      getType(urlArray[cpt], cpt);
      cpt++;
    }
  }

  const getType = async (type, cpt) => {
    swapidata[cpt] = [];
    var request = type;

    while (request !== null) {
      await axios.get(request)
        .then(function (response) {
          request = response["data"]["next"];
          response['data']['results'].map(current =>
            swapidata[cpt].push(current))

        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  };

  await server.start();
  getData();
  console.log("Server running : ", server.info);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
