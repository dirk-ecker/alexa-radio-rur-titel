const jsdom = require('jsdom')
const {JSDOM} = jsdom

exports.actualTitle = actualTitle

const url = 'http://www.radiorur.de/rur/rr/295703'

function actualTitle(callback) {
  JSDOM.fromURL(url).then(dom => {
    const document = dom.window.document
    const body = document.body
    const playedNode = document.querySelector('.playlist #playlist_title div')
    const playedElement = playedNode.innerHTML.split('\n')[2]
    const played = playedElement.split('<br>')
    const title = played[1].replace('&amp;', '')
    const artist = played[0].split('<b>')[1].split('</b>')[0].replace('&amp;', '')
    callback({title, artist})
  })
}

