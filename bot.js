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
  console.log('FUCKING SALTY');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '#ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

client.on('message', message => {
    if (message.content === '#help') {
      message.channel.send('**SatanicBot Version 0.1.0**')
      message.channel.send(' ')
      message.channel.send("**Test**")
      message.channel.send('#ping - Sends A Pong Message')
      message.channel.send('**Fun**')
      message.channel.send('#hello - Sends Hello Comrade')
      message.channel.send('**Contact/Support**')
      message.channel.send('#official - Sends Links To Invite And Official Discord Server')
  }
});

client.on('message', message=> {
    if (message.content === '#log') {
        log = !log;     
            
     } else if (log === true) {
         console.log(chalk.green(message.guild.name) + chalk.grey(":") + logg(message.channel.name) + chalk.grey(":") + chalk.blue(message.author.tag) + chalk.grey(":") + chalk.yellow(message.content))
    }
});

client.on('message', message=> {
   if (message.content === '#logon') {
    client.user.setStatus('online');
   }
});

client.on('message', message=> {
   if (message.content === '#logoff') {
    client.user.setStatus('invisible');
   }
});

client.on('message', message=> {
    if (message.content === '#official') {
        message.channel.send('**OfficialServer: https://goo.gl/ueccYS**')
        message.channel.send('**OfficialInvite: https://goo.gl/nTJBXo**')
   }
});

client.on('message', message=> {
    if (message.content === '#hello') {
        message.channel.send('Hello Comrade')
    }
});
//Login your bot
client.login(token)

