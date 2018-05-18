module.exports = class Support {

    constructor() {
        this.config = {
            name: "support",
            usage: "None",
            description: "Call Huzky for support!",
            permission: "None",
            category: "General",
            aliases: ["server"]
        };
    }

    run(bot, msg) {
        msg.channel.send(`You call my owner to support you with any problems!`);
    }

};
