const boxclick=document.getElementById('board')

const game = {
    State: 0,
    Turn: 'X',
    move: 0,
}

function isRowSame(r) {
    let row = Array.from(boxclick.children[0].children[r - 1].children)
    let winCondition = game.Turn + game.Turn + game.Turn
    if (row.map(item => item.textContent).join('') === winCondition){
        alert(" Game Over   ||   Winner =>  " + game.Turn)
    }

}

function boxClicked(r,c)
{
    game.move++;
    console.log('box clicked=' ,r,c);
    
    let click = boxclick.children[0].children[r-1].children[c-1]
    click.textContent=game.Turn
    // console.log(game.move)
    
    isRowSame(r)
     
    nextTurn()

    if (game.move === 9)
        alert("Game Over")

}




const playerSpan=document.getElementById('player')

function nextTurn(){

    if(game.Turn === 'X')
        game.Turn='O'
    else game.Turn='X'


    playerSpan.textContent=game.Turn

}