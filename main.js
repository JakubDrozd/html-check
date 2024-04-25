var no_button = document.getElementById("no");
var yes_button = document.getElementById("yes");
var main_text = document.getElementById("question");
var k = 0;

no_button.addEventListener("click", change);

yes_button.addEventListener("click", function(){
    this.textContent = "Yippie 🥳❤️"
    main_text.textContent = "Aww ja ciebie też!!! 🫂🥰❤️"
    changeImage();
    no_button.style.display = "none";
    yes_button.style.display = "none";
})

var lastText = "";

function change() {
    var i = Math.floor(Math.random()*window.innerWidth*0.25) +1;
    var j = Math.floor(Math.random()*window.innerHeight*0.25) +1;
    no_button.style.left = i+"px";
    no_button.style.top = j+"px";
    var texts = [
        "Na pewno?", 
        "Jesteś pewna?", 
        "No weź...", 
        "Ta druga opcja jest lepsza!", 
        "Pls :c",
        "Może jeszcze raz przemyśl?",
        "Naprawdę tak uważasz?",
        "A może jednak nie?",
        "Zastanów się dobrze!",
        "Czy na pewno to dobry wybór?",
        "Nie klikaj tak szybko!",
        "Pomyśl jeszcze raz, proszę",
        "Czy jesteś absolutnie pewna?",
        "Załóżmy, że nie...",
        "Ale dlaczego?"
    ];
    var text;
    do {
        text = texts[Math.floor(Math.random()*texts.length)];
    } while (text == lastText);
    no_button.textContent = text;
    lastText = text;
}

function changeImage() {
    if (document.getElementById("img-car").src == "https://ih1.redbubble.net/image.3278633080.6699/raf,360x360,075,t,fafafa:ca443f4786.jpg") {
        document.getElementById("img-car").src = "https://i.redd.it/vamy6d7ajfr81.jpg";
    }
}