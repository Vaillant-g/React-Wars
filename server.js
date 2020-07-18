'use strict';

const Hapi = require('@hapi/hapi');
const axios = require('axios');

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/getmovies',
        handler: (request, h) => {

            return 'Movies';
        }
    });

    const getData = () => {
        axios.get('http://swapi.dev/api/people/?page=2').then(response => {
            console.log(response.data);
        })
    }

    await server.start();
    getData();
    console.log('Server running : ', server.info);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

