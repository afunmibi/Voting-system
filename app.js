
function submitvote(){
    let email = document.getElementById('email').value;
    let vote = document.getElementById('vote').value;

    // to check if the email has a vote
    if(localStorage.getItem(email)){
        alert('This email has already voted.');
    }else{
        // you can store the vote 
        localStorage.setItem(email, vote);
        alert('Your vote has been submitted successfully');
        updateResults();
    }
}
function updateResults(){
    let counts = {option1:0, option2:0, option3:0, option4:0};
    // count the vote
    for(let i=0; i<localStorage.length; i++){
        let key = localStorage.key(i);
        let vote = localStorage.getItem(key);
        // for string comparision please to get accurate result
        vote = vote.toLowerCase(); 
        // increment
        counts[vote]++;
        // console.log("Calculated counts:", counts);
    }
    // update the display result
    document.getElementById('option1Count').innerText = counts['option1']; 
    document.getElementById('option2Count').innerText = counts['option2']; 
    document.getElementById('option3Count').innerText = counts['option3']; 
    document.getElementById('option4Count').innerText = counts['option4']; 
}
// update the result when the page loads
updateResults();
  