const config = require("./config.js").config;
const Discord = require("discord.js");
const bot = new Discord.Client({ autoReconnect: true });
var BOT_TOKEN = config.BOT_TOKEN;
bot.login(BOT_TOKEN);
let prefix = config.prefix;
var prefixLog = "[!] ";

//#region ---- ALL EMOJIS ------
//Emoji string
var EmojiThonkongString = "<:thonkong:414071099517698059>"
    , EmojiGreenTickString = "<:greenTick:412663578009796619>"
    , EmojiRedTickString = "<:redTick:412663578051477505>"
    , EmojiYouTube_LogoString = "<:youtube-logo:413446051480076288>"
    , EmojiUpvoteString = "<:upvote:416350074252034059>"
    , EmojiDownvoteString = "<:downvote:416350074168279061>"
    , EmojiProhibitedString = "<:prohibited:416350020355489803>"
    , EmojiTwitchLogoString = "<:twitchlogo:416350019780870146>"

//Emoji 
var EmojiThonkong = "thonkong:414071099517698059"
    , EmojiYouTube_Logo = "youtube-logo:413446051480076288"
    , EmojiGreenTick = "greenTick:412663578009796619"
    , EmojiRedTick = "redTick:412663578051477505"
    , EmojiUpvote = "upvote:416350074252034059"
    , EmojiDownvote = "downvote:416350074168279061"
    , EmojiProhibited = "prohibited:416350020355489803"
    , EmojiTwitchLogo = "twitchlogo:416350019780870146"

//Emoji ID
var Thonkong_ID = "414071099517698059"
    , YouTube_Logo_ID = "413446051480076288"
    , GreenTick_ID = "412663578009796619"
    , RedTick_ID = "412663578051477505"
    , upvote_ID = "416350074252034059"
    , downvote_ID = "416350074168279061"
    , prohibited_ID = "416350020355489803"
    , TwitchLogo_ID = "416350019780870146"

var PermissionYes = EmojiGreenTickString;
var PermissionNo = EmojiRedTickString;
//#endregion
//---- ALL EMOJIS ------


bot.on('ready', () => { //When bot is ready
    bot.user.setStatus("online")
    console.log("------------------------------")
    console.log(prefixLog + "Bot created by RisedSky (only for the boti-panda server)")
    console.log(prefixLog + "All rights reserved")
    console.log(prefixLog + "Bot ready")
    console.log("------------------------------")

    bot.user.setActivity(prefix + "help | Watching Boti-Panda");
    console.log("The bot is now ready !")

    for (var i in bot.guilds.array()) {
        console.log(i + " » '" + bot.guilds.array()[i] + "'")
        //Récupere le nombre de serveur et nous les montre (a garder)
    }

})

bot.on('guildCreate', async Guild => { //Quand le bot est ajouté sur un serveur
    let guild = Guild;

    if (guild.id === "412262889156771842") {

    } else {
        guild.leave();
    }

})



bot.on('message', async message => { //Quand une personne envoi un message
    if (message.author.bot) return;

    if (!message.guild) return;


    if (!message.content.startsWith(prefix)) return;

    var channelTopic = String(message.channel.topic).toLowerCase();

    try {
        if (channelTopic.includes("<nocmds>")) {
            if (!message.content.startsWith(prefix)) return;

            return message.react(EmojiRedTick)
        }
    } catch (error) {
        console.log("channeTopic problem: " + error);
    }

    //Declaring variable
    var MessageID = message.id;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args_next = args.join(" ").trim();
    var Mess = message;
    var Mess_Channel = message.channel;
    var Mess_Member = message.member;
    if (Mess_Member.voiceChannel) { var Mess_voiceChannel = message.member.voiceChannel; }

    //#region Permission Du Bot
    const BOT_SEND_MESSAGESPerm = message.guild.channels.find("id", message.channel.id).permissionsFor(message.guild.me).has("SEND_MESSAGES") && message.channel.type === 'text'
    const BOT_MANAGE_MESSAGESPerm = message.guild.channels.find("id", message.channel.id).permissionsFor(message.guild.me).has("MANAGE_MESSAGES") && message.channel.type === 'text'
    const BOT_ADMINISTRATORPerm = message.guild.channels.find("id", message.channel.id).permissionsFor(message.guild.me).has("ADMINISTRATOR") && message.channel.type === 'text'
    const BOT_USE_EXTERNAL_EMOJISPerm = message.guild.channels.find("id", message.channel.id).permissionsFor(message.guild.me).has("USE_EXTERNAL_EMOJIS") && message.channel.type === 'text'

    //#endregion

    //#region Permission de la personne
    const member_Has_BAN_MEMBERS = message.guild.channels.find("id", message.channel.id).permissionsFor(message.member).has("BAN_MEMBERS") && message.channel.type === 'text'
    const member_Has_MANAGE_GUILD = message.guild.channels.find("id", message.channel.id).permissionsFor(message.member).has("MANAGE_GUILD") && message.channel.type === 'text'
    const member_has_MANAGE_MESSAGES = message.guild.channels.find("id", message.channel.id).permissionsFor(message.member).has("MANAGE_MESSAGES") && message.channel.type === 'text'
    //#endregion

    //#region Roles
    const member_has_French_Role = Mess_Member.roles.has("426622371856777216");
    const member_has_English_Role = Mess_Member.roles.has("426622564664606731");
    const English_Role = 426622564664606731;
    const French_Role = 426622371856777216;
    //#endregion


    switch (args[0].toLowerCase()) {
        case "help":

            var embed_fr = new Discord.RichEmbed()
                .setAuthor(bot.user.username, bot.user.avatarURL)
                .setDescription("On dirait que tu as besoin d'aide, voici toutes les commandes du bot !")
                .addField(prefix + "give_me", "Te donne un rôle (Arguments: fr, en)", true)
                .addBlankField()
                .addField(prefix + "remove_me", "T'enlèves un rôle (Arguments: fr, en)", true)
                .addBlankField()
                .setFooter("Demandé par  " + Mess_Member.user.tag)
                .setTimestamp();

            var embed_en = new Discord.RichEmbed()
                .setAuthor(bot.user.username, bot.user.avatarURL)
                .setDescription("It seems you need some help, here are the commands of the bot !")
                .addField(prefix + "give_me", "Give you a role (Arguments: fr, en)", true)
                .addBlankField()
                .addField(prefix + "remove_me", "Remove you a role (Arguments: fr, en)", true)
                .addBlankField()
                .setFooter("Requested by " + Mess_Member.user.tag)
                .setTimestamp();

            if (member_has_French_Role) {
                Mess_Channel.send(embed_fr)
            } else {
                Mess_Channel.send(embed_en)
            }
            //si le mec a le rôle fr on met en fr sinon on met direct en anglais
            break;
        //-------
        case "give_me":
            if (!args[1]) {
                message.reply("You didn't put an argument (" + prefix + "give_me FR, EN)")
            } else {

                if (args[1].toLowerCase() === "fr") {
                    if (Mess_Member.roles.has("426622371856777216")) {
                        message.react(EmojiRedTick)
                        return message.reply(EmojiRedTickString + " Tu as déjà ce rôle !")
                    } else {
                        Mess_Member.addRole("426622371856777216")
                        message.react(EmojiGreenTick)
                        return message.reply(EmojiGreenTickString + " Et voilà, tu as le rôle Français ! :wink:")
                    }
                    if (!Mess_Member.roles.has("412264669252943895")) {
                        Mess_Member.addRole("412264669252943895")
                    }
                    //console.log(Mess_Member.roles);

                }

                if (args[1].toLowerCase() === "en") {
                    if (member_has_English_Role) {
                        message.react(EmojiRedTick)
                        return message.reply(EmojiRedTickString + " You already have this role !")

                    } else {
                        Mess_Member.addRole("426622564664606731")
                        message.react(EmojiGreenTick)
                        return message.reply(EmojiGreenTickString + " Enjoy the English role :wink:")
                    }
                    if (!Mess_Member.roles.has("412264669252943895")) {
                        Mess_Member.addRole("412264669252943895")
                    }
                    //console.log(Mess_Member.roles);

                }
            }
            break;

        //-----------

        case "remove_me":
            if (!args[1]) {
                return message.reply("You didn't put an argument (" + prefix + "remove_me FR, EN)")
            } else {
                if (args[1].toLowerCase() === "fr") {
                    if (!Mess_Member.roles.has("426622371856777216")) {
                        message.react(EmojiRedTick)
                        return message.reply(EmojiRedTickString + " Tu n'as pas ce rôle !")
                    } else {
                        Mess_Member.removeRole("426622371856777216")
                        message.react(EmojiGreenTick)
                        return message.reply(EmojiGreenTickString + " Et voilà, tu n'as plus le rôle ! :wink:")
                        if (!Mess_Member.roles.has("426622564664606731")) {
                            Mess_Member.removeRole("412264669252943895")
                        }
                    }
                    //console.log(Mess_Member.roles);

                }

                if (args[1].toLowerCase() === "en") {
                    if (!Mess_Member.roles.has("426622564664606731")) {
                        message.react(EmojiRedTick)
                        return message.reply(EmojiRedTickString + " You don't have this role !")
                    } else {
                        Mess_Member.removeRole("426622564664606731")
                        message.react(EmojiGreenTick)
                        return message.reply(EmojiGreenTickString + " It's done, i removed you the English role ! :wink:")
                        if (!Mess_Member.roles.has("426622371856777216")) {
                            Mess_Member.removeRole("412264669252943895")
                        }
                    }
                    //console.log(Mess_Member.roles);

                }
            }
            break;
    }

})
