const boxclick=document.getElementById('board')

let space = [
    boxclick.children[0].children[0].children[0],
    boxclick.children[0].children[0].children[1],
    boxclick.children[0].children[0].children[2],
    boxclick.children[0].children[1].children[0],
    boxclick.children[0].children[1].children[1],
    boxclick.children[0].children[1].children[2],
    boxclick.children[0].children[2].children[0],
    boxclick.children[0].children[2].children[1],
    boxclick.children[0].children[2].children[2],
]

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

function isColSame(c) {
    let col = [
        boxclick.children[0].children[0].children[c - 1],
        boxclick.children[0].children[1].children[c - 1],
        boxclick.children[0].children[2].children[c - 1],
    ]
    let winCondition = game.Turn + game.Turn + game.Turn
    if (col.map(item => item.textContent).join('') === winCondition) {
        alert(" Game Over   ||   Winner =>  " + game.Turn)
    }
}

function isDigSame() {
    let leftdig = [
        boxclick.children[0].children[0].children[0],
        boxclick.children[0].children[1].children[1],
        boxclick.children[0].children[2].children[2],
    ]

    let rightdig = [
        boxclick.children[0].children[0].children[2],
        boxclick.children[0].children[1].children[1],
        boxclick.children[0].children[2].children[0],
    ]

    let winCondition = game.Turn + game.Turn + game.Turn
    if (leftdig.map(item => item.textContent).join('') === winCondition) {
        alert(" Game Over   ||   Winner =>  " + game.Turn)
    }
    if (rightdig.map(item => item.textContent).join('') === winCondition) {
        alert(" Game Over   ||   Winner =>  " + game.Turn)
    }


}

function aiTurn(r,c){
    game.move++;
    console.log('box clicked=', r, c);

    let click = boxclick.children[0].children[r - 1].children[c - 1]
    click.textContent = game.Turn

}

function bestmove(){
    
    for(let i=0;i<9;i++){
        if (space[i].textContent == "") {
            aiTurn( Math.floor(i/3)+1 , (i%3)+1 ) 
            break;

            
        }
    }

    game.Turn = 'X'


}



function boxClicked(r,c)
{
    game.move++;
    console.log('box clicked=' ,r,c);
    
    let click = boxclick.children[0].children[r-1].children[c-1]
    click.textContent=game.Turn
    // console.log(game.move)
    
    isRowSame(r)
    isColSame(c) 
    isDigSame()
    nextTurn()
    bestmove()

    if (game.move === 9)
        alert("Game Over")

}




const playerSpan=document.getElementById('player')

function nextTurn(){

    if(game.Turn === 'X')
        game.Turn='O'



    playerSpan.textContent= 'X'

}