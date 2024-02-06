
document.addEventListener("DOMContentLoaded", function submitChallengeForm() {
    const challengeTitle = localStorage.getItem("challengeTitle");
    const challengeLink = localStorage.getItem("challengeLink");
    const challengeCaption = localStorage.getItem("challengeCaption");
    const membersTotal = localStorage.getItem("membersTotal"); 
    const membersInvolved = localStorage.getItem("membersInvolved"); 
    const challengeDate = localStorage.getItem("challengeDate"); 
    const level = localStorage.getItem("level"); 

    //updating levelPic by image
    var levelPic="";
    if (level=="easy"){
        levelPic="Pictures/Challenge - Green.png";
    }
    else if (level=="intermediate"){
        levelPic="Pictures/Challenge - Orange.png";
    }
    else{
        levelPic="Pictures/Challenge - Red.png";
    }

    //to ensure formating of post available when inputs from uploadQNA is avail
    if (challengeTitle&&challengeLink&&membersTotal&&membersInvolved&&challengeDate&&level){

        //testing posting two posts 
        const container = document.createElement("div");
        container.classList.add("challengeColumnOne");

        container.innerHTML = `
            <div class="leftFeed">
                <div class="leftFeedProfile">
                    <img src="${levelPic}">
                    <h2>${challengeTitle}</h2>
                </div>
                <div class="leftFeedImage">
                    <img src="${challengeLink}">
                </div>
            </div>
            <div class="rightFeed">
                <div class="rightFeedDetails">
                    <h1>Details:</h1>
                    <h2>${challengeCaption}</h2>
                </div>
                <div class="rightFeedSmallDetails">
                    <h3>Current members involved: ${membersInvolved}/${membersTotal}</h3>
                    <h4>By ${challengeDate}</h4>
                </div>
            </div>
        `;

        document.body.appendChild(container);
        
        ;}
    });