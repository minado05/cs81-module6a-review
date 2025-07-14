function Playlist(name) {
  //the constructor initializes playlist's name to provided name, songs to empty array and current song to null
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

//add a song to the songs array
Playlist.prototype.addSong = function (songTitle) {
  this.songs.push(songTitle); //use the push method of songs to push the new song title into the array
  //this refers to the playlist(object) that called addSong
};

//play the first song in the playlist
Playlist.prototype.playFirst = function () {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0]; //set currentSong property to first song in playlist
    console.log("Now playing:", this.currentSong); //now when we output currentSong, it would be the first song
  }
};

//skip a song
Playlist.prototype.skipSong = function () {
  if (this.songs.length > 1) {
    this.songs.shift(); //use shift method from array songs to remove first element from array
    this.currentSong = this.songs[0]; //set currentSong to the new first element
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};
// -- Improvement Suggestion --
/* Instead of using shift to remove the song completely from the playlist,  we can modify this function to set currentSong to the next song(next index) in the playlist. We would then have to modify the if condition to make sure that we are not out of bound. If(this.songs.currentIndex + 1 < this.songs.length) {...}
 */

//list all songs in playlist
Playlist.prototype.listSongs = function () {
  console.log("Playlist:", this.name); //access name property of playlist object that called method
  console.log("Songs:", this.songs.join(", ")); //use the join method from array songs to combine all array elements (the songs) together and output it
};

let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
