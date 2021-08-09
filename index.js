var linebot = require('linebot')
const port = process.env.PORT || 3000

var bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  verify: true // Verify 'X-Line-Signature' header (default=true)
})

bot.on('message', function (event) {
  console.log('we got a message', event)
  event.reply(`did you say:`).then(function (resp) {
    console.log('we success')
    console.log('resp', resp)


  }).catch(function (error) {
    console.log('we err', error)
  })
})

bot.listen('/linewebhook', port)