var channel_id = 0;
const onStats = (stats) => {
  document.getElementById("artist").innerHTML = stats.icestats.source[channel_id].artist;
  document.getElementById("title").innerHTML = stats.icestats.source[channel_id].title;
  if(audioplayer.ended) {
    audioplayer.load();
  }
};
const statsListener = 
  new IcecastMetadataStats(
    "https://temple.xiixiixii.xyz:8443/ABYSS.ogg",
    { sources: ["icestats"], interval: ["4"], onStats }
  );
statsListener.start();
