const { WebhookClient, MessageEmbed } = require('discord.js')

module.exports = {
    name : 'webhook',
    timeout : 5000,
    run : async(client, message, args) => {
    const wc = new WebhookClient('870588199171407882', 'vscTKVxHiWdm1bb_bCHrOmXYs_rSIM5cevxxnrSEJ98R4fbxugrY2QCSjYCSRg5p9ByB')
    //https://discord.com/api/webhooks/870588199171407882/vscTKVxHiWdm1bb_bCHrOmXYs_rSIM5cevxxnrSEJ98R4fbxugrY2QCSjYCSRg5p9ByB
    wc.send('||<@&866821956354965504>||')
        const embed = new MessageEmbed()
            .setColor('#58b9ff').setDescription(args.join(" "))
    wc.send({
        embeds : [embed]
    })
    }
}