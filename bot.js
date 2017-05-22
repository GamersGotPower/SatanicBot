// Import the discord.js module
const Discord = require('discord.js');
var chalk = require('chalk');
var error = chalk.bold.red;
var log = false;
var logg = chalk.bold.cyan;
// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'MzE1MjQ0NzA0NTkxNTExNTUy.DAQ7qA.qG5jnpNNMDkpcCswctOg3PNYGnw';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '=ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

client.on('message', message => {
    if (message.content === '=help') {
      message.channel.send('**Test**');
      message.channel.send('=ping - Sends A Pong Message')
  }
});

client.on('message', message=> {
    if (message.content === '=log') {
        log = !log;     
            
     } else if (log === true) {
         console.log(logg(message.createdAt) + chalk.grey(":") + chalk.blue(message.author.tag) + chalk.gray(": ") + chalk.yellow(message.content))
    }
});

client.on('message', message=> {
   if (message.content === '=logon') {
    client.user.setStatus('online');
   }
});

client.on('message', message=> {
   if (message.content === '=logoff') {
    client.user.setStatus('invisible');
   }
});


//Login your bot
client.login(token)

