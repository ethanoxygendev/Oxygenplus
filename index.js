const fs = require('fs')
const process = require('process')
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require('discord.js')
const { User, Message, GuildMember, ThreadMember } = Partials
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits
const fileLoader = require('./Handlers/fileLoader')

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
})

let config
const commands = fileLoader('commands')

try {
     config = JSON.parse(fs.readFileSync('./config.json'))
} catch (e) {
     console.error(e)
     process.exit()
}
if (!config?.token) {
     console.log('Token is not set')
     process.exit()
}

client.once('ready', () => {
  console.log('[Client] Ready.')
})

client.on('interactionCreate', async (interaction) => {
     if (!interaction.isChatInputCommand()) return
     console.log('New interaction', `\n${interaction}`)
     await commands.get(interaction.commandName).execute(interaction)
})

client.login(config.token)
