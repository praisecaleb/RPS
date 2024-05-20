
function rock(){

    const randomNumber= Math.floor(Math.random()*3);

    if (randomNumber==0){
        var youWin = document.getElementById('alert').innerHTML="its a tie";
        var data = document.getElementById('tieId').innerHTML ++;
    }
    else if(randomNumber==1){
        var youLose = document.getElementById('alert').innerHTML="you lose";
        var dataOne = document.getElementById('loseId').innerHTML ++;
    }
    else if(randomNumber==2){
        var youWin = document.getElementById('alert').innerHTML="you Win";
        var dataTwo = document.getElementById('winId').innerHTML ++;
    }
    
}

function paper(){

    const randNumber=(Math.floor(Math.random()*3));
    
    if (randNumber==0){
        var youWin = document.getElementById('alert').innerHTML="you Win";
        var dataTwo = document.getElementById('winId').innerHTML ++;
    }
    else if(randNumber==1){
        var youWin = document.getElementById('alert').innerHTML="its a tie";
        var data = document.getElementById('tieId').innerHTML ++;
    }
    else if(randNumber==2){
        var youLose = document.getElementById('alert').innerHTML=" you lose";
        var dataOne = document.getElementById('loseId').innerHTML ++;
    }
}
    
function scissors(){
    
    const randNum=(Math.floor(Math.random()*3));
    
    if (randNum==0){
        var youLose = document.getElementById('alert').innerHTML="you lose";
        var dataOne = document.getElementById('loseId').innerHTML ++;
    }
    else if(randNum==1){
        var youWin = document.getElementById('alert').innerHTML="you Win";
        var dataTwo = document.getElementById('winId').innerHTML ++;
    }
    else if(randNum==2){
        var youWin = document.getElementById('alert').innerHTML="its a tie";
        var data = document.getElementById('tieId').innerHTML ++;
    }
}

function resetValue(){
    document.getElementById('loseId').innerHTML= 0;
    document.getElementById('winId').innerHTML= 0;
    document.getElementById('tieId').innerHTML= 0;
}