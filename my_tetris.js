const canvas = document.getElementById("tetris");
const ctx = canvas.getContext('2d');
var color=["cyan","yellow","violet","green","red","blue","orange"];
//ctx.fillRect(0, 0, 10, 10);
pieces=[
    [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
    ],
    [
        [1,1],
        [1,1]
    ],
    [
        [1,1,1,0],
        [0,1,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,1,1],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [1,1,0,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,1,1,0]
    ],
    [
        [0,0,0,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,1]
    ]
];

const arene=[];
const player={
    pos:{ x:0, y: 0},
    matrix: pieces[0]
}
ctx.scale(20, 20);


function drawPieces(matrix,x,y){

    for(let i=0 ; i<matrix.length ; i++)
    {
        for(let j=0; j<matrix[i].length; j++)
        {
            if(matrix[i][j])
            {
                ctx.fillRect(color[2]);
                ctx.fillRect(x+j,y+i,1,1);
            }
        }
    }
}

document.addEventListener('keydown', event => {
    if(event.keyCode === 37 || event.keyCode === 52 || event.keyCode === 100 ){
        player.pos.x--;
    }else if( event.keyCode === 39 || event.keyCode ===54 || event.keyCode === 102 )
    {
        player.pos.x++;
    }
    else if (event.keyCode === 40)
    {
        player.pos.y++;
        count =0;
    }
    /*else if (event.keyCode === 38 )
    { player.matrix=rotation(player.matrix,1)}*/
  });
  drawPieces(player.matrix,player.pos.x,player.pos.y);