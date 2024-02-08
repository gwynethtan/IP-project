document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65c24c7c71a488f94c8b0699";

    //what to do when button is clicked
    document.getElementById("contactBtn").addEventListener("click", function (e) {
      // Prevent default action of the button 
      e.preventDefault();
  
      //get user input data for the contact form 
      let contactName = document.getElementById("contactName").value;
      let contactEmail = document.getElementById("contactEmail").value;
      let contactDescrip = document.getElementById("contactDescrip").value;
  
      //Get form values when the user clicks on send
      let jsondata = {
        "name": contactName,
        "email": contactEmail,
        "description": contactDescrip
      };
  
      //Create AJAX settings.
      let settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(jsondata),
        beforeSend: function () {
          document.getElementById("contactBtn").disabled = true;
          // Clear our form using the form ID and triggering its reset feature
          document.getElementById("contactForm").reset();
        }
      }

        // Check whether data successfully in restDB
        fetch("https://ipproject-d38f.restdb.io/rest/contact", settings)
            //inform problem with network
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                document.getElementById("contactBtn").disabled = false;
                // Inform user it is a sucess
                window.location.href = "sent.html";
            })
            //inform problem with input
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                alert("There was an error processing your request. Please try again later or check if input in the valid data.");
                document.getElementById("contactBtn").disabled = false;
            });
    });
});