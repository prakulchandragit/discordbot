const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (message.content === `${prefix}ping`) {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
    }
        else if (message.content === `${prefix}beep`) {
            message.channel.send('Boop.');
        }
        else if (message.content === `${prefix}server`) {
            message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}
            \n This server was created at: ${message.guild.createdAt}
            \n This server region is ${message.guild.region}
            \n This server's owner is ${message.guild.owner}`);
        }
        else if (command === 'kick') {
            if (!message.mentions.users.size) {
                return message.reply('you need to tag a user in order to kick them!');
            }
    
            const taggedUser = message.mentions.users.first();
    
            message.channel.send(`You wanted to kick: ${taggedUser.username}`);
        }
        
        
});
 client.login('ODYyNjEwMjc3MzQ2MTgxMTIy.YOa2bA.ow7HZB6Vcwc_dTlqMx-ARYU9tYk');