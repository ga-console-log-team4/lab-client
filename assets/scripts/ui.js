'use-strict'

// const store = require('./store')
const api = require('./api')
const alexHandlebars = require('./templates/display-all.handlebars')

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
const onIndexBooksSuccess = (indexedBooks) => {
  successMessage('Indexed Books Successfully')
  const indexBooksHTML = alexHandlebars({ books: indexedBooks.books })
  $('#display-all-books').html(indexBooksHTML)
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
