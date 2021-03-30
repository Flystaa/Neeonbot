// CC 2021 TwentyDollarStudios, DiscordJS
// Writing, Flysta#0110 + Selfmadeneeon#0631
// Everything can be removed, brand us only if you want to
// Currently this is an only German Version, if you like to Translate this and other Codes,
// You can easly send us your Code on Discord. 
// Offical Neeon Discord: https://discord.gg/YBA94wMS2X
// Offical Neeon Website: https://neeonbot.eu
// Offical DiscordJS Website: https://discord.js.org/
// Offical DiscordJS Guide (if you want to find something?): https://discordjs.guide/
// You can find us on Github here: https://github.com/Flystaa/Neeonbot
// Rate us on Top.gg: https://top.gg/bot/798994891660328971#/
// Have fun with this Bot!

//------Wichtige Sachen-------

// DiscordJS 
// Dieser Core ist der Hauptteil des Bots, ohne diesen Core wird der Bot nicht funktionieren
const Discord = require('discord.js');

// DiscordJS Client
const client = new Discord.Client();

// Long (für den Defualt Channel)
const Long = require("long")

// ytdl Client
// ytdl habe ich mal Installiert
// Keine Ahnung was es ist, vielleicht braucht man es irgendwann
const ytdl = require('ytdl-core');

// Express
const express = require('express');

const path = require('path');

// Canvas Client
// Canvas ist ein Photomanipulationsteil 
// Muss nicht sein, irgendwann wird es uns aber helfen
const Canvas = require('canvas');

const ctx = require('ctx');

const Message = require('js-message');

// fetch Client
// Für OAuth2
const fetch = require('node-fetch');

const btoa = require('btoa');

const Obj = require("object-collection");

let data = new Obj();

new Discord.Guild(client, data)


const dotenv = require('dotenv').config()

// Request Modul für OAuth2
const request = require('request');

// Bot Sucessfull started
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

// Sobald der Trigger "Ready" ausgibt wird "Status funktioniert boy" ausgegeben.
// Dies bestätigt das der Bot die Aktivitäten "Watching" und "Listening" mit angegeben Daten ausgibt
// eventuell hier ne async funktion die alle 15 sekunden den status ändert?
 client.on("ready", () => {
    client.user.setActivity(`!neeonhelp | ${client.guilds.cache.size} Servern`, { type: "STREAMING", url: "https://www.twitch.tv/selfmadeneeon" })
    client.user.setActivity(`!neeonhelp | ${client.guilds.cache.size} Servern`, { type: "WATCHING" })
    client.user.setActivity(`!neeonhelp | ${client.guilds.cache.size} Servern`, { type: "LISTENING" })
})

// Ich versuche gerade rauszufinden was dieser Code bringt
// Wenn alles richtig läuft sollte er jedes mal wenn jemand gekickt wird 
// Einen informieren das jemand gekickt wird
// Muss wohll noch dran gearbeitet werden
client.on('guildMemberRemove', member => {
    console.log('${member.user.tag} hat den Server verlassen');
});

 // Client login Token. Du kannst diesen Token auf https://discord.com/developers/applications/ bekommen
 // Ohne einen angegeben Token kann sich der Bot nicht verbinden.
 client.login('Token Here');



//------Nachichten-Example-------

// Ping Poing Example
// Dieses Example ist ein standart von DiscordJS
client.on('message', message => {
	if (message.content === '!ping') {
        // sendet Pong wenn !ping geschrieben wird
        message.channel.send(`Dauer der Antwort: ${sent.createdTimestamp - message.createdTimestamp}ms`);
    }
});

//------Nachrichten--------------

client.on('message', message => {
	if (message.content === '!moi') {
        message.channel.send('MOI');
    }
});

client.on('message', message => {
	if (message.content === '!moimoi') {
        message.channel.send('MEGA MOI');
    }
});

client.on('message', message => {
	if (message.content === '!instamoi') {
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

// Dieser Befehl wird später eventuell ersetzt mit einem selbsteinrichtenden Befehl
// Man sieht, ich versuche mich vor dem einrichten eines selbsteinrichtenden Befehls zu drücken...
// Naja weiter gehts
client.on('message', message => {
    if (message.content === '!silentdeath') {
        message.channel.send('Ehrenstreamer! Schaut mal vorbei: https://www.twitch.tv/xsilentdeathx777');
    }
});

// Dieser Befehl löscht die angegeben Nachrichten
// In diesem Falle löscht er 100 Nachrichten
// MMaximalwert der löschbaren Nachrichten ist 100
client.on("message", message => {
    if(message.content === "!clearchat") {
      message.channel.bulkDelete(100)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
   message.channel.send("Es wurden die letzten 100 Nachrichten entfernt.");
    }
})

//---------Reactions-Example-------

// Methode 1
// Dieses Example bewirkt das der Bot eine reaction auf eine Nachricht abgibt.
// Es gibt mehrere arten wie man dieses schreiben kann.
// Der zusammenhang ist hierbei irrelevant.
// In diesem Example von DiscordJS wird !react geschrieben und der Bot antwortet mit dem angegeben Emoji. 
client.on('message', message => {
	if (message.content === '!react') {
        message.react('😄');
    }
});

// In dieser Methode ist nicht wie in der oberen ein Emoji angegeben sondern ein Code
// Diesen Code kann man bekommen indem man vor das gewollte CUSTOM Emoji ein \ eingibt. 
// Beispiel: \:Huhn:
// Discord sendet dann hinter das Emoji den dazugehörigen Code!
// Wichtig ist das der Bot über das Emoji verfügen muss!
// Methode 2
client.on('message', message => {
    if (message.content === '!neeonbot') {
        message.react('799384775642710077');
    }
});

// Dies ist keine wikliche Methode, da sie sich nur wiederholt.
// Wir schreiben hier einfach mehrere Versionen von Reaktionen ein
// Somit sendet der Bot nicht nur eine Reaktion sondern mehrere raus
// Methode 2.1
client.on('message', message => {
    if (message.content === '!neeonbotreact') {
        message.react('799384775642710077');
        message.react('😄');
    }
});

//---------Reactions-------






//-------Embed--------------
//-------Exmample--------------

// Der Trigger für die Nachricht, dieser bewirkt das, dass Embed gesendet wird.
// Der Trigger benötigt den Embed Namen, diesen findet man im Embed
client.on('message', message => {
    if (message.content === '!embed') {
        message.channel.send(exampleEmbed);
    }
});

// Das Enbed welches gesendet wird.
// Der Name des Embed steht nach const, in diesem beispiel "exampleEmbed" 
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

// Credits
// Danke fürs Mitwirken!
client.on('message', message => {
    if (message.content === '!credits') {
        message.channel.send(neeonbot);
    }
});
const neeonbot = new Discord.MessageEmbed()
    .setColor('#8099ff')
    .setTitle('Neeon')
    .setURL('https://neeonbot.tk')
    .addFields(
        { name: 'Made by Flystaa, CC 2021', value: 'Port to you by TwentyDollarStudios', inline: false },
        { name: 'In Help of SelfMadeNeeon', value: 'Executive Developer', inline: false }, 
    )
    .setTimestamp()
    .setFooter('Creative Commons 2021', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');

// Partner
// Unsere Partner, tolle Menschen
// Normales Embed, damit werde ich auch die Streaming Befehle rausnehmen
client.on('message', message => {
    if (message.content === '!neeonpartner') {
        message.channel.send(neeonpartner);
    }
});
const neeonpartner = new Discord.MessageEmbed()
    .setColor('#8099ff')
    .setAuthor('Neeon Partner', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png', 'https://discord.com')
    .addFields(
        { name: 'SelfMadeNeeon',  value: 'Streamer, Developer', inline: true },
        { name: 'SilentDeath', value: 'Streamer', inline: true },
        { name: 'Remoonko', value: 'Streamer', inline: true },
	{ name: 'Lennart', value: '[Helper](https://github.com/l3nnartt)', inline: true },
    )
    .setTimestamp()
    .setFooter('Offizielle Neeon Partner', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');

client.on('message', message => {
    if (message.content === '!neonpartner') {
        message.channel.send('WARTE! Du hast Neon geschrieben! Ich heiße Neeon! Warum versteht das keiner ;C');
    }
});

// Changelogs
// Diese werden dem User helfen, 
// Zu verstehen an was gerade beim Bot gearbeitet wird.
client.on('message', message => {
    if (message.content === '!neeonlogs') {
        message.channel.send(devlogs);
    }
});
const devlogs = new Discord.MessageEmbed()
    .setColor('#8099ff')
    .setAuthor('Neeonlogs', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png', 'https://discord.com')
    .setURL('https://neon.com')
    .addFields(
        { name: '18.01.2021, 15:08', value: 'Einführung der Devlogs', inline: false },
        { name: '18.01.2021, 15:09', value: 'Bekanntmachung der Beta Joinnachrichten', inline: false },
    )
    .setTimestamp()
    .setFooter('Beeeep', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');

// !Neeonjoinbeta
// Dieser Befehl zeigt dem Nutzer die derzeitig 
// Unterstützen Namen für Join Kanäle
client.on('message', message => {
    if (message.content === '!neeonjoinbeta') {
        message.channel.send(joinbeta);
    }
});
const joinbeta = new Discord.MessageEmbed()
    .setColor('#8099ff')
    .setAuthor('Neeonjoin BETA', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png', 'https://discord.com')
	.setURL('https://neon.com')
	.addField('Diese Channelnamen sind mit dem derzeitigen Joinsystem kompatibel.', 'Beachte: Neeon benötigt die Berechtigung in die Channel schreiben zu können', false )
    .addFields(
        { name: 'Willkommen', value: 'Unterstützter Kanal', inline: true },
        { name: 'General', value: 'Semi Unterstützter Kanal', inline: true },
        { name: 'Join', value: 'Semi Unterstützter Kanal', inline: true },
        { name: 'Einreise', value: 'Unterstützter Kanal', inline: true },
        { name: 'Neue', value: 'Semi Unterstützter Kanal', inline: true },
        { name: 'willkommen🌍', value: 'In Entwicklung', inline: true },
        { name: 'Eingangshalle', value: 'Unterstützter Kanal', inline: true },
        { name: 'Welcome', value: 'Unterstützter Kanal', inline: true },
        { name: 'Willkommensraum', value: 'Semi Unterstützter Kanal', inline: true },
        { name: 'Eingang', value: 'Semi Unterstützter Kanal', inline: true },
	{ name: '👋↣｜willkommen', value: 'In Entwicklung', inline: true },
	{ name: '🔮portal', value: 'Semi Unterstützter Kanal', inline: true },
	{ name: '🌌system-messages', value: 'Semi Unterstützter Kanal', inline: true },
	{ name: 'system-messages', value: 'Unterstützter Kanal', inline: true },
	{ name: 'system-nachrichten', value: 'Unterstützter Kanal', inline: true },
    )
    .setTimestamp()
    .setFooter('Dieses Feature ist immernoch in Entwicklung', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');





//-------Help Command-------
client.on('message', message => {
    if (message.content === '!help') {
        message.channel.send(neeonhelp);
    }
});
const neeonhelp = new Discord.MessageEmbed()
    .setColor('#8099ff')
    .setAuthor('Neeon Befehlsliste', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png', 'https://discord.com')
    .addFields(
        { name: '!ping', value: 'Pong', inline: true },
        { name: '!moi', value: 'MOI', inline: true },
        { name: '!moimoi', value: 'Mega Moi', inline: true },
        { name: '!instamoi', value: 'Instagram Moi', inline: true },
        { name: '!getbot', value: 'Hier ein Bot', inline: true },
        { name: '!neon', value: 'Namensgeber', inline: true },
        { name: '!react', value: 'Eine Reaktion? Bitte!', inline: true },
        { name: '!neeonbot', value: 'Neeon Reaction für coole!', inline: true },
        { name: '!embed', value: 'Ein Example für Embeds', inline: true },
        { name: '!credits', value: 'Die GÖTTER!', inline: true },
        { name: '!neeonhelp', value: 'Neeon hilft!', inline: true },
        { name: '!silentdeath', value: 'Ehrenstreamer', inline: true },
        { name: '!clearchat', value: 'Löscht die letzten 100 Nachrichten (Nur die letzten 14 Tage löschbar)', inline: true },
        { name: '!neeonpartner', value: 'Offizielle Neeon Unterstützer!', inline: true },
        { name: '!neeonlogs', value: 'Neuigkeiten zu Neeon!', inline: true },
        { name: '!neeonjoinbeta', value: 'Die Joinnachrichten Beta!', inline: true}
    )
    .setTimestamp()
    .setFooter('Dein kleiner Helfer', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');

// Weil mir jetzt schon öfter passiert ist, dass ich ausversehen !neonhelp statt !neeonhelp geschrieben habe
// Mache ich jetzt etwas um Leute zu belehren welche sich verschreiben
// Natürlich im netten Ton!
// Wie wir wissen wird der Bot nun wenn jemand !neonhelp schreiben tut den angegeben Text schreiben
client.on('message', message => {
    if (message.content === '!neonhelp') {
        message.channel.send('WARTE! Du hast Neon geschrieben! Ich heiße Neeon! Warum versteht das keiner ;C');
    }
});

//-------Join Sachen--------
// Diese Sachen laufen (wahrscheinlich) erstmal über Canvas
// Wir werden sehen wie sich das entwickelt

// Dieser Befehl macht das in einen Channel mit dem Namen
// "General" ein Bild gesendet wird
// In welchen das Profilbild und der Name
// Des beigetreten Spielers ist.
// Ich werde den Befehl für mehrere Channel optimieren
  client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// Willkommen Kanal
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'willkommen');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// Join Kanal
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'join');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// Einreise Kanal
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'einreise');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// Neue Kanal 
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'neue');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// willkommen🌍
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'willkommen🌍');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// Eingangshalle
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'eingangshalle');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// Welcome
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// Willkommensraum
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'willkommensraum');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// Willkommensraum
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'eingang');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// 👋↣｜willkommen
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '👋↣｜willkommen');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// 🔮portal
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '🔮portal');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// 🌌system-messages
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '🌌system-messages');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// system-messages
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'system-messages');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

// system-nachrichten
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'system-nachrichten');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Schön dich zu sehen,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = '56px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Willkommen, ${member}!`, attachment);
});

//-------OAuth2--------------
// Dies ermöglicht Scopes wie "Guild oder Guilds.add"
// const DiscordOauth2 = require("discord-oauth2");
// const oauth = new DiscordOauth2();
 // 
 //oauth.tokenRequest({
 //   clientId: "798994891660328971",
 //   clientSecret: "VobyhTdSSjPYSz-n_BKy7TuXP1w7VgnQ",
 //
 //   code: "client_id=798994891660328971&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorized&response_type=code&scope=identify%20guilds%20guilds.join%20bot",
 //   scope: "identify guilds guilds.join bot",
 //   grantType: "authorization_code",
 //   
 //   redirectUri: "http://localhost/callback",
 //
// }).then(console.log)

const CLIENT_SECRET = '<Token>';
const CLIENT_ID = '<Token>';
const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
const scope = ["identify", "guilds", "bot"];
const redirect = 'https://discord.com/oauth2/authorized'; // this is a whitelisted redirect url on the app's settings for testing

const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2({
    clientSecret: CLIENT_SECRET,
    clientId: CLIENT_ID,
    redirectUri: redirect,
    credentials: creds
})
