module.exports = class Credits {

    constructor() {
        this.config = {
            name: "credits",
            usage: "None",
            description: "Displays the wonderful people who made me possible!",
            permission: "None",
            category: "General",
            aliases: []
        };
    }

    async run(bot, msg) {
        msg.channel.send(bot.embed({
            author: {
                name: "Special thanks to:",
                icon: bot.user.avatarURL
            },
            footer: `Requested by ${msg.author.tag}`,
            footerIcon: msg.author.avatarURL,
            timestamp: true,
            fields: [
                { name: "Huzky#5415 (Owner)", value: "Main coding and making me online." },
                { name: "Corey#6653 (source)", value: "Helping me with ban and kick commands." },
            ]
        })).catch(() => {});
    }

};
