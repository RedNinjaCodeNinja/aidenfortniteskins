let pbVote=0;
let rrVote=0;
let cVote=0;
let bkVote=0;
let ssVote = 0;

function voteForPB(){
  pbVote++;
  document.getElementById("pbvote").innerHTML="Votes: " + pbVote; 
} 

function voteForRR(){
  rrVote++;
  document.getElementById("rrvote").innerHTML="Votes: " + rrVote;
} 

  function voteForC(){
  cVote++;
  document.getElementById("cvote").innerHTML="Votes: " + cVote; 
}

  function voteForBK(){
  bkVote++;
  document.getElementById("bkvote").innerHTML="Votes: " + bkVote;
} 

function voteForSS() {
  ssVote++;
  document.getElementById("ssvote").innerHTML = "Votes: " + ssVote;
} 