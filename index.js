const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'OTM5NjU0NzI0OTM5MDQyODY3.Yf7_qA.ndZBjhKypQQqZAsdDyz5qYRZYyI'; // Token goes here.
 
client.login(token); // login the bot with your token.
client.once("ready", function () {
	console.log("Ready for for bot bzminer");
}); 

client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.

// >-------------------------------------------------- < 
    if(message.content.toLowerCase() === 'test hello')
    message.reply("Hello");
// >-------------------------------------------------- <             
    if(message.content.toLowerCase() === 'alpha')
    message.reply("the ticker is ALPH, not ALEPH");
// >-------------------------------------------------- <            
    if(message.content.toLowerCase() === 'version')
    message.reply("v7.2.5, v7.2.6b1");
// >-------------------------------------------------- <           
    if(message.content.toLowerCase() === 'bot')
    message.reply("Hi, Bot is active!");
// >-------------------------------------------------- <      
    if(message.content.toLowerCase() === 'oc')
    message.reply("https://hashrate.no/");
// >------------------------------------------------- <
    if(message.content.toLowerCase() === 'bzminer')
    message.channel.send("✅ BzMiner - Advanced Crypto Miner. https://www.bzminer.com ✅");

    if(message.content.toLowerCase() === '!beta')
    message.channel.send("```cd /tmp; wget https://www.bzminer.com/downloads/bzminer_v7.2.6b2_linux.tar.gz; tar -xvf bzminer_v7.2.6b2_linux.tar.gz; miner stop; cp bzminer /hive/miners/bzminer/7.2.5/; miner start```");
    
    if(message.content.toLowerCase() === '!hive')
    message.channel.send("```cd /tmp; wget https://bzminer.com/downloads/bzminer_v7.2.5_linux.tar.gz; tar -xvf bzminer_v7.2.5_linux.tar.gz; miner stop; cp bzminer /hive/miners/bzminer/7.2.4/; miner start```");

    if(message.content.toLowerCase() === 'website')
    message.channel.send("If you have a problem or you want a guide on how to use bzminer, feel free to visit the website that the manager has built especially for you! - https://bzminer.com ");

});