song_1 = "music.mp3";
song_2 = "music2.mp3";

function setup(){
    canvas = createCanvas(500, 600);
    canvas = canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    Image(video, 0, 0, 500, 600);
}
 function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
 }
 function play() {
    song.play();
 }