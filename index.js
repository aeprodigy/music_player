let mySong = document.getElementById("my-song");
let icon = document.getElementById("icon");

icon.onclick =function(){
    if(mySong.paused){
        mySong.play();
        icon.src ="img/pause.png";
    }else{
        mySong.pause();
        icon.src ="img/play.png";
    }

}