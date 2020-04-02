const Discord = require("discord.js");
const fetch = require("node-fetch");
const clear = require("clear-console");
const config = require("../config/botConfig.json");

var TOKEN = config.threex;
var bot = new Discord.Client();
var api_endpoint = "http://weeklyrust.com/battlemetrics/playercounts.php";
var server_url = "?s=4713934&o=json&p=ui243rf987h24wifunw4eiufniwu4nfiu4nmffiu24w";


function fetchPlayers() {
    fetch(api_endpoint + server_url).then(res => res.json()).then(body => {
        bot.user.setActivity("with " + body.players + " players", { type: "PLAYING" });
        bot.guilds.get("640811691109515315").me.setNickname(body.name);
    });
}


bot.on("ready", () => {
    clear({ toStart: true });
    console.log("\nWeekly Rust 3X Bot ready\n------------------------------");
    fetchPlayers();
    setInterval(function() {
        fetchPlayers();
    }, 10000);
});

bot.login(TOKEN);