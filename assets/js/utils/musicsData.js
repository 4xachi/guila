const musicsData = [
  {
    musicFile: "1.mp3",
    albumFile: "1.jpeg",
    name: "Happy With You",
    performer: "Arthur Nery",
  },
  {
    musicFile: "staywithme.mp3",
    albumFile: "2.jpeg",
    name: "Stay With Me",
    performer: "Musicbeat",
  },
  {
    musicFile: "3.mp3",
    albumFile: "3.jpeg",
    name: "Paraluman",
    performer: "Adie",
  },
  {
    musicFile: "2.mp3",
    albumFile: "4.jpeg",
    name: "Take All The Love",
    performer: "Arthur Nery",
  },
  {
    musicFile: "5.mp3",
    albumFile: "5.jpeg",
    name: "Eyes Blue",
    performer: "Sista Prod",
  },
  {
    musicFile: "6.mp3",
    albumFile: "6.jpeg",
    name: "Death Bed",
    performer: "Powfu",
  },
  {
    musicFile: "7.mp3",
    albumFile: "7.jpeg",
    name: "Life Puzzle",
    performer: "Arthur",
  },
  {
    musicFile: "8.mp3",
    albumFile: "8.jpeg",
    name: "Empty Space",
    performer: "James Arthur",
  },
  {
    musicFile: "9.mp3",
    albumFile: "9.jpeg",
    name: "Photograph",
    performer: "Ed Sheeran",
  },
  {
    musicFile: "10.mp3",
    albumFile: "10.jpeg",
    name: "Galway Girl",
    performer: "Ed Sheeran",
  },
  {
    musicFile: "11.mp3",
    albumFile: "11.jpeg",
    name: "Thunder",
    performer: "Boys Like Girls",
  },
  {
    musicFile: "12.mp3",
    albumFile: "12.jpeg",
    name: "Home",
    performer: "Aurora Vibes",
  },
  {
    musicFile: "13.mp3",
    albumFile: "13.jpeg",
    name: "Hold On",
    performer: "Chord Overstreet",
  },
  {
    musicFile: "14.mp3",
    albumFile: "14.jpeg",
    name: "On My Way",
    performer: "ILLiJah",
  },
  {
    musicFile: "15.mp3",
    albumFile: "15.jpeg",
    name: "Something Just Like This",
    performer: "The Chainsmokers",
  },
  {
    musicFile: "16.mp3",
    albumFile: "16.jpeg",
    name: "7 Years",
    performer: "Lukas Graham",
  },
  {
    musicFile: "17.mp3",
    albumFile: "17.jpeg",
    name: "Stay",
    performer: "Justine Bieber",
  },
  {
    musicFile: "18.mp3",
    albumFile: "18.jpeg",
    name: "A Friend In You",
    performer: "Powfu",
  },
  {
    musicFile: "20.mp3",
    albumFile: "20.jpeg",
    name: "I See The Lights",
    performer: "Tangled",
  },
  {
    musicFile: "21.mp3",
    albumFile: "21.jpeg",
    name: "Dandelions",
    performer: "Ruth B.",
  },
  {
    musicFile: "22.mp3",
    albumFile: "22.jpeg",
    name: "Reckless",
    performer: "Madison Beer",
  },
  {
    musicFile: "23.mp3",
    albumFile: "23.jpeg",
    name: "Pagsamo",
    performer: "Arthur Nery",
  },
  {
    musicFile: "24.mp3",
    albumFile: "24.jpeg",
    name: "Ghost",
    performer: "Justin Bieber",
  },
  {
    musicFile: "25.mp3",
    albumFile: "25.jpeg",
    name: "Easy On Me",
    performer: "Adele",
  },
  {
    musicFile: "26.mp3",
    albumFile: "26.jpeg",
    name: "Pelikula",
    performer: "Janine Teñoso",
  },
  {
    musicFile: "27.mp3",
    albumFile: "27.jpeg",
    name: "Ikaw  Lang",
    performer: "Nobita",
  },
  {
    musicFile: "28.mp3",
    albumFile: "28.jpeg",
    name: "Happier",
    performer: "Olivia Rodrigo",
  },
  {
    musicFile: "29.mp3",
    albumFile: "29.jpeg",
    name: "Dusk Till Dawn",
    performer: "Zayn",
  },
  {
    musicFile: "30.mp3",
    albumFile: "30.jpeg",
    name: "Fools",
    performer: "Sody",
  },
  {
    musicFile: "31.mp3",
    albumFile: "31.jpeg",
    name: "Sandali Lang",
    performer: "Over October",
  },
  {
    musicFile: "32.mp3",
    albumFile: "32.jpeg",
    name: "Sinderela",
    performer: "Cup of Joe",
  },
  {
    musicFile: "33.mp3",
    albumFile: "33.jpeg",
    name: "Higa",
    performer: "Arthur Nery",
  },
  {
    musicFile: "34.mp3",
    albumFile: "34.jpeg",
    name: "Bawat Piyesa",
    performer: "Munimuni",
  },
  {
    musicFile: "35.mp3",
    albumFile: "35.jpeg",
    name: "Kasama Kita",
    performer: "Munimuni",
  },
  {
    musicFile: "36.mp3",
    albumFile: "36.jpeg",
    name: "Binibini",
    performer: "Zack Tabudlo",
  },
  {
    musicFile: "37.mp3",
    albumFile: "37.jpeg",
    name: "Araw-Araw",
    performer: "Ben&Ben",
  },
  {
    musicFile: "38.mp3",
    albumFile: "38.jpeg",
    name: "Back to December",
    performer: "Taylor Swift",
  },
];

function createMusicWrapper(music, curr) {
  const queueMusic = document.createElement('div');
  const innerContent = `
    <div class="queue__music-album">
      <img src="./assets/images/${music.albumFile}" alt="">
    </div>
    <div class="queue__music-details">
      <h2 class="music-details__name">${music.name}</h2>
      <p class="music-details__performer">${music.performer}</p>
    </div>
    <div class="queue__music-like">
      <i class='bx bxs-heart' id="like-icon"></i>
    </div>
    <div class="queue__music-play">
      <i class='bx bx-play' data-music="${curr}"></i>
    </div>
  `;

  queueMusic.setAttribute('class', 'queue__music');
  queueMusic.innerHTML = innerContent;

  return queueMusic
}

export { musicsData, createMusicWrapper };