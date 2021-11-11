const container = document.querySelector('.container');

//show grid values on start
const pColumns = document.querySelector('[for="columns"]');
const pRows = document.querySelector('[for="rows"]');
pColumns.textContent = `Columns: ${[columns.value][0]}`;
pRows.textContent = `Rows: ${rows.value}`;


//show grid values on change
const ranges = document.querySelectorAll('[type="range"]');
ranges.forEach((range) => {
    range.addEventListener('click', () => {
        pColumns.textContent = `Columns: ${[columns.value][0]}`;
        pRows.textContent = `Rows: ${rows.value}`;
    });
});

// set grid size and create boxes
function setGrid() {
    let columns = document.getElementById("columns").value;
    let rows = document.getElementById("rows").value; 
    const boxes = document.querySelectorAll('.box');
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    if (container.childElementCount > 0) {
        boxes.forEach((box) => {
            box.parentElement.removeChild(box)
        });
    }
    for (let i = 0; i < rows*columns; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
    colorBoxes();
}


//color selection
const inputColor = document.querySelector('[type="color"]');
inputColor.addEventListener('input', () => {
});

function colorBoxes () {
    const gridBoxes = document.querySelectorAll('.box');
    gridBoxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            box.style.background = `${inputColor.value}`;
        });
    });
}

//random color
function randColor () {
    const gridBoxes = document.querySelectorAll('.box');
    gridBoxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            box.style.background = `#${randomColor}`;
        });
    });
}


//buttons functions:

//set grid and clear
const create = document.querySelector('#create');
create.addEventListener('click', () => {
    setGrid(columns, rows);
});

//select functionality of selected colored pen
const selected = document.querySelector('#selected');
selected.addEventListener('click', () => {
    colorBoxes();
});


//select functionality of random colored pen
const random = document.querySelector('#random');
random.addEventListener('click', () => {
    randColor();
});


setGrid();
