module.exports = async (fastify) => {
	await fastify.register(require("@fastify/cors"), {
		origin: "*",
	});
};
