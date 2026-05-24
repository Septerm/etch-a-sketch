
const sketchPad = document.querySelector('.sketchPad');
const changeGridSizeBtn = document.querySelector('#change');
const clearGridBtn = document.querySelector('#clear');
const gridStatus = document.querySelector('.status');

let size = 16;
let isDrawing = false;



function rowGenerator(size) {

    let row = document.createElement('div');
    row.style.display = 'flex';

    for(let i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.style.width = `${512/size}px`;
        cell.style.height = `${512/size}px`;
        cell.classList.add('cell');


        row.appendChild(cell);

    }

    sketchPad.appendChild(row);

}


function gridGenerator(size) {
    
    for(let i = 0; i < size; i++) {

        rowGenerator(size);
    }
}

function changeGridSize() {

    switch(size) {
        case 16:
            size = 32;
            break;
        case 32:
            size = 64;
            break;
        case 64:
            size = 128;
            break;
        case 128:
            size = 16;
            break;
    }

    gridStatus.textContent =`${size} x ${size}`;

    sketchPad.innerHTML = ''
    gridGenerator(size);
}

function clearGrid() {
    sketchPad.innerHTML = ''
    gridGenerator(size);
}


sketchPad.addEventListener('mousedown', (e) => {
    if(e.target.classList.contains('cell')) {
        isDrawing = true;
        e.target.style.backgroundColor = 'white';
    }
});

sketchPad.addEventListener('mouseover', (e) => {
  if (isDrawing && e.target.classList.contains('cell')) {
    e.target.style.backgroundColor = 'white';
  }
});

window.addEventListener('mouseup', () => {
    isDrawing = false;
});

changeGridSizeBtn.addEventListener('click', changeGridSize);
clearGridBtn.addEventListener('click', clearGrid);




gridGenerator(size);


