console.log('working!');

const api = {
    songs: 'https://itunes.apple.com/search?term=taylor+swift&media=music&limit=200',
    albums: 'https://itunes.apple.com/lookup?id=159260351&entity=album',
    albumSongs: 'https://itunes.apple.com/lookup?id='//907242701&entity=song
};

const loadPage = function(){

  $.getJSON(api.songs, function(response){
      var taylorSongs = response.results;
      console.log(taylorSongs);
      printSong(taylorSongs);
  });

};
function printSong(taylorSongs){
  // var songData = document.createElement(songInfo);
  taylorSongs.forEach(function(song, number){
    var $divContainer = $("<div />", {"class": "row valign-wrapper"});
    var $divSong = $("<div />", {"class": "col m7"});
    var $divId = $("<div />", {"class": "col m2"});

    var $pNumber = $("<div />", {"class": "col m1 grey-text"});
    var $pTrack = $("<div />");
    var $pCollection = $("<div />", {"class": "grey-text"});
    var $pId = $("<div />", {"class": "grey-text"});

    var $Image = $("<img />", {"class": "col m2", "alt": song.collectionName, "src": song.artworkUrl60});

    $divId.append($pId.text(song.trackId));
    $divSong.append($pTrack.text(song.trackName));
    $divSong.append($pCollection.text(song.collectionName));
    $divContainer.append($pNumber.text(number + 1));
    $divContainer.append($Image);
    $divContainer.append($divSong).append($divId);

    $("#songs").append($divContainer).append("<hr>");
  });
};



$(document).ready(loadPage);
