var no_button = document.getElementById("no");
var yes_button = document.getElementById("yes");
var main_text = document.getElementById("question");
var k = 0;

no_button.addEventListener("click", change);
no_button.addEventListener("mouseover", change);

yes_button.addEventListener("click", function(){
    this.textContent = "Yippie 🥳❤️"
    main_text.textContent = "Aww ja ciebie też!!! 🫂🥰❤️"
    changeImage();
})

function change() {
    var i = Math.floor(Math.random()*150) +1;
    var j = Math.floor(Math.random()*150) +1;
    no_button.style.left = i+"px";
    no_button.style.top = j+"px";
    var texts = ["Na pewno?", "Jesteś pewna?", "No weź...", "Ta druga opcja jest lepsza!", "Pls :c"];
    if (k < texts.length) {
        no_button.textContent = texts[k++];
    }else{
        no_button.style.display = "none";
    }
}

function changeImage() {
    if (document.getElementById("img-car").src == "https://ih1.redbubble.net/image.3278633080.6699/raf,360x360,075,t,fafafa:ca443f4786.jpg") {
        document.getElementById("img-car").src = "https://i.redd.it/vamy6d7ajfr81.jpg";
    }
}