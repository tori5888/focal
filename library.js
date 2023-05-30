const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },

  printPlaylists: function() {
    for (const playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },

  printTracks: function() {
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (const trackId of playlist.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    const track = this.tracks[trackId];
    const playlist = this.playlists[playlistId];
    playlist.tracks.push(trackId);
    console.log(`Track '${track.name}' added to playlist '${playlist.name}'.`);
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    const trackId = this.generateUid();
    const newTrack = {
      id: trackId,
      name: name,
      artist: artist,
      album: album
    };
    this.tracks[trackId] = newTrack;
    console.log(`Track '${name}' by ${artist} (${album}) added to the library.`);
  },

  addPlaylist: function(name) {
    const playlistId = this.generateUid();
    const newPlaylist = {
      id: playlistId,
      name: name,
      tracks: []
    };
    this.playlists[playlistId] = newPlaylist;
    console.log(`Playlist '${name}' added to the library.`);
  }
};

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrack("New Song", "New Artist", "New Album");
library.addPlaylist("New Playlist");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};