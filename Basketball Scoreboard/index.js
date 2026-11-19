let homeScore = 0;
let guestScore = 0;


function homeAdd1Points() {
    homeScore += 1;
    document.getElementById("home_score").textContent = homeScore;
}

function homeAdd2Points() {
    homeScore += 2;
    document.getElementById("home_score").textContent = homeScore;
}

function homeAdd3Points() {
    homeScore += 3;
    document.getElementById("home_score").textContent = homeScore;
}

function guestAdd1Points() {
    guestScore += 1;
    document.getElementById("guest_score").textContent = guestScore;

}
function guestAdd2Points() {
    guestScore += 2;
    document.getElementById("guest_score").textContent = guestScore;

}
function guestAdd3Points() {
    guestScore += 3;
    document.getElementById("guest_score").textContent = guestScore;

}
