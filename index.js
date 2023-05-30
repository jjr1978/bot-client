// include the discord.js module
const Discord = require("discord.js");
// create a Discord client with the name bot
const bot = new Discord.Client({
  intents: [Discord.GatewayIntentBits.GuildMessages],
});

// print Launched! in the Terminal when the bot started
bot.once("ready", () => {
  console.log("Launched!");
});
bot.on("message", (message) => {
  if (message.content === "!Who are you?") {
    message.channel.send("New Bot!");
  }
});
// paste here your Discord bot Token
bot.login("MTExMzEyODEyOTcxNjgzNDQyNQ.Gn1rb7.lNBEAx2ucxvdMenY19hEW-EXrGjF5xj9_sat4E");

// var Discord = require("discord.io");
// var logger = require("winston");
// var auth = require("./auth.json");

// // Configure logger settings
// console.log("Entro");
// logger.remove(logger.transports.Console);

// logger.add(new logger.transports.Console(), {
//   colorize: true,
// });

// logger.level = "debug";
// // Initialize Discord Bot
// var bot = new Discord.Client({
//   token: auth.token,
//   autorun: true,
// });

// console.log(bot);

// bot.on("ready", function (evt) {
//   logger.info("Connected");
//   console.log("Connected");
//   logger.info("Logged in as: ");
//   logger.info(bot.username + " - (" + bot.id + ")");
//   console.log(bot.username + " - (" + bot.id + ")");
// });

// bot.on("message", function (user, userID, channelID, message, evt) {
//   // Our bot needs to know if it will execute a command
//   // It will listen for messages that will start with `!`
//   if (message.substring(0, 1) == "!") {
//     var args = message.substring(1).split(" ");
//     var cmd = args[0];
//     args = args.splice(1);
//     switch (cmd) {
//       // !ping
//       case "TLW-APEX-Prueba":
//         bot.sendMessage({
//           to: channelID,
//           message: "http://172.16.1.227:8512/ords/test/",
//         });
//         break;
//       // Just add any case commands if you want to..
//     }
//   }
// });
