window.addEventListener("load", init);

// songArray = ['Faded','songs/Galti.mp3','songs/Na Ja.mp3','songs/Shape of You.mp3']

function init(){
    audio = document.getElementById("audio");
    songTag = document.getElementsByTagName('a');
    for(var i = 0; i<songTag.length; i++){
        songTag[i].addEventListener("click", playSong);
    }
}

function playSong(){
    var songName = event.srcElement.innerHTML.trim();
    console.log(songName);
    audio.src = 'songs/'+songName+'.mp3';
    audio.play();
}