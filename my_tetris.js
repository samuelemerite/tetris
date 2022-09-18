const canvas = document.getElementById("tetris");
const ctx = canvas.getContext('2d');
const scale= 20;
ctx.scale(scale,scale);
const colorPieces=["null","cyan","yellow","violet","green","red","blue","orange"];

const twidth =canvas.clientWidth/ scale;
const theight = canvas.clientHeight / scale ;

pieces=[
    [
        [1,0,0,0],
        [1,0,0,0],
        [1,0,0,0],
        [1,0,0,0]
    ],
    [
        [2,2],
        [2,2]
    ],
    [
        [3,3,3],
        [0,3,0],
        [0,0,0]
    ],
    [
        [0,4,4],
        [4,4,0],
        [0,0,0]
    ],
    [
        [5,5,0],
        [0,5,5],
        [0,0,0]
    ],
    [
        [0,6,0],
        [0,6,0],
        [6,6,0]
    ],
    [
        [0,7,0],
        [0,7,0],
        [0,7,7]
    ]
];
const arena = [];

let rand;

const player ={
    position: {x: 0, y: 0},
    matrix: null,
    color: null
}

rand = Math.floor(Math.random() * pieces.length);
player.matrix= pieces[rand];
player.color= colorPieces[rand+1];

function drawPieces(matrix,x,y)
{
    for(let i=0;i<matrix.length;i++){
        for(let j=0; j< matrix[i].length ; j++){
            if(matrix[i][j])
                ctx.fillRect(x + j , y + i, 1, 1);
        }
    }
}

function rotation(matrix,dir)
{
    let newMatrix = [];

    for (let i in matrix )
    {
        newMatrix.push([]);
    }
    
    if(dir === 1)
    {
        for(let i=0; i< matrix.length; i++)
        {
            for(let j=0; j<matrix[i].length; j++)
            {
                newMatrix[j][matrix.length - i - 1] = matrix[i][j];
            }
        }
    }
    else {
        for(let i=0; i< matrix.length; i++)
        {
            for(let j=0; j<matrix[i].length; j++)
            {
                newMatrix[matrix.length -j -1][i] = matrix[i][j];
            }
        }

    }
    return newMatrix;
}

function collides(player, arena)
{
    for(let i= 0; i< player.matrix.length ; i++)
    {
        for(let j=0 ; j< player.matrix[i].length; j++)
        {
            if( player.matrix[i][j] && arena[player.position.y + i +1][player.position.x + j +1])
            {
                return 1;
            }
        }
    }
    return 0;
}

function mergeArena( matrix , x, y)
{
    for(let i=0 ; i< matrix.length; i++)
    {
        for(let j=0; j<matrix[i].length; j++)
        {
            arena[y+i+1][x+j+1] = arena[y +i + 1][x+j+1] || matrix[i][j];
        }
    }
    
}

function clearBlocks()
{
    for(let i=1; i< arena.length-2; i++)
    {
        let clear =1;
        for(let j=1; j<arena[i].length - 1; j++)
        {
            if(!arena [i][j])
            {
                clear = 0 ;
            }
            if (clear)
            {
                let r =new Array(twidth).fill(0);
                r.push(1);
                r.unshift(1);

                arena.splice(i,1);
                arena.splice(1,0,r);
            }
        }
    }
}

function drawArena()
{
    for(let i=1; i< arena.length-2; i++)
    {
        for(let j=1; j< arena[i].length-1;j++)
        {
            if(arena[i][j])
            {
                ctx.fillStyle = colorPieces[arena[i][j]];
                ctx.fillRect(j-1, i-1, 1,1);
            }
        }
    }
}

function initArena()
{
    const r  = new Array(twidth +2).fill(1);
    arena.push(r);
    for(let i =0; i < theight; i++)
    {
        let row = new Array(twidth).fill(0);
        row.push(1);
        row.unshift(1);

        arena.push(row);
    }
    arena.push(r);
    arena.push(r);
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

    if(collides(player,arena))
    {
        mergeArena(player.matrix,player.position.x, player.position.y-1);
        clearBlocks();
        player.position.x=0;
        player.position.y=0;

        rand = Math.floor(Math.random() * pieces.length);
        player.matrix= pieces[rand];
        player.color= colorPieces[rand+1];

        interval=1000;
    }

    ctx.fillStyle= '#fff';
    ctx.fillRect(0, 0, canvas.clientWidth,canvas.clientHeight);
    drawArena();
    ctx.fillStyle = player.color;
    drawPieces(player.matrix,player.position.x,player.position.y);
    requestAnimationFrame(update);
}

document.addEventListener("keydown", event =>{
    if(event.keyCode === 37 || event.keyCode === 52 || event.keyCode === 100)
    {
        player.position.x--;
        if(collides(player, arena))
        {
            player.position.x++;
        }
    }
    else if( event.keyCode ===39 || event.keyCode === 102 || event.keyCode === 54)
    {
        player.position.x++;
        if(collides(player, arena))
        {
            player.position.x--;
        }
    }
    else if( event.keyCode === 40 || event.keyCode === 56 || event.keyCode === 98)
    {
        player.position.y++;
        count=0;
    }
    else if ( event.keyCode === 38 || event.keyCode === 65 || event.keyCode === 104){
        player.matrix =rotation(player.matrix,1);
        if(collides(player, arena))
        {
            player.matrix = rotation(player.matrix ,-1);
        }
    }
    else if( event.keyCode === 32 )
    {
        interval=1;
    }
})
//drawPieces(player.matrix,player.position.x,player.position.y);
initArena();
update();