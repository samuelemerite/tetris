const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
//ctx.fillRect(0, 0, 10, 10);
pieces=[
    [
        [1,1],
        [1,1]
    ],
    [
        [0,0,0,0],
        [1,1,1,1],
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
    ]
];