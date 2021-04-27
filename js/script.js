// Complete Day 1 goals here
// let songNames = ["Peace", "Vibe Check", "New York Luau"];
// let songArtists = ["Alison Wonderland", "GRiZ", "The Knocks"];
// let songLengths = ["2:58", "2:50", "3:39"];
// let songImages = [
//   "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2Fa883e80e6205981f8656b53db30fe6b8.1000x1000x1.png",
//   "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fcbeea9f74cd5e4e08d3c0cee6db6a677.581x581x1.jpg",
//   "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Ff0120bf8c7137d7cc7aa15a1df746459.1000x1000x1.jpg"
// ];
// let songLinks = [
//   "https://www.youtube.com/watch?v=KbGV1KEXds4",
//   "https://www.youtube.com/watch?v=2FsJM5T-_4A",
//   "https://www.youtube.com/watch?v=JxiRVq4TJ3c",
// ];

let songs = [
  {
    "name": "Peace",
    "artist": "Alison Wonderland",
    "length": "2:58",
    "image": "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2Fa883e80e6205981f8656b53db30fe6b8.1000x1000x1.png",
    "link": "https://www.youtube.com/watch?v=KbGV1KEXds4",
  },
    {
    "name": "Vibe Check",
    "artist": "GRiZ",
    "length": "2:50",
    "image": "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fcbeea9f74cd5e4e08d3c0cee6db6a677.581x581x1.jpg",
    "link": "https://www.youtube.com/watch?v=2FsJM5T-_4A",
  },
    {
    "name": "New York Luau",
    "artist": "The Knocks",
    "length": "3:39",
    "image": "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Ff0120bf8c7137d7cc7aa15a1df746459.1000x1000x1.jpg",
    "link": "https://www.youtube.com/watch?v=JxiRVq4TJ3c",
  },
  {
    "name": "Palm Trees",
    "artist": "Ehrling",
    "length": "3:25",
    "image": "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F06b08951862e417e295eba2775bc04ff.499x499x1.jpg",
    "link": "https://www.youtube.com/watch?v=zyXCv72GgcM",
  },
];

function appendInfoToColumn(infoList, columnSelector) {
  for (let itemInfo of infoList) {
    let output = "";
    
    if (columnSelector === ".column.images") {
      output = "<img src='" + itemInfo + "' />";
    } else if (columnSelector === ".column.links") {
      output = "<a href='" + itemInfo + "' target='_blank'>Link</a>";
    } else {
      output = "<p>" + itemInfo + "</p>";
    }
    
    $(columnSelector).append(output);
  }
}

function appendSongToRow(songObject) {
  $(".column.songs").append("<p>" + songObject["name"] + "</p>");
  $(".column.artists").append("<p>" + songObject["artist"] + "</p>");
  $(".column.lengths").append("<p>" + songObject["length"] + "</p>");
  $(".column.images").append("<img src='" + songObject["image"] + "' />");
  $(".column.links").append("<a href='" + songObject["link"] + "' target='_blank'>Link</a>");
}

function displaySongsByRow() {
  for (let songObject of songs) {
    appendSongToRow(songObject);
  }
}

// function displaySongInfo() {
//   appendInfoToColumn(songNames, ".column.songs");
//   appendInfoToColumn(songArtists, ".column.artists");
//   appendInfoToColumn(songLengths, ".column.lengths");
//   appendInfoToColumn(songImages, ".column.images");
//   appendInfoToColumn(songLinks, ".column.links");
// }

function emptySongInfo() {
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongObject() {
  let songObject = {}
  songObject["name"] = $(".song").val();
  songObject["artist"] = $(".artist").val();
  songObject["length"] = $(".length").val();
  songObject["image"] = $(".image").val();
  songObject["link"] = $(".link").val();
  
  songs.push(songObject)
}

// function addSongInfo() {
//   let inputSongName = $(".song").val();
//   songNames.push(inputSongName);
  
//   let inputSongArtist = $(".artist").val();
//   songArtists.push(inputSongArtist);
  
//   let inputSongLength = $(".length").val();
//   songLengths.push(inputSongLength);
  
//   let inputSongImage = $(".image").val();
//   songImages.push(inputSongImage);
  
//   let inputSongLink = $(".link").val();
//   songLinks.push(inputSongLink);
// }

function emptyInputFields() {
  $(".song").val("")
  $(".artist").val("")
  $(".length").val("")
  $(".image").val("")
  $(".link").val("")
}

$("#add").click(function () {
  emptySongInfo();
  addSongObject();
  // addSongInfo();
  displaySongsByRow();
  // displaySongInfo();
  emptyInputFields();
});

// displaySongInfo();
displaySongsByRow();
