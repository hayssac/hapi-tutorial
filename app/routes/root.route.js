module.exports = {
    method: 'GET',
    path:'/',
    config: {
      tags: ['api'],
      handler: (request, reply) => {
        reply({ info:'api exemplo', 'versao': 1 });
	}
  }
};
