document.addEventListener("DOMContentLoaded", function () {

    // getting required variables for left side of post
    const urlParams = new URLSearchParams(window.location.search);
    const modelID = decodeURIComponent(urlParams.get("?modelID"));
    const embeddedModel = decodeURIComponent(urlParams.get("embeddedModel"));
    const profilePicture = decodeURIComponent(urlParams.get("profilePicture"));
    const modelQn = decodeURIComponent(urlParams.get("modelQn"));
    const caption = decodeURIComponent(urlParams.get("caption"));

    console.log("model ID:", modelID);
    console.log("Embedded model :", embeddedModel);
    console.log("Profile Picture:", profilePicture);
    console.log("Title:", modelQn);
    console.log("Caption:", caption);

    // display content on screen
    fetchModelDetails(modelID,embeddedModel,profilePicture,modelQn,caption);

    //for user to input in comments
    document.getElementById("userInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            console.log("Enter key pressed");
            var commentItem = this.value.trim(); //remove any accidental whitespace 
            //ensure comment has content 
            if (commentItem !== "") { 
                // Get the current page URL
                let currentPageUrl = window.location.href;
    
                // Retrieve existing comments for the current page from local storage based on the unique url
                let pageComments = JSON.parse(localStorage.getItem('comments_' + currentPageUrl)) || [];

                // Keep the new comments back in local storage
                pageComments.push(commentItem); 
                localStorage.setItem('comments_' + currentPageUrl, JSON.stringify(pageComments));
    
                updateComments(pageComments);
                this.value = ""; // Clear the textarea after user submit
            }
        }
    });
});

// write content for the comments created by the users
function updateComments(comments) {
    let commentsHTML = '';
    var rewardProfileImageURL =localStorage.getItem("rewardProfileImage");
    console.log(`${rewardProfileImageURL}`);

    //ensure border color of profile picture shown 
    var borderColor =localStorage.getItem("borderColor");
    console.log(`${borderColor}`);

    for (const comment of comments) {
        // HTML for each comment, updated with new inputs 
        commentsHTML += `
            <div class="commentArea">
                <div class="areaProfile">
                    <div class="areaProfilePicPadding">
                        <img src="${rewardProfileImageURL}" style="box-sizing: border-box; border: 3px solid ${borderColor}">
                    </div>
                    <div class="areaProfileName">
                        <h1>You</h1>
                    </div>
                </div>
                <div class="areaDetails">
                    <h1>
                        <div class="commentMessage">
                            ${comment}
                        </div>
                    </h1>
                </div>
            </div>`;
    }

    // Update comment
    document.getElementById("allUploadedComments").innerHTML = commentsHTML;
}

// Function to retrieve and display comments when the page reloads
function displayComments() {
    let currentPageUrl = window.location.href;
    // Retrieve existing comments for the current page from local storage
    let pageComments = JSON.parse(localStorage.getItem('comments_' + currentPageUrl)) || [];
    updateComments(pageComments);
}

//display comments on screen
displayComments();

//validate whether it is code or actual ID
function isCode(modelID) {
    const codeRegex = /[\{\}\[\]\(\);,=+\-*\/%<>\&\|\^!~]/;
    return codeRegex.test(modelID);
  }

  // create the content for what the comments are going to discuss about
function fetchModelDetails(modelID,embeddedModel,profilePicture,modelQn,caption) {
    var rewardProfileImageURL =localStorage.getItem("rewardProfileImage");
    var borderColor =localStorage.getItem("borderColor");

    // test whether input is code from uploadQNA form
    if (isCode(modelID)) {
        console.log("The modelID contains code.");

        //insert html for left side content from gallery page 
        document.getElementById("commentPicture").innerHTML += `                
        <div class="commentPictureProfile">
            <span class="commentPictureProfilePadding">
                <img src="${rewardProfileImageURL}" style="box-sizing: border-box; border: 3px solid ${borderColor}">
            </span>
            <h1>${modelQn}</h1>
        </div>
        
        <!-- SketchFeb -->
        <div class="commentPictureImage">
            <div class="sketchfab-embed-wrapper">
            <div id="commentModel"> </div>
            </div>
        </div>

        <div class="commentPictureComment">
            <h1>${caption}</h1>
        </div>
        `
        document.getElementById("commentModel").innerHTML = modelID;

        // special deco for right side of page as user cannot comment on their own post 
        document.getElementById("allComments").innerHTML = `
        <div class=nullCommentProperty>
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

            <dotlottie-player src="https://lottie.host/6ce8a0f7-ab03-4f34-a7c6-cef3a0d46938/YZWdSI1qWu.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>  
        </div>
        <p class=nullCommentProperty> No comments available. You cannot comment on your post.<p>
        `;
      } 
    else {
        //insert html for left side content from gallery page 
        console.log("The modelID does not appear to contain code.");
        document.getElementById("commentPicture").innerHTML += `                
        <div class="commentPictureProfile">
            <span class="commentPictureProfilePadding"><img src="${profilePicture}"></span>
            <h1>${modelQn}</h1>
        </div>
        
        <!-- SketchFeb -->
        <div class="commentPictureImage">
            <div class="sketchfab-embed-wrapper">
            <iframe src="${embeddedModel}" allow="autoplay; fullscreen; vr" frameborder="0"></iframe>
            </div>
        </div>

        <div class="commentPictureComment">
            <h1>${caption}</h1>
        </div>
        `

        //insert html for the area where user can type in comments
        document.getElementById("comment").innerHTML=
            `
            <div class="commentImage">
                <img src="${rewardProfileImageURL}" style="box-sizing: border-box; border: 3px solid ${borderColor}">
            </div>
    
            <div class="commentDetails">
                <h1>You</h1>
                <textarea id="userInput" placeholder="Type your comment..."></textarea>
            </div>
            `

        //calling api for comments from post 
        const apiBaseUrl = "https://api.sketchfab.com/v3/comments";
        const apiKey = "4351796cf6b8414498e5db4f437be245"; 

        const apiUrl = `${apiBaseUrl}?model=${modelID}`;
        const headers = {
            Authorization: `Bearer ${apiKey}`
        };

        fetch(apiUrl, { headers })
        .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
                })

                .then(modelData => {
                const commentList=modelData.results;
                console.log("list:", commentList);
                let eachCommentHTML='';

                for (const eachComment of commentList) {
                    const commenter=eachComment.user.username; 
                    const commenterProfilePicture=eachComment.user.avatar.images[0].url;
                    const commentItem=eachComment.body;
                  
                    console.log(`Commenter: ${commenter}`);
                    console.log(`Commenter Profile Picture: ${commenterProfilePicture}`);
                    console.log(`Comment item: ${commentItem}`);

                    // insert comments in html 
                    eachCommentHTML+=
                    `<div class="commentArea">
                    <div class="areaProfile">
                        <div class="areaProfilePicPadding">
                            <img src=${commenterProfilePicture}>
                        </div>

                        <div class="areaProfileName">
                            <h1>${commenter}</h1>
                        </div>
                        <div class="areaProfileIcons" onclick="upvotePoints(this)">
                            <img src="../Pictures/Comment - Upvote Icon.png">
                            <h3 class="upvoteCount">0</h3>
                        </div>
                    </div>
                    <div class="areaDetails">
                        <h1>
                            <div class="commentMessage">
                                ${commentItem}
                            </div>
                        </h1>
                    </div>
                </div>`
                }

                document.getElementById("allComments").innerHTML = eachCommentHTML;
            
                })
                .catch(error => {
                console.error(`Fetch error for model ID ${modelID}:`, error);
            });
    }
}

//function for upvote count when upvote button is clicked
function upvotePoints(button){
    var upvoteCountElement = button.querySelector(".upvoteCount");
    var upvoteCount = 1;
    upvoteCountElement.innerText = upvoteCount;
}