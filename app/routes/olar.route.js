module.exports = {
	method: 'GET',
	path: '/olar',
	config: {
	  tags: ['api'],
	  handler: (request, reply) => {
	    reply({ info: 'oi gentche tudo bem' });
	  }
	}
};
