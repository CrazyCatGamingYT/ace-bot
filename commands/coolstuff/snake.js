const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
const Discord = require("discord.js")
const SnakeGame = require('snakecord')
const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN", 
    timestamp: false, 
    gameOverTitle: "Game Over" 
});

module.exports = {
    name : 'snake',
    description : 'this command currently isnt working but hopefully i will use my 2 braincells to fix it',
    status : 'Not Working'
    //timeout : 5000,
    //run : async(client, message, args) => {
        //snakeGame.newGame(message)
    //}
}