const { Client, Message, MessageEmbed } = require("discord.js");
const Schema = require("../coolstuff/chatbot-channel");
module.exports = {
    name: "set-channel",
    timeout : 5000,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const channel = message.mentions.channels.first() || message.channel;
        Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (data) data.delete();
            new Schema({
                Guild: message.guild.id,
                Channel: channel.id,
            }).save();
            message.channel.send(`Save chatbot channel to ${channel}`);
        });
    },
};