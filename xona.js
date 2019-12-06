const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const axios = require('axios');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');


var Data = require('./kartalar.json');


// replace the value below with the Telegram token you receive from @BotFather
const token = '1040511526:AAGwUViQakRsGqQOYrd4R-mfMj1wEy0nE78';
 
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

bot.onText(/\/ovqat/, (msg, match) => {

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
            callback_data: 'Azizbek'  
          },
          {
            text: 'Makhmudjon',
            callback_data: 'Makhmudjon'  
          },
          {
            text: 'Akbarshox',
            callback_data: 'Akbarshox'  
          },
          {
            text: 'Khumoyun',
            callback_data: 'Khumoyun'  
          }
        ]
      ]
    }


  });

  bot.on('callback_query', query => {
    const id = query.message.chat.id
    
    // request('Data', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    // });

        // request('http://cbu.uz/ru/arkhiv-kursov-valyut/json/', function(err, response, body) {
          const data = Data;
          const result = data.filter(item => item.name == query.data)[0];
          console.log(result)
          let md = `
              Date: _${result.name}_
              Pokupka: _${result.number}_
          `;
          
          // function copyToClipboard(element) {
          //   var $temp = $("<input>");
          //   $("body").append($temp);
          //   $temp.val($(element).text()).select();
          //   document.execCommand("copy");
          //   $temp.remove();
          // }
          // copyToClipboard(result.number)

          bot.sendMessage(id, md, {parse_mode: 'Markdown'});
        })
      })
    // })
  // })






// const Telegraf = require('telegraf')

// const bot = new Telegraf('1040511526:AAGwUViQakRsGqQOYrd4R-mfMj1wEy0nE78')
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('🤣'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.hears('Qalesan', (ctx) => ctx.reply('yahshi aka'))
// bot.hears('Akalaringa salom aytibqoy', (ctx) => ctx.reply('akalar Assalomu alaykoooom'))
// bot.hears('ajaboo', (ctx) => ctx.reply('sokinmen aka'))
// bot.hears('ajaboo', (ctx) => ctx.reply('sokinmen aka'))
// bot.launch()
