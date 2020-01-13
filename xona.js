const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const axios = require('axios');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');


var Data = require('./kartalar.json');
var lastMsg = null;

// replace the value below with the Telegram token you receive from @BotFather
const token = '1062533016:AAGWak--xRWcTLdvhlf_FTWiL_dyuLdnRv0';
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
// Matches "/echo [whatever]"

bot.onText(/\/start/, function (msg, match) {
    const chatId = msg.chat.id;
});
        

bot.onText(/\/musor/, (msg, match) => {

  const chatId = msg.chat.id;

  const chatID = msg.chat.id;
  const photo = `1.jpg`;
  const photo2 = `2.jpg`;
  bot.sendPhoto(chatID, photo, {
    caption: "musor"
  });
  bot.sendPhoto(chatID, photo2, {
    caption: "musor"
  });

})

bot.onText(/\/ovqat/, (msg, match) => {

  const chatId = msg.chat.id;

  const chatID = msg.chat.id;
  const photo = `3.jpg`;
  bot.sendPhoto(chatID, photo, {
    caption: "ovqat"
  });

}) 

bot.onText(/\/non/, (msg, match) => {

  const chatId = msg.chat.id;

  const chatID = msg.chat.id;
  const photo = `4.jpg`;
  bot.sendPhoto(chatID, photo, {
    caption: "non"
  });

})


bot.onText(/\/kartalar/, (msg, match) => {
 
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'karta raqamalri', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Azizbek',
            callback_data: 'Azizbek👑'  
          },
          {
            text: 'Makhmudjon',
            callback_data: 'Makhmudjon'  
          },
          {
            text: 'Akbarshox',
            callback_data: 'Akbarshox🤣'  
          },
          {
            text: 'Khumoyun',
            callback_data: 'Khumoyun'  
          }
        ]
      ]
    },
    parse_mode: 'html'
  });

  bot.on('callback_query', query => {
    const chatID = msg.chat.id;
      const data = Data;
      const result = data.filter(item => item.name == query.data)[0];
      let md = "Name: <b>" + result.name + "</b>\nCard holder number: <pre>" + result.number + "</pre>";
      
      if (lastMsg != md) {
        lastMsg = md; 
        bot.sendMessage(chatID, md, {parse_mode : "HTML"});
      }
  })
})

bot.onText(/\/course/, (msg, match) => {
 
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'akalar shu yerdan kurslani korselar boladi meni Akelar tuzgan, tugadi)))', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '＄ USD',
            callback_data: 'USD'  
          },
          {
            text: '€ EUR',
            callback_data: 'EUR'  
          },
          {
            text: '₽ RUB',
            callback_data: 'RUB'  
          }
        ]
      ]
    }


  });

  bot.on('callback_query', query => {
    const id = query.message.chat.id
    

    request('http://cbu.uz/ru/arkhiv-kursov-valyut/json/', function(err, response, body) {
      const data = JSON.parse(body);
      const result = data.filter(item => item.Ccy == query.data)[0];
      let md = `
        ${result.Ccy} => ${result.CcyNm_UZ}
          Date: _${result.Date}_
          Pokupka: _${result.Rate}_
      `;
      if (lastMsg != md) {
        lastMsg = md; 
        bot.sendMessage(id, md, {parse_mode : "Markdown"});
      }
    })
  })
});
