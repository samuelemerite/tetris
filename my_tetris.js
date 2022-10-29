//fonction pour obtenir aleatoirement des nombres qui seront utilises pour afficher les tetrominos
function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//declaration du score
var score =0;


//generer la sequence les tetrominos

function generateSequence()
{
    const sequence =['I', 'J','L','O','S','T','Z'];
    while (sequence.length)
    {
        const rand = getRandomInt(0 , sequence.length - 1);
        const name =sequence.splice(rand, 1)[0];
        tetrominoSequence.push(name);
    }
}
 //choisir le prochain tetromino
function getNextTetromino()
{
    if(tetrominoSequence.length === 0)
    {
        generateSequence();
    }
    const name = tetrominoSequence.pop();
    const matrix = tetrominos[name];
    const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

    const row = name === 'I'?-1:2;

    return{
        name: name,
        matrix: matrix,
        row:row,
        col: col
    };
}

//rotation des tetrominos
function rotate(matrix)
{
    const N = matrix.length - 1;
    const result =  matrix.map((row , i) => row.map((val, j) => matrix[N -j][i]));
    return result;
}

//valider la position des tetrominos
function isValidMove(matrix , cellRow , cellCol)
{
    for(let row = 0; row < matrix.length; row++)
    {
        for(let col= 0 ;col <matrix[row].length; col++)
        {
            if(matrix[row][col]&&(
                cellCol - col >= playfield[0].length||
                cellCol + col
            ))
        }
    }
}


