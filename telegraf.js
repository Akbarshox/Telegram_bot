const Telegraf = require('telegraf')

const bot = new Telegraf('1040511526:AAGwUViQakRsGqQOYrd4R-mfMj1wEy0nE78')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('Qalesan', (ctx) => ctx.reply('yahshi aka'))
bot.hears('Akalaringa salom aytibqoy toychoq', (ctx) => ctx.reply('akalar Assalomu alaykoooom'))
bot.hears('ajaboo', (ctx) => ctx.reply('sokinmen aka'))
bot.launch()