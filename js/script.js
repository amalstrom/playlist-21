// Complete Day 1 goals here
let songNames = ["Peace", "Vibe Check", "New York Luau"];
let songArtists = ["Alison Wonderland", "GRiZ", "The Knocks"];
let songLengths = ["2:58", "2:50", "3:39"];
let songImages = [
  "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2Fa883e80e6205981f8656b53db30fe6b8.1000x1000x1.png",
  "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fcbeea9f74cd5e4e08d3c0cee6db6a677.581x581x1.jpg",
  "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Ff0120bf8c7137d7cc7aa15a1df746459.1000x1000x1.jpg"
];
let songLinks = [
  "https://www.youtube.com/watch?v=KbGV1KEXds4",
  "https://www.youtube.com/watch?v=2FsJM5T-_4A",
  "https://www.youtube.com/watch?v=JxiRVq4TJ3c",
];

function appendInfoToColumn(infoList, columnSelector) {
  for (let itemInfo of infoList) {
    let output = "";
    
    if (columnSelector === ".column.images") {
      output = "<img src='" + itemInfo + "' />";
    } else if (columnSelector === ".column.links") {
      output = "<a href='" + itemInfo + "' target='blank'>Link</a>";
    } else {
      output = "<p>" + itemInfo + "</p>";
    }
    
    $(columnSelector).append(output);
  }
}

function displaySongInfo() {
  appendInfoToColumn(songNames, ".column.songs");
  appendInfoToColumn(songArtists, ".column.artists");
  appendInfoToColumn(songLengths, ".column.lengths");
  appendInfoToColumn(songImages, ".column.images");
  appendInfoToColumn(songLinks, ".column.links");
}

function emptySongInfo() {
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  let inputSongName = $(".song").val();
  songNames.push(inputSongName);
  
  let inputSongArtist = $(".artist").val();
  songArtists.push(inputSongArtist);
  
  let inputSongLength = $(".length").val();
  songLengths.push(inputSongLength);
  
  let inputSongImage = $(".image").val();
  songImages.push(inputSongImage);
  
  let inputSongLink = $(".link").val();
  songLinks.push(inputSongLink);
}

function emptyInputFields() {
  $(".song").val("")
  $(".artist").val("")
  $(".length").val("")
  $(".image").val("")
  $(".link").val("")
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
  emptyInputFields();
});

displaySongInfo();
