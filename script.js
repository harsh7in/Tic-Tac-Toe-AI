function boxClicked(r,c)
{
    console.log('box clicked=' ,r,c);
    nextTurn()
}


const game={
    State : 0,
    Turn : 'X'
}

const playerSpan=document.getElementById('player')

function nextTurn(){

    if(game.Turn === 'X')
        game.Turn='O'
    else game.Turn='X'


    playerSpan.textContent=game.Turn

}