const express = require('express')
const linebot = require('linebot')
const utils = require('./utils')

const app = express()
const port = process.env.PORT || 3000

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  // verify: true // Verify 'X-Line-Signature' header (default=true)
})
const linebotParser = bot.parser()
app.post('/linewebhook', linebotParser)

app.get('/line-bot', async (req, res, next) => {
  const data =await utils.getTweets()
  console.log(`這是最新的三篇推特:${data.tweets0.tweet}, ${data.tweets0.thumbnail}, ${data.tweets1.tweet}, ${data.tweets1.thumbnail}, ${data.tweets2.tweet}, ${data.tweets2.thumbnail}`)
  res.end('urrr')
})

bot.on('message', async function (event) {
  console.log('we got a message', event)
  const data = await utils.getTweets()
  event.reply(`這是最新的三篇推特:${data.tweets0.tweet}, ${data.tweets0.thumbnail}, ${data.tweets1.tweet}, ${data.tweets1.thumbnail}, ${data.tweets2.tweet}, ${data.tweets2.thumbnail}`).then(function (resp) {
    console.log('we success')
    console.log('resp', resp)
  }).catch(function (error) {
    console.log('we err', error)
  })
})

app.listen(port, () => {
  console.log(`listening now...`)
})