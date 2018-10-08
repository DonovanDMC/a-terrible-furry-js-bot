const Discord = require('discord.js');
const fox = new Discord.Client();
const { prefix, token } = require('./config.json'); // aka fakeconfig.json :v


fox.on('ready', () => {
    console.log("Can i go back to bed now??");
}); 

fox.on('message', msg => {
    if (msg.content === `${prefix}ping`) {
        msg.channel.send(`N-nice of you to check on me ${msg.author.username}, eheh..`);
    }
    

fox.login(token);
