const headerCreator = require('./header-creator')
const listCreator = require('./list-creator')

module.exports = text => headerCreator(listCreator(text))