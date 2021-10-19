const { Client } = require("discord.js");
const warnModel = require("../../models/warnModel");

module.exports = {
    name: "warn",
    description: "warns a user",
    userPermissions: ["MANAGE_MESSAGES"],
    options: [
        {
            name: "user",
            description: "user you want to warn",
            type: "USER",
            required: true,
        },
        {
            name: "reason",
            description: "reason for this warn",
            type: "STRING",
            required: true,
        }
    ],

    /**
     * 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        const user = interaction.options.getUser("user");
        const reason = interaction.options.getString("reason");

        new warnModel({
            userId: user.id,
            guildId: interaction.guildId,
            moderatorId: interaction.user.id,
            reason,
            timestamp: Date.now()
        }).save();

        user.send(`You have been warned in **${interaction.guild.name}** for ${reason}`).catch(console.log);

        interaction.followUp({ content: `${user} has been warned for ${reason}` });
    },
};