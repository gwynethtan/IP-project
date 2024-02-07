//localStorage.removeItem("userPoints");

var userPointsElement = document.getElementById("userPoints"); //receiving original number put in  

var userPoints = parseInt(localStorage.getItem("userPoints")); //// make userPoints accessible across all pages
//localStorage.removeItem("userPoints");


console.log (`user : ${userPoints}`);

//update points shown in screen 
userPointsElement.innerText = userPoints; 

var rewardProfile = document.getElementById("rewardProfile").querySelector('img');
var rewardProfileImage = rewardProfile.src;

localStorage.setItem("rewardProfileImage", rewardProfileImage);
console.log(`${rewardProfileImage}`);

// Set initial border color in localStorage
var borderColor = "rgba(0, 0, 0, 0)"; // Default border color
localStorage.setItem("borderColor", borderColor);

function setBorderColor() {    
    // Determine the border color based on user points
    if (userPoints < 3000) {
        borderColor = "rgba(0, 0, 0, 0)";
    } else if (userPoints >= 3000 && userPoints < 5000) {
        borderColor = "#7A601D";
    } else if (userPoints >= 5000 && userPoints < 10000) {
        borderColor = "#B7B7B7";
    } else if (userPoints >= 10000) {
        borderColor = "#D5B255";
    }

    // Apply the border color to the rewardProfile
    rewardProfile.style.boxSizing = "border-box";
    rewardProfile.style.border = `4px solid ${borderColor}`; 
    console.log(`${borderColor}`);

    // Update the border color in localStorage
    localStorage.setItem("borderColor", borderColor);
}

setBorderColor();


//test 
//var userPoints = localStorage.setItem("userPoints", originalPoints) && originalPoints;


// for other vouchers that are not clicked on but cannot be redeemed by user anyways due to insufficient points
 function checkRedeemable(){
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

        //update border color
        setBorderColor();
    });
    }      
        
checkRedeemable() ;

function deductPoints(button) {
    var pointsToDeduct = parseInt(button.getAttribute("data-points"));
    if (userPoints >= pointsToDeduct) { // redemption points update
        userPoints -= pointsToDeduct;
        localStorage.setItem("userPoints", userPoints);
        console.log (`local storage ${userPoints}`);
        userPointsElement.innerText = userPoints; //automatically update

        // for other vouchers that are not clicked on but cannot be redeemed by user anyways due to insufficient points
        checkRedeemable() ;

    } else {
        console.log("Cannot claim since not enough points");
    }
}
