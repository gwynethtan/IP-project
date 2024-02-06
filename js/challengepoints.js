function joinChallenge (competitionPoint){
    event.preventDefault();
    var userPoints = parseInt(localStorage.getItem("userPoints"));
    console.log(`${userPoints}`);
    userPoints+= parseInt(competitionPoint);
    //update local storage for points
    localStorage.setItem("userPoints", userPoints);
    console.log(` ${userPoints}`);
    //redirect to sent page
    window.location.href = "sent.html";
}

//redirct to sent page 
//function challengeDirect ()
//{ window.location.href = "sent.html";}
