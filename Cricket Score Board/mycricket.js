let outputCount = 0;
let ballCount = 0;
let totalRuns = 0;
let currentOver = 0;
let ballsInOver = 0;
let foursInOver = 0;
let sixesInOver = 0;
let wicketsInOver = 0;


const runsPerOver = [];

function moving() {
    ball = document.getElementById("ballmove");
    ball.style.transform = "rotate(360deg)";
    setTimeout(() => {
        ball.style.transform = "rotate(0deg)";
        highlightAndDisplay();
    }, 1000);
}

function getRandomElement(elements) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex];
}

function highlightAndDisplay() {
    const runButtons = document.querySelectorAll('.run');
    const extButtons = document.querySelectorAll('.ext');
    const allButtons = [...runButtons, ...extButtons];
    const randomButton = getRandomElement(allButtons);

    allButtons.forEach(button => button.style.backgroundColor = '');
    randomButton.style.backgroundColor = 'red';

    const scoreInput = document.getElementById('scoreInput');
    scoreInput.value += (scoreInput.value ? ', ' : '') + randomButton.value;

    outputCount++;

    if (randomButton.value === 'Wide' || randomButton.value === 'No Ball') {
        ballCount--; 
        totalRuns += 1; 
    } else if (randomButton.value === 'Bye' || randomButton.value === 'Leg Bye') {
        totalRuns += 0; 
    } else if (randomButton.value === 'W') {
        wicketsInOver++; 
    } else {
        const runs = parseInt(randomButton.value);
        totalRuns += runs;
        if (runs === 4) {
            foursInOver++; 
        } else if (runs === 6) {
            sixesInOver++; 
        }
    }

    ballCount++;
    ballsInOver++;

    const runsInputs = document.querySelectorAll('.runs');
    const ballsInputs = document.querySelectorAll('.balls');
    const foursInputs = document.querySelectorAll('.four');
    const sixesInputs = document.querySelectorAll('.six');
    const wicketsInputs = document.querySelectorAll('.wicket');

    runsInputs[currentOver].value = totalRuns;
    ballsInputs[currentOver].value = ballsInOver;
    foursInputs[currentOver].value = foursInOver;
    sixesInputs[currentOver].value = sixesInOver;
    wicketsInputs[currentOver].value = wicketsInOver;

    runsPerOver[currentOver] = totalRuns;

    if (ballCount >= 6) {
        scoreInput.value = '';
        ballCount = 0;
        ballsInOver = 0;
        foursInOver = 0;
        sixesInOver = 0;
        wicketsInOver = 0;
        outputCount = 0;
        totalRuns = 0; 
        currentOver++;

        
        if (currentOver >= runsInputs.length) {
            scoreInput.value = 'Game Over';
            document.getElementById('ballBtn').disabled = true; 

            const totalFirst2Overs = runsPerOver.slice(0, 2).reduce((acc, runs) => acc + (runs || 0), 0);
            const totalLast2Overs = runsPerOver.slice(-2).reduce((acc, runs) => acc + (runs || 0), 0);

            document.querySelector('.totala').value = totalFirst2Overs;
            document.querySelector('.totalb').value = totalLast2Overs;
        }
    }
}
document.getElementById('ballBtn').addEventListener('click', highlightAndDisplay);
document.getElementById('winner').addEventListener('click', function () {
    const team1Score = parseInt(document.querySelector('.totala').value) || 0;
    const team2Score = parseInt(document.querySelector('.totalb').value) || 0;

    if (team1Score > team2Score) {
        alert('Team 1 Wins!');
    } else if (team2Score > team1Score) {
        alert('Team 2 Wins!');
    } 
    else if(team1Score ==0|| team2Score==0) {
        alert("Data not found")
    }
    else{
        alert("It's a Tie!");
    }
});