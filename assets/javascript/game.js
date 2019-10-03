//create wins
var win = 0;

//create loss
var losses = 0;

//create number to reach to win
var winningNum = Math.floor(Math.random() * 60) + 30;

$("#win-points").text(winningNum);

var counter = 0;
$("#img-score").text(counter);
var imageValue;
var randomNumber;

//array of images to put in html
var pictures = ["assets/images/big-crystal.png",
    "assets/images/Crystal_alliance.png",
    "assets/images/crystal.png",
    "assets/images/Premium_Hero_Crystal.png"]



var startGame = function () {
    // for loop to display images in pictures array 
    for (var j = 0; j < pictures.length; j++) {

        $(".image").empty();
        var image = $("<img>");
        //add class of image to img tag
        image.addClass("image");
        //img tag has a src of each image in array
        image.attr("src", pictures[j]);
        //creating random number
        var randomNumber = Math.floor(Math.random() * 12) + 1;
        //creating attribute to img tag allowing it to have a value of randomNumber
        image.attr({
            "data-number": randomNumber
        })
        console.log(randomNumber);
        //putting pictures into html
        $("#picture-wrapper").append(image);

    }

}
var resetImage = function () {
    $(".image").each(function () {
        randomNumber = Math.floor(Math.random() * 12) + 1;
        $(this).attr({
            "data-number": randomNumber
        });
        console.log(randomNumber);
    })
}


var reset = function () {
    counter = 0;
    winningNum = Math.floor(Math.random() * 60) + 30;
    $("#win-points").text(winningNum);
    resetImage();
}
startGame();
//on click function when clicking on an image
$(".image").on("click", function () {
    // creating a variable making the random niumber an actual number
    imageValue = parseInt($(this).attr("data-number"));
    console.log(imageValue);
    //adding the image value to counter
    counter = imageValue + counter;
    console.log(counter);
    $("#img-score").text(counter);


    if (winningNum < counter) {
        losses++;
        counter = 0;
        console.log("lost " + losses);
        reset();
        console.log("reset");;
    }

    if (counter === winningNum) {
        win++;
        console.log("wins " + win);
        alert("Good Job you won!!")
        reset();
        console.log("reset");;
    }
    $("#wins").text(win);
    $("#lose").text(losses);
})






