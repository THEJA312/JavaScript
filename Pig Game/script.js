'use strict';

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

diceEl.classList.add('hidden');

let activePlayer = 0;
let currentScore = 0;
let scores = [0,0];
let gameActive = 1;


function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    //switch the player
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}

btnRoll.addEventListener('click', function () 
{
    if(gameActive)
    {
        //generate a random number
        let dice = Math.trunc(Math.random()*6) + 1;
        diceEl.src = `dice-${dice}.png`;
        diceEl.classList.remove('hidden');

        if(dice !== 1)
        {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else switchPlayer();
    }
    
});

btnHold.addEventListener('click', function () 
{
    if(gameActive)
    {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 20)
        {
            gameActive = 0;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        }
        else
        switchPlayer();
    }
    
});

btnNew.addEventListener('click', function () 
{
    diceEl.classList.add('hidden');

    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');

    activePlayer = 0;

    currentScore = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    scores = [0,0];
    score0.textContent = 0;
    score1.textContent = 0;

    gameActive = 1;
    
});
