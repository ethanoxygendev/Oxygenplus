const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { User, Message, GuildMember, ThreadMember } = Partials;
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;



const client = new Client({
     intents: [Guilds, GuildMembers, GuildMessages],
     partials: [User, Message, GuildMember, ThreadMember]
     })

const config = require('./config.json')

client.once('ready', () => {
     console.log('[Client] Ready.')
})

client.login(client.config.token)




