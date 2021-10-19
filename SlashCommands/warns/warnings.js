const warnModel = require("../../models/warnModel");
const moment = require("moment");
const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "warnings",
    description: "display all warnings that a user has",
    userPermissions: ["MANAGE_MESSAGES"],
    options: [
        {
            name: "user",
            description: "user you want to view warnings on",
            type: "USER",
            required: true,
        },
    ],

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        const user = interaction.options.getUser("user");

        const userWarnings = await warnModel.find({
            userId: user.id,
            guildId: interaction.guildId,
        });

        if (!userWarnings?.length)
            return interaction.followUp({
                content: `${user} has no warnings in the server`,
            });

        const embedDescription = userWarnings
            .map((warn) => {
                const moderator = interaction.guild.members.cache.get(warn.moderatorId);

                return [
                    `warnId: ${warn._id}`,
                    `Moderator: ${moderator || 'They Left Ace :sob:'}`,
                    `Date/Time: ${moment(warn.timestamp).format('MMMM Do YYYY')}`,
                    `Reason: ${warn.reason}`,
                ].join("\n");
            })
            .join("\n\n");
        
        const embed = new MessageEmbed()
            .setTitle(`${user.tag}'s warnings`)
            .setDescription(embedDescription)
            .setColor("RANDOM");

        interaction.followUp({ embeds: [embed] });
    },
};