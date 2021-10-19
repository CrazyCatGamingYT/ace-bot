const { Interaction } = require('discord.js')
const img = require('images-scraper')

const google = new img({
    puppeteer : {
        headless : true,
    }
})

module.exports = {
    name : 'image',
    timeout : 5000,
    description: 'basic image command',
    options: [
        {
            name: 'photo',
            description: 'what image do you want',
            type: 'STRING',
            required: true
        },
    ],
    /**
     * @param {Interaction} message
     */
    run : async(client, interaction, args) => {
        const query = args.join(" ")
        if(!query) return interaction.followUp('Please enter a search query')

        const results = await google.scrape(query, 1)
        interaction.followUp(results[0].url);
    }
}