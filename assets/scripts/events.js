'use-strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js') // ./ in same folder
const ui = require('./ui.js')

const onIndexBooks = () => {
  event.preventDefault()
    api.indexBooks()
      .then(ui.onIndexBooksSuccess)
      .catch(ui.onIndexBooksFailure)
}

module.exports = {
  onIndexBooks
}
