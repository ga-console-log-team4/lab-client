const config = require('./config.js')

const indexBooks = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/books'
  })
}

module.export = {
  indexBooks
}
