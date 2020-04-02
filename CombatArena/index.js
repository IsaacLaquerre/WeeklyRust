const Discord = require("discord.js");
const fetch = require("node-fetch");
const clear = require("clear-console");

var TOKEN = "Njk1MTI5NjgyMTAxNjY1ODgy.XoVr_A.o2xH0lmMXcl8V4TzAtuzbhgWYf0";
var bot = new Discord.Client();
var api_endpoint = "http://weeklyrust.com/battlemetrics/playercounts.php";
var server_url = "?s=5668963&o=json&p=ui243rf987h24wifunw4eiufniwu4nfiu4nmffiu24w";


function fetchPlayers() {
    fetch(api_endpoint + server_url).then(res => res.json()).then(body => {
        bot.user.setActivity("with " + body.players + " players", { type: "PLAYING" });
        bot.guilds.get("640811691109515315").me.setNickname(body.name);
    });
}


bot.on("ready", () => {
    clear({ toStart: true });
    console.log("\nWeekly Rust CombatArena Bot ready\n------------------------------");
    fetchPlayers();
    setInterval(function() {
        fetchPlayers();
    }, 10000);
});

bot.login(TOKEN);