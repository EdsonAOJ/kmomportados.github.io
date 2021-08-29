const express = require('express');
const ejs = require('ejs');
const path = require('path');


const server = express();


server
  .use(express.static('public'))

  //ultilizar o body da require
  .use(express.urlencoded({ extended: true }))

  //configurar tamplete engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  // rotas da aplicação
  .get('/', (req, res) => {
    res.render('index');
  })




  const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log('servidor rodando');
});
