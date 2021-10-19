const { Client, Message, MessageEmbed } = require("discord.js");
const client = require("../..");

module.exports = {
    name : "suggest",
    timeout : 5000,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const suggestionQuery = args.join(" ");
        if (!suggestionQuery) return message.reply("Please specify a suggestion");
        
        const embed = new MessageEmbed()
          .setAuthor(
              message.author.tag,
              message.author.displayAvatarURL({ dynamic: true })
          )
          .setDescription(`**Suggestion**: ${suggestionQuery}`)
          .setColor("ORANGE")
          .setTimestamp()
          .addField("Status", "PENDING");

        message.channel.send("Submitted suggestion!");
        message.guild.channels.cache.get('870610355905265695').send(embed);
    }
}