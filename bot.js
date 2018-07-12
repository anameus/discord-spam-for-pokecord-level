const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

client.on("ready", () => {
    console.log("I am ready!");
});



client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
    if (message.content.startsWith(config.prefix + "ping")) {
      message.channel.send("pong!");
    } else
    if (message.content.startsWith(config.prefix + "spam")) {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
          async function spam() {
            for(i=0;i<9;i++){
                message.channel.send("<3");
                await sleep(800);
            }
          }
          async function spamMore(){
              for(j=0;j<3;j++){
                spam();
                await sleep(5000);
              }
          }
          spamMore()
    }
});

client.login(config.token);