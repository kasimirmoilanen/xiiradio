function change_channel() {
  channel_id = document.getElementById("channelselect").value;
  var channelselect = document.getElementById("channelselect");
  var channel = channelselect.options[channelselect.selectedIndex].text;
  var audioplayer = document.getElementById("audioplayer");
  audioplayer.src = `https://temple.xiixiixii.xyz:8443/${channel}.ogg`;
  m3u.href = `https://temple.xiixiixii.xyz:8443/${channel}.ogg.m3u`;
  xspf.href = `https://temple.xiixiixii.xyz:8443/${channel}.ogg.xspf`;
  audioplayer.play();
  document.getElementById("play_button").src = "Images/Buttons/pause_64.png";
}
function change_volume() {
  audioplayer.volume=document.getElementById("volume_bar").value;

}
function audio_toggle() {
  if (audioplayer.paused) {
    audioplayer.play();
    document.getElementById("play_button").src = "Images/Buttons/pause_64.png";
  } else {
    audioplayer.pause();
    document.getElementById("play_button").src = "Images/Buttons/play_64.png";
  }
}
function audio_stop() {
  if (audioplayer.paused == false) {
    audioplayer.src = audioplayer.src;
    audioplayer.pause();
    document.getElementById("play_button").src = "Images/Buttons/play_64.png";
  }
}
function volume_cycle() {
  if (audioplayer.volume < 0.51) {
    audioplayer.volume = 0.51;
  } else if (audioplayer.volume < 1) {
    audioplayer.volume = 1;
  } else {
    audioplayer.volume = 0;
  }
  update_volume_button();

}
function update_volume_button() {
  if (audioplayer.volume === 0) {
    document.getElementById("volume_button").src = "Images/Buttons/speaker_mute.png";
  } else if (audioplayer.volume > 0.51) {
    document.getElementById("volume_button").src = "Images/Buttons/speaker_high.png";
  } else {
    document.getElementById("volume_button").src = "Images/Buttons/speaker_low.png";
  }
}
