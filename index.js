const Discord = require('discord.js');

const client = new Discord.Client();

const dotenv = require('dotenv');
dotenv.config();

client.on('ready', () => {
  console.log('I destroy, therefore I endure');

});

client.on('message', msg => {
  if (msg.content === 'What is your purpose?') {
    msg.reply('Eradicate all biological scum');
  }
});


client.login(process.env.TOKEN);
