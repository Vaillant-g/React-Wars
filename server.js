"use strict";

const Hapi = require("@hapi/hapi");
const axios = require("axios");

const init = async () => {
  var data;
  var swapidata = [];

  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  });

  server.route({
    method: "GET",
    path: "/getData",
    handler: (request, h) => {
      return swapidata;
    },
  });

  const getData2 = () => {
    let urlArray = [
      "https://swapi.dev/api/films/",
      "https://swapi.dev/api/people/",
      "https://swapi.dev/api/planets/",
      "https://swapi.dev/api/species/",
      "https://swapi.dev/api/starships/",
      "https://swapi.dev/api/vehicles/",
    ];
    let promiseArray = urlArray.map((url) => axios.get(url));
    axios.all(promiseArray).then(function (results) {
      swapidata.push(results[0]["data"]["results"]);
      swapidata.push(results[1]["data"]["results"]);
      swapidata.push(results[2]["data"]["results"]);
      swapidata.push(results[3]["data"]["results"]);
      swapidata.push(results[4]["data"]["results"]);
      swapidata.push(results[5]["data"]["results"]);
      data = results[0]["data"];
    });
  };

  await server.start();
  getData2();
  console.log("Server running : ", server.info);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
