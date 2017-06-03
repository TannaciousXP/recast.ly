var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',  
    data: {
      maxResults: 5,
      q: options,
      key: YOUTUBE_API_KEY,
      type: 'video',
      videoEmbeddable: true,
      part: 'snippet' 
    },
    success: function(data) { 
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;
