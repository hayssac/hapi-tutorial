const frisby = require('frisby');

frisby.create('Verficiando o ROOT da App')
  .get('http://localhost:8080')
  .expectStatus(200)
  .expectJSON({
    info:'api exemplo',
    versao: 1
  })
.toss();

frisby.create('Verificando a rota /olar')
  .get('http://localhost:8080/olar')
  .expectStatus(200)
  .expectJSON({
    info: 'oi gentche tudo bem'
  })
.toss();

frisby.create('Verficiando o ROOT da App')
  .get('http://localhost:8080/estado')
  .expectStatus(200)
  .expectJSON({
    estado: 'online'
  })
.toss();
/* O SERVIDOR PRECISA FICAR ONLINE KEK */
