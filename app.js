const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

// replace the value below with the Telegram token you receive from @BotFather
const token = '894515938:AAFDsWwG4yDla0X-wQBIyJs1Ivg6Lr14H_8';
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
  
// Matches "/echo [whatever]"
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
      bot.sendMessage(id, md, {parse_mode: 'Markdown'});
    })
  })
});
 