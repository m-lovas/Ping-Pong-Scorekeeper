const maxScore = document.getElementById('maxScore');
let displayScore = document.querySelector('#displayScore'); 
const oneButton = document.querySelector('#oneButton')
const twoButton = document.querySelector('#twoButton')  
const resetButton = document.querySelector('#resetButton') 
let p1Span = document.getElementById('p1Span')
let p2Span = document.getElementById('p2Span')

let score1 = 0; 
let score2 = 0; 

oneButton.addEventListener('click', function(){
    if (score1 < maxScore.value && score2 != maxScore.value){
    score1++;
    // displayScore.innerText = `${score1} to ${score2}`
    p1Span.innerText = `${score1}`;
    }
    if(score1 == maxScore.value){
        p1Span.style.color = '#60cc63';
        p2Span.style.color = '#f53827';
    }
})

twoButton.addEventListener('click', function(){
    if (score2 < maxScore.value && score1 != maxScore.value){
    score2++;
    // displayScore.innerText = `${score1} to ${score2}`
    p2Span.innerText = `${score2}`
    }
    if(score2 == maxScore.value){
        p2Span.style.color = '#60cc63';
        p1Span.style.color = '#f53827';
    }
})

resetButton.addEventListener('click', function(){
  score1 = 0;
  score2 = 0; 
//   displayScore.innerText = `${score1} to ${score2}`
p1Span.innerText = `${score1}`
p2Span.innerText = `${score2}`

})
