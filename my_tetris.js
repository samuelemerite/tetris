//fonction pour obtenir aleatoirement des nombres qui seront utilises pour afficher les tetrominos
function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return MAth.floor(Math.random() * (max - min + 1)) + min;

}

//declaration du score
var score =0;


//generer la sequence les tetrominos

function generateSequence()
{
    const sequence =['I', 'J']
}
