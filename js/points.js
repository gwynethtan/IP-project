// make userPoints accessible across all pages

// Your code, including the joinChallenge function
var userPointsElement = document.getElementById("userPoints"); //receiving original number put in  

var userPoints = parseInt(localStorage.getItem("userPoints")) || 700; //reset to 700 if its 0
//localStorage.removeItem("userPoints");
//set the localStorage 

//border color test
var userPoints = 3000; //reset to 700 if its 0

console.log (`user : ${userPoints}`);

//update points shown in screen 
userPointsElement.innerText = userPoints; 

var rewardProfile = document.getElementById("rewardProfile").querySelector('img');

if (userPoints>=3000 && userPoints<5000){
    rewardProfile.style.border = "3px solid #7A601D"; 
}
else if (userPoints>=5000 && userPoints<10000){
    rewardProfile.style.border = "3px solid #B7B7B7"; 
}

else if (userPoints>=10000){
    rewardProfile.style.border="3px solid #D5B255";
}


//test 
//var userPoints = localStorage.setItem("userPoints", originalPoints) && originalPoints;


// for other vouchers that are not clicked on but cannot be redeemed by user anyways due to insufficient points
 function checkRedeemable(){
    var allRewardsCols = document.querySelectorAll('.rewardsCol');
    allRewardsCols.forEach(function (rewardsCol) {
        var voucherImage = rewardsCol.querySelector('img');
        var claimButton = rewardsCol.querySelector('.colBtn1'); 
        var pointsRequired = parseInt(claimButton.getAttribute("data-points"));
        console.log ("hi");
        // change other vouchers' image and button color if cannot redeem
        if (userPoints < pointsRequired) {
            voucherImage.src = "Pictures/5.png";
            claimButton.style.backgroundColor = "grey"; 
        }
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
