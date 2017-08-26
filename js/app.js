console.log('working!');

const api = {
    songs: 'https://itunes.apple.com/search?term=taylor+swift&media=music&limit=200'
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
    var $divContainer = $("<div />", {"class": "row valign-wrapper song"});
    var $divSong = $("<div />", {"class": "col m7"});
    var $divId = $("<div />", {"class": "col m3"});

    var $pNumber = $("<div />", {"class": "col m1 grey-text"});
    var $pTrack = $("<div />");
    var $pCollection = $("<div />", {"class": "grey-text"});
    var $pId = $("<div />", {"class": "grey-text"});

    var $Image = $("<img />", {"class": "col m1", "alt": song.collectionName, "src": song.artworkUrl60});

    $divId.append($pId.text(song.trackId));
    $divSong.append($pTrack.text(song.trackName));
    $divSong.append($pCollection.text(song.collectionName));
    $divContainer.append($pNumber.text(number + 1));
    $divContainer.append($Image);
    $divContainer.append($divSong).append($divId);

    $("#songs").append($divContainer).append("<hr>");
  });

  $(".song").on('mouseover', function(){
        $(this).css("background-color", "#eeeeee");
  });
  $(".song").on('mouseout', function(){
        $(this).css("background-color", "#fff");
  });
};



$(document).ready(loadPage);
