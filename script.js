const btnNewGame= document.querySelector('.btn--new');
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
const diceImg=document.querySelector('.dice');
let current=0;
let active=0;
let score=[0,0]
let works=true;
btnRoll.addEventListener('click',()=>{
    if(works){
    let random=Math.trunc(Math.random()*6+1);
    console.log(random)
    diceImg.src=`dice-${random}.png`
    if(random!=1){
        current+=random;
        document.getElementById(`current--${active}`).textContent=current;
        
    }
    else{
        current=0;
        document.getElementById(`current--${active}`).textContent=current;
        document.querySelector(`.player--${active}`).classList.remove('player--active');
        active= active==0 ?  1 : 0;
        document.querySelector(`.player--${active}`).classList.add('player--active');
    }
    }
})
btnHold.addEventListener('click',()=>{
    if(works){
    score[active] +=current;
    document.querySelector(`#score--${active}`).textContent=score[active];
    current=0;
    document.getElementById(`current--${active}`).textContent=current;
    document.querySelector(`.player--${active}`).classList.remove('player--active');
    if(score[active]>=20){
        works=false
        document.querySelector(`.player--${active}`).classList.add('player--winner');
    }
    active= active==0 ?  1 : 0;
    document.querySelector(`.player--${active}`).classList.add('player--active');
    }   
})
btnNewGame.addEventListener('click',()=>{
    current=0;
    active=0;
    score=[0,0]
    works=true;
    document.getElementById(`current--0`).textContent=0;
    document.getElementById(`current--1`).textContent=0;
    document.querySelector(`#score--0`).textContent=0;
    document.querySelector(`#score--1`).textContent=0;
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--${active}`).classList.toggle('player--winner');

})
