const fs = require('fs')
const path = require('path')

module.exports = function (folder) {
    if (!fs.existsSync(path.resolve(folder))) return

    const res = new Map()

    fs.readdirSync(path.resolve(folder)).filter(f => f.startsWith('.js') && !f.match('index.js')).forEach(i => {
        res.set(i.replace('.js', ''), require(path.join(path.resolve(folder), i)))
    })

    return res
}