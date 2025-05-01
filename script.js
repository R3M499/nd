
document.getElementById("startButton").onclick = function() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("content").style.display = "block";

    let music = document.getElementById("music");
    if (music) music.play();

    let items = document.querySelectorAll(".item");
    let delay = 0;
    items.forEach(function(item) {
        setTimeout(function(){
            item.style.opacity = 1;
        }, delay);
        delay += 800;
    });
};
