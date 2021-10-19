module.exports = {
    name : 'clear',
    aliases : ['purge'],
    timeout : 5000,
    description : 'this command will delete a certian ammount of messages',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You dont have permission to use this command')
        if(!args[0]) return message.reply('Please say how many messages you wanna delete (1-99)')
        if(isNaN(args[0])) return message.reply('Only numbers bruh')
        if(parseInt(args[0]) > 99) return message.reply('The max ammount of messages you can delete is 99')
            await message.channel.bulkDelete(parseInt(args[0]) + 1)
                .catch(err => console.log(err))
            message.reply(`Deleted ${args[0]} messages!`).then(m => m.delete({ timeout : 5000 }))
    }
}