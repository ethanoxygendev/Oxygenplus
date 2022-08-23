const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { User, Message, GuildMember, ThreadMember } = Partials;
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;



const client = new Client({
     intents: [Guilds, GuildMembers, GuildMessages],
     partials: [User, Message, GuildMember, ThreadMember]
     })

const { loadEvents } = require('./Handlers/eventhandler');

client.config = require('./config.json')
client.events = new Collection();

loadEvents(client);

client.login(client.config.token)




