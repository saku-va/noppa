var kuvat = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png"]

function heitto(){
    var num = Math.floor(Math.random() * 6);

    document.noppa.src = kuvat[num];
}