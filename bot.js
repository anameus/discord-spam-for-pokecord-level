const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

client.on("ready", () => {
    console.log("I am ready!");
});



client.on("message", (message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!command || message.author.bot) return;
  
    if (command === "ping") {
      message.channel.send("pong!");
    } else
    if (command === "spam") {
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
              for(j=0;j<args[0];j++){
                spam();
                await sleep(5000);
              }
          }
          spamMore()
    }
});

client.login(config.token);