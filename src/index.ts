import  { FastifyInstance } from 'fastify'

const fastify= require('fastify')
const server: FastifyInstance = fastify({})


const start = async () => {
    try {
        await server.listen(5000);
        console.log('Server started successfully');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();