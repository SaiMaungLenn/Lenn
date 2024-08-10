const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('7305001795:AAGdyzsr7kHER8nJ78g-6tTKNccqldS6zzA', { polling: true });

// List of spam keywords
const spamKeywords = ['start', 't.me', 'www', 'http'];

bot.on('message', (msg) => {
  if (spamKeywords.some(keyword => msg.text.toLowerCase().includes(keyword))) {
    bot.deleteMessage(msg.chat.id, msg.message_id);
  }
});
