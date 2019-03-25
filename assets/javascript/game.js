var counter = 0;
var totalWins = 0;
var totalLosses = 0;

$('#targetNumber').text(targetNumber); 
$(`#totalWins`).text(totalWins);
$(`#totalLosses`).text(totalLosses);
$(`#totalScore`).text(0);

// var numberOptions = [10, 5, 3, 7];

var numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)]

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $(`<img>`);
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", src = "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $(`#crystals`).append(" ", imageCrystal);
};;

$(`.crystal-image`).click(function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $(`#totalScore`).text(counter);
    if (counter === targetNumber) {
        alert("You win!");
        resetGame();
        totalWins++;
        $(`#totalWins`).text(totalWins) = totalWins;

    } else if (counter >= targetNumber) {
        alert("You lose!");
        resetGame();
        totalLosses++;
        $(`#totalLosses`).text(totalLosses) = totalLosses;

    } else(counter <= targetNumber); {
        console.log("Keep playing");
    }
});

function resetGame() {
    counter = 0;
    $(`#totalScore`).text(0);
    targetNumber = Math.floor(Math.random() * 120) + 19;
    $('#targetNumber').text(targetNumber); 
}