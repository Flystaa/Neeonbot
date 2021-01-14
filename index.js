//------Wichtige Sachen-------

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on("ready", () =>{
    console.log(`Status funktioniert boy`);
    client.user.setActivity('!neon | best bot 2021', { type: 'WATCHING' });
    client.user.setActivity('!neon | 16.923 Servers', { type: 'LISTENING' });
 });

 client.login('');

 //------Nachichten-------

client.on('message', message => {
	if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
});

client.on('message', message => {
	if (message.content === '!moi') {
        // moi
        message.channel.send('MOI');
    }
});

client.on('message', message => {
	if (message.content === '!moimoi') {
        // moi
        message.channel.send('MEGA MOI');
    }
});

client.on('message', message => {
	if (message.content === '!instamoi') {
        // moi
        message.channel.send('MOI https://www.instagram.com/selfmadeneeon/');
    }
});

client.on('message', message => {
	if (message.content === '!neon') {
        message.channel.send('Folge Neeon auf Twitch, hier ein Link: https://www.twitch.tv/selfmadeneeon');
    }
});

client.on('message', message => {
    if (message.content === '!getbot') {
        message.channel.send('~Beeeep~ Initaliziere, Discord.link, Link: https://discord.com/api/oauth2/authorize?client_id=798994891660328971&permissions=8&scope=bot ~Booooop~');
    }
});

client.on('message', message => {
	if (message.content === '!react') {
        message.react('😄');
    }
});

client.on('message', message => {
    if (message.content === '!neeonbot') {
        message.react('799064339066781707');
    }
});
//-------Embed--------------
//-------Exmample--------------

client.on('message', message => {
    if (message.content === '!embed') {
        message.channel.send(exampleEmbed);
    }
});
const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#8099ff')
    .setTitle('Some title')
    .setURL('https://neon.com')
    .setAuthor('Some Name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.com')
    .addFields(
        { name: 'Regular field Title', value: 'Some value here', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/w5TFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRm.png');

//-------Embeds--------------

//--Neon Bot--
client.on('message', message => {
    if (message.content === '!credits') {
        message.channel.send(neeonbot);
    }
});
const neeonbot = new Discord.MessageEmbed()
    .setColor('#8099ff')
    .setTitle('Neeonbot!')
    .setURL('https://neon.com')
    .setAuthor('Neeonbot v1', 'https://i.ibb.co/CHSXr5D/Neeonbot.png', 'https://discord.com')
    .addFields(
        { name: 'Made by Flystaa, CC 2021', value: 'Port to you by TwentyDollarStudios', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'In Help of SelfMadeNeeon', value: 'Executive Developer', inline: true }, 
    )
    .setTimestamp()
    .setFooter('Creative Commons 2021', 'https://i.ibb.co/CHSXr5D/Neeonbot.png');







//-------Join Sachen--------
