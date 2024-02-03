function deductPoints(button) {
    var pointsToDeduct = parseInt(button.getAttribute("data-points"));
    var userPointsElement = document.getElementById("userPoints");
    var userPoints = parseInt(userPointsElement.innerText);
    if (userPoints >= pointsToDeduct) { // redemption points update
        userPoints -= pointsToDeduct;
        userPointsElement.innerText = userPoints;

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
        console.log("Insufficient points to redeem");
    }
}
