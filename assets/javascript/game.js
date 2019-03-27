var counter = 0;
var totalWins = 0;
var totalLosses = 0;

$(`#totalWins`).text(totalWins);
$(`#totalLosses`).text(totalLosses);
$(`#totalScore`).text(0);

var numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)]

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $(`<img>`);
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", src = "https://images.unsplash.com/photo-1551122087-f99a4ade46ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $(`#crystals`).append(" ", imageCrystal);
};

$(`.crystal-image`).click(function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $(`#totalScore`).text(counter);
    if (counter === targetNumber) {
        swal("You Win!", "I bet you have an IQ of 145...", "success");
        resetGame();
        totalWins++;
        $(`#totalWins`).text(totalWins) = totalWins;

    } else if (counter >= targetNumber) {
        swal("You Lose!", "Let's try this again shall we...", "error");
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
};