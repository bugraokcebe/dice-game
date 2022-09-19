'use strict'

const P0Card = document.querySelector('.player--0')
const P1Card = document.querySelector('.player--1')
const P0Name = document.querySelector('#name--0')
const P1Name = document.querySelector('#name--1')
const P0Score = document.querySelector('#score--0')
const P1Score = document.querySelector('#score--1')
const P0Current = document.querySelector('#current--0')
const P1Current = document.querySelector('#current--1')

const zarGorsel = document.querySelector('.dice')
const buttonNew = document.querySelector('.btn--new')
const buttonRoll = document.querySelector('.btn--roll')
const buttonHold = document.querySelector('.btn--hold')
const button0Input = document.getElementById('birinci-oyuncu')
const button1Input = document.getElementById('ikinci-oyuncu')


let scores, currentScore, activePlayer, playing, deger 

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    P0Score.textContent = 0
    P1Score.textContent = 0
    P0Current.textContent = 0
    P0Current.textContent = 0

    zarGorsel.classList.add('hidden')
    P0Card.classList.add('player--active')
    P1Card.classList.remove('player--active')
}
init()

const playerDegistir = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0 ; 
    currentScore = 0 ;
    if(activePlayer == 0){
        activePlayer = 1;
        P0Card.classList.remove('player--active');
        P1Card.classList.add('player--active')
    }
    else{
        activePlayer = 0;
        P1Card.classList.remove('player--active');
        P0Card.classList.add('player--active') 
    }
}
const giris =function(){
    document.querySelector('.input-name').classList.remove('hidden')
    document.querySelector('#birinci-oyuncu').classList.remove('hidden')
    document.querySelector('#ikinci-oyuncu').classList.add('hidden')

}

buttonRoll.addEventListener('click',function(){
    if(playing){
        const dice = Math.trunc(Math.random() * 6) + 1

        zarGorsel.classList.remove('hidden');
        zarGorsel.src = `/img/zar--${dice}.png`;
        if(dice != 1){
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else{
            playerDegistir();
        }
    }
});

buttonHold.addEventListener('click', function(){
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        document.querySelector(`#name--${activePlayer}`).textContent = 'WONN!'
        document.querySelector(`.player--${activePlayer}`).classList.add('won')
    }
    else{
    
        playerDegistir();

    }

})

buttonNew.addEventListener('click', function(){
    document.querySelector(`#name--0`).textContent = '1.Oyuncu';
    document.querySelector(`.player--0`).classList.remove('won');
    document.querySelector(`#name--1`).textContent = '2.Oyuncu';
    document.querySelector(`.player--1`).classList.remove('won');

    giris();
    init();
})

button0Input.addEventListener('click', function(){
    if(document.querySelector('.input_id').value == ""){
       alert("Boş değer girilmez.")
    }
    else{
        document.querySelector(`#name--0`).textContent = document.querySelector('.input_id').value;
        document.querySelector('#birinci-oyuncu').classList.add('hidden')
        document.querySelector('#ikinci-oyuncu').classList.remove('hidden')
        }
})

button1Input.addEventListener('click',function(){
    if(document.querySelector('.input_id').value == ""){
       alert("Boş değer girilmez.")
    }
    else{
        document.querySelector(`#name--1`).textContent = document.querySelector('.input_id').value;
        document.querySelector('.input-name').classList.add('hidden')
        }
})