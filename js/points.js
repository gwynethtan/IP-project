// make userPoints accessible across all pages
var userPointsElement = document.getElementById("userPoints"); //receiving original number put in  
var userPoints = parseInt(localStorage.getItem("userPoints")) || 700; //reset to 700 if its 0

//set the localStorage 

console.log (`user : ${userPoints}`);

//update points shown in screen 
userPointsElement.innerText = userPoints; 

//test 
//var userPoints = localStorage.setItem("userPoints", originalPoints) && originalPoints;


function deductPoints(button) {
    var pointsToDeduct = parseInt(button.getAttribute("data-points"));
    if (userPoints >= pointsToDeduct) { // redemption points update
        userPoints -= pointsToDeduct;
        localStorage.setItem("userPoints", userPoints);
        console.log (`local storage ${userPoints}`);
        userPointsElement.innerText = userPoints; //automatically update

        // for other vouchers that are not clicked on but cannot be redeemed by user anyways due to insufficient points
        var allRewardsCols = document.querySelectorAll('.rewardsCol');
        allRewardsCols.forEach(function (rewardsCol) {
            var voucherImage = rewardsCol.querySelector('img');
            var claimButton = rewardsCol.querySelector('.colBtn1'); 
            var pointsRequired = parseInt(claimButton.getAttribute("data-points"));

            // change other vouchers' image and button color if cannot redeem
            if (userPoints < pointsRequired) {
                voucherImage.src = "Pictures/5.png";
                claimButton.style.backgroundColor = "grey"; 
            }
        });
    } else {
        console.log("Cannot claim since not enough points");
    }
}

//add points to join competition
function joinChallenge (competitionPoint){
    userPoints+=competitionPoint;
    localStorage.setItem("userPoints", userPoints);
    console.log(`${userPoints}`);
    window.location.href = "sent.html";
}