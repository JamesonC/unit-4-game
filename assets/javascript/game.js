var targetNumber = 0;
var counter = 0; 
var totalWins = 0;
var totalLosses = 0;

// var targetNumber = Math.floor(Math.random() * 120) + 19;

$(`#totalWins`).text(totalWins);
$(`#totalLosses`).text(totalLosses);

var targetNumber = 30;
$('#targetNumber').text(targetNumber);

var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $(`<img>`);

    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $(`#crystals`).append(" ", imageCrystal);
};


$(`.crystal-image`).click(function() {
    counter += 10;
    $(`#totalScore`).text(counter);

    if (counter === targetNumber) {
        alert("You win!");
    } else if (counter >= targetNumber) {
        alert("You lose!");
    } else (counter <= targetNumber); {
        console.log("Keep playing");
    }

});
