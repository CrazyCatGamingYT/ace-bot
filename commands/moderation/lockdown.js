const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name : "lockdown",
    timeout : 5000,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;

        const role = message.guild.roles.everyone;

        if (!args.length) return message.reply("Please specify a query");

        const query = args[0].toLowerCase();

        if(!["true", "false"].includes(query))
        return message.reply("The option you have stated is not valid!");

        const perms = role.permissions.toArray();

        if (query === "false") {
            perms.push("SEND_MESSAGES");
            console.log(perms)
            await role.edit({ permissions: perms });
            message.reply('server is unlocked');
        } else {
            const newPerms = perms.filter((perm) => perm !== 'SEND_MESSAGES');
            console.log(newPerms);

            await role.edit({ permissions: newPerms });
            message.reply('server is now locked down');
        }
    },
};