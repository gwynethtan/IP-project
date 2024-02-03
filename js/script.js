const apiBaseUrl = "https://api.sketchfab.com/v3/models/";
const apiKey = "4351796cf6b8414498e5db4f437be245"; 

//list of models 
const modelIDs = [
  "d9a2d94179384803af7456d633283496", "266316c0b16e4bf8abf7f8274e33deec", "d80bb55a259642d897e31bc038e1c396"
];

//get variables from the uploadQNA
document.addEventListener("DOMContentLoaded", function submitForm() {
  const modelQn = localStorage.getItem("title");
  const caption = localStorage.getItem("caption");
  const modelID = localStorage.getItem("modelID"); 
  const profilePicture="https://media.sketchfab.com/avatars/78fa317e46024a5283765aa34df5e508/17fa177ffaa344a2b2fc8e78efd40fbb.jpeg"
  //code test 
  console.log(`Model Name: ${modelQn}`);
  console.log(`Description: ${caption}`);
  console.log(`Code: ${modelID}`);

  //to ensure formating of post available when inputs from uploadQNA is avail
  if (modelQn && caption && modelID){
  document.body.innerHTML += `
      <div class="columnOne">
        <!--Post One-->
        <div class="postColumnOne">
          <div class="postProfile">
            <div class="profilePicPadding">
            <img src=${profilePicture}>
            </div> 
            <h1>${modelQn}</h1>
          </div>
    
          <div class="postImage">
            <div class="sketchfab-embed-wrapper">
            <div id="galleryModel"> </div>
            </div>
          </div>
    
          <div class="postIcons">
            <span class="likeAction"  onclick="toggleLike(this)"><img src="Pictures/Home - Heart Icon.png" /></span>
            <a href="comment.html??modelID=${encodeURIComponent(modelID)}&embeddedModel=${encodeURIComponent(modelID)}&profilePicture=${encodeURIComponent(profilePicture)}&modelQn=${encodeURIComponent(modelQn)}&caption=${encodeURIComponent(caption)}">
              <img src="Pictures/Home - Comment Icon.png" />
            </a>
          </div>
    
          <div class="postComment">
            <h1>
            ${caption}
            </h1>
          </div>
        </div>
      </div>
    </div>
      `;
    
    //add in embeded code from uploadQNA to QNA
    document.getElementById("galleryModel").innerHTML = modelID;
    ;}
});

function fetchModelDetails(modelIDEach) {
  const apiUrl = `${apiBaseUrl}${modelIDEach}`;
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
      // assigning variables
      const modelID=modelData.uid;
      const modelQn = modelData.name;
      const profilePicture = modelData.user.avatar.images[1].url; // Assuming you want the first image in the avatar
      const caption = modelData.description;
      const embeddedModel = modelData.embedUrl;

      // test model data 
      console.log(`model ID: ${modelID}`);
      console.log(`Model QN: ${modelQn}`);
      console.log(`Profile Picture: ${profilePicture}`);
      console.log(`Description: ${caption}`);
      console.log(`embedModel: ${embeddedModel}`);
      
      document.body.innerHTML += `
      <div class="columnOne">
        <!--Post One-->
        <div class="postColumnOne">
          <div class="postProfile">
            <div class="profilePicPadding">
            <img src="${profilePicture}">
            </div> 
            <h1>${modelQn}</h1>
          </div>
    
          <div class="postImage">
            <div class="sketchfab-embed-wrapper">
            <iframe src="${embeddedModel}" allow="autoplay; fullscreen; vr" frameborder="0"></iframe>
            </div>
          </div>
    
          <div class="postIcons">
            <span class="likeAction"  onclick="toggleLike(this)"><img src="Pictures/Home - Heart Icon.png" /></span>
            <a href="comment.html??modelID=${modelID}&embeddedModel=${embeddedModel}&profilePicture=${encodeURIComponent(profilePicture)}&modelQn=${encodeURIComponent(modelQn)}&caption=${encodeURIComponent(caption)}">
              <img src="Pictures/Home - Comment Icon.png" />
            </a>
          </div>
    
          <div class="postComment">
            <h1>
            ${caption}
            </h1>
          </div>
        </div>
      </div>
    </div>
      `;

    })
    .catch(error => {
      console.error(`Fetch error for model ID ${modelIDEach}:`, error);
    });
}

// Loop through to access each model data 
modelIDs.forEach(modelIDEach => {
  fetchModelDetails(modelIDEach);
});