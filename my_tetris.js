const canvas = document.getElementById("tetris");
const ctx = canvas.getContext('2d');
ctx.scale(20,20);
const colorPieces=["cyan","yellow","violet","green","red","blue","orange"];
pieces=[
    [
        [1,0,0,0],
        [1,0,0,0],
        [1,0,0,0],
        [1,0,0,0]
    ],
    [
        [1,1],
        [1,1]
    ],
    [
        [1,1,1],
        [0,1,0],
        [0,0,0]
    ],
    [
        [0,1,1],
        [1,1,0],
        [0,0,0]
    ],
    [
        [1,1,0],
        [0,1,1],
        [0,0,0]
    ],
    [
        [0,1,0],
        [0,1,0],
        [1,1,0]
    ],
    [
        [0,1,0],
        [0,1,0],
        [0,1,1]
    ]
];
const arena = [];

const player ={
    position: {x: 0, y: 0},
    matrix:pieces[3]
}

function drawPieces(matrix,x,y)
{
    for(let i=0;i<matrix.length;i++){
        for(let j=0; j< matrix[i].length ; j++){
            if(matrix[i][j])
                ctx.fillRect(x + j , y + i, 1, 1);
        }
    }
}

let interval =1000;
let lastTime = 0;
let count = 0;

function update( time = 0)
{
    const dt= time - lastTime;
    lastTime = time;
    count += dt;
    if( count >= interval ){
        player.position.y++;
        count=0;
    }
    ctx.fillStyle= '#fff';
    ctx.fillRect(0, 0, canvas.clientWidth,canvas.clientHeight);
    ctx.fillStyle = colorPieces[2];
    drawPieces(player.matrix,player.position.x,player.position.y);
    requestAnimationFrame(update);
}

document.addEventListener("keydown", event =>{
    if(event.keyCode === 37 || event.keyCode === 52 || event.keyCode === 100)
    {
        player.position.x--;
    }
    else if( event.keyCode ===39 || event.keyCode === 102 || event.keyCode === 54)
    {
        player.position.x++;
    }
    else if( event.keyCode === 40 || event.keyCode === 56 || event.keyCode === 104)
    {
        player.position.y++;
    }
})
//drawPieces(player.matrix,player.position.x,player.position.y);
update();