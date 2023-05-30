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
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////




// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  // Iterate through each playlist in the library
  for (const playlistId in library.playlists) {
    const playlist = library.playlists[playlistId];
    // Print the playlist ID, name, and number of tracks
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
};
// Call the printPlaylists function to display the playlists
printPlaylists();





// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  // Loop through each track in the library's tracks object
  for (const trackId in library.tracks) {
    // Get the track object for the current trackId
    const track = library.tracks[trackId];

    // Print the track information in the specified format
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};
// Call the printTracks function to display the tracks
printTracks();



// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  // Get the playlist object for the given playlistId
  const playlist = library.playlists[playlistId];

  // Print the playlist information in the specified format
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);

  // Loop through each track in the playlist's tracks array
  for (const trackId of playlist.tracks) {
    // Get the track object for the current trackId
    const track = library.tracks[trackId];

    // Print the track information in the specified format
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};
printPlaylist("p01");




// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  // Get the track and playlist objects from the library
  const track = library.tracks[trackId];
  const playlist = library.playlists[playlistId];

  // Add the track ID to the tracks array of the playlist
  playlist.tracks.push(trackId);

  console.log(`Track '${track.name}' added to playlist '${playlist.name}'.`);
};





// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};




// adds a track to the library
const addTrack = function(name, artist, album) {
  // Generate a unique ID for the new track
  const trackId = generateUid();

  // Create a new track object
  const newTrack = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
  };

  // Add the new track to the library
  library.tracks[trackId] = newTrack;

  console.log(`Track '${name}' by ${artist} (${album}) added to the library.`);
};


// adds a playlist to the library
const addPlaylist = function(name) {

};
addTrack("New Song", "New Artist", "New Album");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};