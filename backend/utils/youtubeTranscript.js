const { YoutubeTranscript } = require('youtube-transcript');

async function getTranscriptFromYoutube(url) {
  const videoId = url.split('v=')[1]?.split('&')[0];
  if (!videoId) throw new Error('Invalid YouTube URL');

  const transcriptArray = await YoutubeTranscript.fetchTranscript(videoId);
  return transcriptArray.map(entry => entry.text).join(' ');
}

module.exports = { getTranscriptFromYoutube };
