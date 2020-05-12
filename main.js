const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

// elements complete
const scoreboard = {
	human: 0,
	computer: 0,
};

// to start game plus variable

function play(e) {
	restart.style.display = 'inline-block';  
	const humanChoice = e.target.id;
	const computerChoice = getComputerChoice();
	const winner = getWinner(humanChoice, computerChoice);
	showWinner(winner,computerChoice);
} 	 	 			

// Getting Computer logic
function getComputerChoice() {
	const rand = Math.random();
	if(rand < 0.33){
		return 'rock';
	} else if (rand <=0.63 ){
		return 'paper';
	} else {    
		return 'scissors'
	}
}

// Get Winner 
function getWinner (human, computer) {
	if (human === computer){
		return 'draw';
	} else if (human === 'rock') {
		if (computer === 'paper') {
			return 'computer';
		} else {
			return 'human';
		}
	} else if (human === 'paper'){
		if (computer === 'scissors') {
			return 'computer';
		} else {
			return 'human';
		}
	} else if (human === 'scissors'){
		if (computer === 'rock'){
			return 'computer';
		} else {
			return 'human';	
	}

}
}

function showWinner(winner,computerChoice){
	if (winner === 'human') {
		//inc human score
		scoreboard.human++;
		//show modal result 
		result.innerHTML = `<h1 class="text-win">You Win</h1>
		<i class= "fas fa-hand-${computerChoice} fa-10x"></i>
		<p>Computer chose <strong>${computerChoice}</strong></p>
		`;
	} else if (winner === 'computer') {
		//inc computer score
		scoreboard.computer++;
		//show modal result 
		result.innerHTML = `<h1 class="text-lose">You Lose</h1>
		<i class= "fas fa-hand-${computerChoice} fa-10x"></i>
		<p>Computer chose <strong>${computerChoice}</strong></p>
		`;
	} else {
		result.innerHTML = `<h1>Draw!</h1>
		<i class= "fas fa-hand-${computerChoice} fa-10x"></i>
		<p>Computer chose <strong>${computerChoice}</strong></p>
		`;
	}
	//Showing the Score
	score.innerHTML = `
	<p>human: ${scoreboard.human}</p>
	<p>computer: ${scoreboard.computer}</p>
`;

modal.style.display = 'block';
}

//Clear Modal
function clearModal(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
} 

//Restart Game
function restartGame() {
	scoreboard.human = 0;
	scoreboard.computer = 0;
	score.innerHTML = `
		<p>human:0 </p>
		<p>computer:0 </p>

	`;
}


// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play)); 
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

 