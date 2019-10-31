'use-strict'

const store = require('./store')
const api = require('./api')
const alexHandlebars = require('../templates/display-all.handlebars')

const successMessage = (newText) => {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = newText => {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}
const onIndexBooksSuccess = (indexedLeaders) => {
  successMessage('Indexed Books Successfully')
}
const onIndexBooksFailure = () => {
  failureMessage('Index Books Failed')
}

module.exports = {
  successMessage,
  failureMessage,
  onIndexBooksSuccess,
  onIndexBooksFailure
}
