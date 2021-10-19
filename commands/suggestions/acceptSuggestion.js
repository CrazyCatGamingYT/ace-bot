const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name : "accept-suggestion",
    timeout : 5000,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return;
        const messageID = args[0];
        const acceptQuery = args.slice(1).join(" ");
        try {
            const suggestionChannel = message.guild.channels.cache.get(
                "870610355905265695"
            );
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);
            console.log(suggestedEmbed);
            const data = suggestedEmbed.embeds[0];
            const acceptEmbed = new MessageEmbed()
            .setAuthor(data.author.name, data.author.iconURL)
            .setDescription(data.description)
            .setColor("GREEN")
            .addField("Status (ACCEPTED)", acceptQuery);

            suggestedEmbed.edit(acceptEmbed);

            const user = await client.user.cache.find(
                (u) => u.tag === data.author.name
            );
            user.send("Your suggestion has been accepted by a moderator!");
        } catch (err) {
            console.log(err);
        }
    },
};