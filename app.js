var Discord = require("discord.js");
var bot = new Discord.Client();







bot.on('message', message => {


  var sender = message.author;
  var msg = message.content.toLowerCase();
  var prefix = "."


if (sender.id === '376237837756137486'){
    return;
}
else {
  if (msg === prefix + 'ping') {
    message.channel.send('Pong!')
  } 
};
else {
  if (message.channel.id === '378231014650019840'){
    return;
  }
};

 else {
  if (msg.includes('.com')) {
    message.delete();
    sender.send("<@"+message.author.id+'> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:')
    bot.channels.get('355675709127000065').send("<@" + message.author.id + "> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:")
    return;
  }
 };

   
 else {
  if (msg.includes('.c o m')) {
    message.delete();
    sender.send("<@"+message.author.id+'> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:')
    bot.channels.get('355675709127000065').send("<@" + message.author.id + "> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:")
    return;
  }
 };

  else {
  if (msg.includes('.au')) {
    message.delete();
    sender.send("<@"+message.author.id+ '> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:')
    bot.channels.get('355675709127000065').send("<@" + message.author.id + "> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:")
    return;
  }
  };
  
  else {
  if (msg.includes('.hk')) {
    message.delete();
    sender.send("<@"+message.author.id+ '> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:')
    bot.channels.get('355675709127000065').send("<@" + message.author.id + "> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:")
    return;
  }
  };
  
  else {
  if (msg.includes('.eu')) {
    message.delete();
    sender.send("<@"+message.author.id+ '> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:')
    bot.channels.get('355675709127000065').send("<@" + message.author.id + "> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:")
    return;
  }
  };

  else {
  if (msg.includes('.pizza')) {
    message.delete();
    sender.send("<@"+message.author.id+ '> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:')
    bot.channels.get('355675709127000065').send("<@" + message.author.id + "> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:")
    return;
  }
  }
  
  else {
  if (msg.includes('.co')) {
    message.delete();
    sender.send("<@"+message.author.id+ '> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:')
    bot.channels.get('355675709127000065').send("<@" + message.author.id + "> Dont Post Any Links Here Or You Gonna Get Kicked Out:punch:")
    return;
  }
  }

 

  bot.on("guildMemberAdd", (member) =>{
    console.member.guild.channels.get('355675709127000065').send("Hey, user i am the guard bot Galaxy of Design don't swear");
});

bot.on("guildMemberAdd", (member) =>{
  console.log(member)
  return;
});





});


bot.on('ready', () => {
  console.log('Bot Launched...')

  bot.user.setStatus('dnd')
  bot.user.setGame('Max is coding me :)')
  bot.user.setUsername("Galaxys Guard Bot")





});








bot.login(process.env.BOT_TOKEN);
