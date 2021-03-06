const Discord = require("discord.js");
const fetch = require("node-fetch");
const clear = require("clear-console");
const config = require("../config/botConfig.json");

var TOKEN = config.threex;
var bot = new Discord.Client();
var url = config.API_ENDPOINT + config.API_TX_PARAMS;"http://weeklyrust.com/battlemetrics/playercounts.php";


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