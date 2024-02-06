function joinChallenge (competitionPoint){
    event.preventDefault();
    var userPoints = parseInt(localStorage.getItem("userPoints"));
    console.log(`${userPoints}`);
    userPoints+= parseInt(competitionPoint);
    var borderColor =localStorage.getItem("borderColor");
    if (borderColor=="#7A601D"){userPoints+=1;}
    else if(borderColor=="#B7B7B7") {userPoints+=2;}
    else if (borderColor=="#D5B255"){userPoints+=3;}
    //update local storage for points
    localStorage.setItem("userPoints", userPoints);
    console.log(` ${userPoints}`);
    //redirect to sent page
    window.location.href = "sent.html";
}

//redirct to sent page 
//function challengeDirect ()
//{ window.location.href = "sent.html";}
