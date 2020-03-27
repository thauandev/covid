const express = require('express')
const mongoose = require('mongoose')
const request = require('request');
const cheerio = require('cheerio');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
   'mongodb://localhost:27017/covid', 
   { useNewUrlParser: true, useFindAndModify: true}
  );

require('./src/models/Covid');  

const Covid = mongoose.model('Covid');

//Iniciando a requisição para efetuar o crawler
request('https://www.worldometers.info/coronavirus/', function(err, res, body) {
  if (err) console.log('Erro: ' + err);

  // Variavel para pegar as informações da página
  let $ = cheerio.load(body);
  
  let list = [];
  
// Função para armzenar os dados desejados da página html
  $('.maincounter-number').each(function() {
    const information = $(this).find('span').text().trim();
    

    list.push(information);

    
// Adicionando os dados no banco Mongo
    app.get('/', (req, res)=> {
    
      Covid.create({ 
        cases: list[0],
        deaths: list[1],
        recovered: list[2] 
        
      })
    
      return res.send('testando api')
    });
    

     
    
     
  })

})



app.listen(3001);