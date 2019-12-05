const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const axios = require('axios');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

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
