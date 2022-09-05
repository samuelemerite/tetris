const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
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
}
ctx.scale(4, 1);


/*function drawPieces(pieces,x,y){

}*/

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