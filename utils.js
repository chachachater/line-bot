const fs = require('fs').promises
const readline = require('readline')

const utils = {
  getTweets: async () => {
    const file = await fs.readFile('./divaTweets.txt', function (error, data) {
      if (error) {
        console.log('出錯拉')
        console.log(error)
        return
      }
    })
    const obj = {}
    const arr = file.toString().split('\n')
    arr.pop()
    arr.forEach((each, index) => {
      obj[`tweets${index}`] = JSON.parse(each)
    })
    return obj
  }
  
}

module.exports = utils