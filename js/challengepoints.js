function joinChallenge (competitionPoint){
    event.preventDefault();
    console.log("lol");
    var userPoints = parseInt(localStorage.getItem("userPoints"));
    console.log(`${userPoints}`);
    userPoints+= parseInt(competitionPoint);
    localStorage.setItem("userPoints", userPoints);
    console.log(` ${userPoints}`);
    window.location.href = "sent.html";
    
}

//redirct to sent page 
//function challengeDirect ()
//{ window.location.href = "sent.html";}
