const boxclick=document.getElementById('board')

const game = {
    State: 0,
    Turn: 'X',
    move: 0,
}

function boxClicked(r,c)
{
    game.move++;
    console.log('box clicked=' ,r,c);
    nextTurn()
    let click = boxclick.children[0].children[r-1].children[c-1]
    click.textContent=game.Turn
    // console.log(game.move)
    if(game.move===9)
        alert("Game Over")

}




const playerSpan=document.getElementById('player')

function nextTurn(){

    if(game.Turn === 'X')
        game.Turn='O'
    else game.Turn='X'


    playerSpan.textContent=game.Turn

}