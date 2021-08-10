const express = require('express')
var linebot = require('linebot')
const app = express()
const port = process.env.PORT || 3000

var bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  // verify: true // Verify 'X-Line-Signature' header (default=true)
})
const linebotParser = bot.parser()
app.post('/linewebhook', linebotParser)

app.get('/line-bot', (req, res, next) => {
  console.log('/line-bot')
  res.end('urrr')
})

bot.on('message', function (event) {
  console.log('we got a message', event)
  event.reply(`did you say:${event.message.text}`).then(function (resp) {
    console.log('we success')
    console.log('resp', resp)
  }).catch(function (error) {
    console.log('we err', error)
  })
})

app.listen(port, () => {
  console.log(`listening now...`)
})