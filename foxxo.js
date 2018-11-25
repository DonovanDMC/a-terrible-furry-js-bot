const Discord = require('discord.js');
const config = require('./config.json'); // aka fakeconfig.json :v

class Fox extends Discord.Client {
   constructor(ClientOptions) {
       super(ClientOptions);
       this.Discord = Discord;
       this.config = config;
       
       this.on("ready", this._ready.bind(this));
       this.on("message", this._message.bind(this));
       this.load.apply(this);
   }
    
    async load() {
        console.log("Loading Client things..");
        // nothing yet :v
    }
    
    async _ready() {
        console.log(`Can I go back to bed now? I'm ready with ${this.guilds.size} guilds..`);
    }
    
    async _message(message) {
        if(!message || message.author.bot) return;
        if(message.channel.type === "dm") return message.channel.send("H-hey.. Wh-what are you doing direct messaging me? >w<");
        var prefix = message.content.startsWith(`<@${this.user.id}>`)?`<@${this.user.id}>`:message.content.startsWith(`<@!${this.user.id}>`)?`<@!${this.user.id}>`:this.config.prefix,
		args = message.content.slice(prefix.length).trim().split(/\s+/g),
		command = args.shift().toLowerCase();
        
        if(!message.content.startsWith(prefix)) return;
        
        switch(command) {
                case "ping":
                    message.channel.startTyping();
                    var m = await message.channel.send("Checking Ping..");
                    m.edit("Ping Calculated!");
                    m.delete().catch(noerr=>{});
                    message.channel.send(`N-nice of you to check on me, ${message.author.username}...\nBot Ping: ${(m.createdTimestamp - message.createdTimestamp)}ms${"\n"}API Ping: ${Math.round(this.ws.ping)}ms`);
                    return message.channel.stopTyping();
                    break;

                default:
                    return;
        }
    }
}
const fox = new Fox({disableEveryone:true});

fox.login(config.token);
