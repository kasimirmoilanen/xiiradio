import { IcecastMetadataReader } from ("icecast-metadata-js");

const express = require('express')
const ejs = require('ejs')

let channels = ['monolith', 'abyss', 'dreaming', 'tekken'];
// let html = ejs.render('<%= channels.join(", "); %>', {channels: channels});

const app = module.exports = express()
const port = 9001

const icecastReader = new IcecastMetadataReader({
  onStream: (value) => {
    // do something with the data in value.stream
  },
  onMetadata: (value) => {
    // do something with the data in value.metadata
    let html = value
  };,
});

app.get('/', (req, res) => {
  res.send(html)
})

app.listen(port, () => {
  console.log(`Listening at ${port}`)
})


