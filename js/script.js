const apiBaseUrl = "https://api.sketchfab.com/v3/models/";
const apiKey = "4351796cf6b8414498e5db4f437be245"; // Replace with your actual Sketchfab API key

const modelIds = [
  "cacfc7474a604ed4b0275b8a3293eff6", "266316c0b16e4bf8abf7f8274e33deec", "d80bb55a259642d897e31bc038e1c396"
  // Add more model IDs as needed
];

function fetchModelDetails(modelId) {
  const apiUrl = `${apiBaseUrl}${modelId}`;
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
      // Accessing specific information from the model data
      const modelQn = modelData.name;
      const profilePicture = modelData.user.profileUrl; // Assuming you want the first image in the avatar
      const caption = modelData.description;

      // Example: Log model details to the console
      console.log(`Model Name: ${modelQn}`);
      console.log(`Profile Picture: ${profilePicture}`);
      console.log(`Description: ${caption}`);
      
      document.body.innerHTML += `
      <div class="columnOne">
      <!--Post One-->
      <div class="postColumnOne">
        <div class="postProfile">
          <img src="${profilePicture}" />
          <h1>${modelQn}</h1>
        </div>
  
        <div class="postImage">
          <div class="sketchfab-embed-wrapper">
            <iframe
              title="IG manager_turntable"
              frameborder="0"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/9c3298aac6334509ae3e4366a1ae7107/embed"
            ></iframe>
          </div>
        </div>
  
        <div class="postIcons">
          <img src="Pictures/Home - Heart Icon.png" />
          <a href="comment.html">
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
      // Use the data as needed in your application
      // You can update your UI, perform calculations, etc.
    })
    .catch(error => {
      console.error(`Fetch error for model ID ${modelId}:`, error);
    });
}

// Loop through the list of model IDs and fetch details for each
modelIds.forEach(modelId => {
  fetchModelDetails(modelId);
});
