//create dynamic grid
const dungeon = document.getElementById("dungeon") 
const ctx = dungeon.getContext("2d")
let form = document.getElementById("userInput");
let grid = [];
let rows;
let cols;
let canvasHeight;
let canvasWidth;

function drawLines(r, c) {
    for (let i = 0; i < r; i++) {
    let y = i * 50;    
    ctx.moveTo(0, y);
    ctx.lineTo(c * 50, y);
    ctx.stroke();
}
    for (let j = 0; j < c; j++) {
        let x = j * 50;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, r * 50);
        ctx.stroke();
    }
}

function makeGrid() {
    let inputRows = document.getElementById("inputRows");
    let inputCols = document.getElementById("inputCols"); 
    rows = inputRows.value;
    cols = inputCols.value;
    canvasWidth = cols * 50;
    canvasHeight = rows * 50;
    grid = [];   
    for (let row = 0; row < rows; row++) {
    grid[row] = [];
        for (let col = 0; col < cols; col ++) {
            grid[row][col] = 0;
        }
    }
    dungeon.width = canvasWidth
    dungeon.height = canvasHeight
    drawLines(rows, cols);

}

form.addEventListener("submit", (e) => {e.preventDefault(); makeGrid();});









    


//interactive squares
function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawLines(rows, cols);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col ++) {
            if (grid[row][col] === 1) {
                ctx.fillRect(col * 50, row * 50, 50, 50);
            }
        }
    }
}

dungeon.addEventListener("click", (e) => { 
    const rect = dungeon.getBoundingClientRect(); 
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top
    const col = Math.floor(x / 50);
    const row = Math.floor(y / 50);
    if (col < cols && row < rows) {
       grid[row][col] = grid[row][col] === 0 ? 1 : 0; 
    }
    console.log(row, col, grid[row][col])
    draw();
    
}
)


