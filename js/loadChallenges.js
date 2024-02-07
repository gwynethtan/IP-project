document.addEventListener("DOMContentLoaded", () => {
  // Retrieve all challenges from localStorage and display
  let challenges = JSON.parse(localStorage.getItem("challenges")); //get challenges
  if (!challenges) return;
  const uploadedChallenges = document.getElementById("uploadedChallenges");

  //determine image color
  challenges.reverse().forEach((challenge) => {
    let imageLink;
    switch (challenge.level) {
        case "easy":
            imageLink = "../Pictures/Challenge - Green.png"
            break;
        case "intermediate":
            imageLink = "../Pictures/Challenge - Orange.png"
            break;
        case "advance":
            imageLink = "../Pictures/Challenge - Red.png"
            break;
    };

    uploadedChallenges.innerHTML += `                
        <div class="challengeColumnOne">

        <div class="leftFeed">

            <div class="leftFeedProfile">
                <img src="${imageLink}">
                <h2>${challenge.challengeTitle}</h2>
            </div>

            <div class="leftFeedImage">
                <img src="${challenge.challengeLink}">
            </div>      

        </div>

        <div class="rightFeed">

            <div class="rightFeedDetails">
                <h1>Details:</h1>
                <h2>${challenge.challengeCaption}</h2>
            </div>

            <div class="rightFeedSmallDetails">
                <h3>Members Needed: ${challenge.membersInvolved}/${challenge.membersTotal}</h3>
                <h4>By ${challenge.challengeDate}</h4>
            </div>

        </div>
    </div>
</div>`;
  });
});
