const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const axios = require('axios');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const express = require('express');
const ApiData = require('./data.json');
// replace the value below with the Telegram token you receive from @BotFather
const token = '894515938:AAFDsWwG4yDla0X-wQBIyJs1Ivg6Lr14H_8';
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
// Matches "/echo [whatever]"

// console.log(ApiData.toString())

let pp = 0;

bot.onText(/\/start/, function (msg, match) {           
    const chatId = msg.chat.id;
    localStorage.setItem('chatId', chatId)
});

bot.onText(/\/course/, (msg, match) => {

  const chatId = msg.chat.id;

 axios.post('http://foodee.uz/api/auth/admin/login', {"username": "admin", "password": "admin"})
          .then(response => {
             console.log("token", response.data.token);
             bot.sendMessage(chatId, response.data.token)

             localStorage.setItem('token', response.data.token);
          })
          .catch(error => {
            console.log(error)
         })

  });


  getJoke();
  this.interval = setInterval(() => {
     getJoke();
  }, 5000);



// const pp = ApiData.pp;

function getJoke() { 

    const api = 'http://foodee.uz/api/deliveries';
    // const token = localStorage.getItem('token');
    axios.get(api, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`} })
      .then(function (response) {
        const fs = require('fs') 


        let = data.length;

        // console.log(response.data.length)

        // let data = `{"pp": ${JSON.stringify(response.data)}}`;
        
        //   fs.writeFile('data.json', data, (err) => { 
                
        //       // In case of a error throw err. 
        //       if (err) throw err; 
        //   }) 

        // pp.push(response.data.length);
        smth(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
}

const fs = require('fs') 

function smth(data){
  // fs.readFile('data.txt', (err, txt) => { 
      // if (err) throw err;
      // const num = txt.toString()
          if(pp) {
              if(data.length !== pp) {
                  console.log(JSON.stringify(data.length))
                  bot.sendMessage(localStorage.getItem('chatId'), JSON.stringify(data.sort((a, b) => a.id - b.id).reverse()[0]))
              }
          }
  // })
}


