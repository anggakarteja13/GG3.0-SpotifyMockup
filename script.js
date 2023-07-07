const songs = ['Song 1','Song 2','Song 3','Song 4','Song 5'];

const playlist = ['Playlist 1'];

let allSong = document.getElementById("songList");

songs.forEach((item) => {
    let song = document.createElement("li");
    song.innerText = item.title;
    allSong.appendChild(song);
});
