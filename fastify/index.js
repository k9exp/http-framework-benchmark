const fastify = require('fastify')({
    logger: false
});

fastify.get('/', (request, reply) => {
  reply.send("ABCD");
})

console.log("Listening on http://127.0.0.1:4000")
fastify.listen({ port: 4000 })
