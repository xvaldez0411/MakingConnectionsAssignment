console.log("connected to js");

var user = document.querySelector("#firstlast");
var numberOne = document.querySelector("#number-requests");
var numberTwo = document.querySelector("#number-connections");

function changeName() {
    user.innerText = "John Wick";

    var image = document.getElementById("picc");

    if (image.src.match("img/jane-m.jpg")) {
        image.src = "img/johnwick.jpg";
    }

    var location = document.querySelector("#city");
    location.innerText = "New York";

    var information = document.querySelector("#bio-info");
    information.innerText = "BoogeyMan | Babayaga | Master Assassin | Master Marksman | Stealth | Intimidation";
}

function accept(id) {
    var x = document.querySelector(id);
    x.remove();
    numberOne.innerText--;
    numberTwo.innerText++;
}

function ignore(id) {
    var x = document.querySelector(id);
    x.remove();
    numberOne.innerText--;
}


