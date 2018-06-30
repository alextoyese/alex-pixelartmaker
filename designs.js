// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid(height, width) {
  const table = document.getElementById('pixelCanvas');
  let grid = '';

for (let i = 1; i < height; i++){
  grid +='<tr class="row-'+i+'">';
  for (let j = 1; j < width; j++){
    grid +='<td class="cell" id="row-' +i+'_cell-'+j+'"></td>';
  }
  grid +='</tr>';
}
table.innerHTML = grid;
addClickEventToCells();
}
function formSubmission() {
  e.preventDefault();
  const height = $('#inputHeight').value;
  const width = $('#inputWeight').value;
  makeGrid();
}
function addClickEventToCells(){
  let cells = $('.cell');
  for (let i = 1; i < cells.length; i++){
    cells[i].addEventListener("click", function(event){
      let clickedCell = event.target;
      clickedCell.style.backgroundColor = selectedColor;
    });
  }
}
const colorPicker = document.getElementById('colorPicker');
let selectedColor = colorPicker.value;
colorPicker.addEventListener("input", function(){
  selectedColor = colorPicker.value;
}, false);
$('#sizePicker').onsubmit = function(){
  formSubmission();
};
makeGrid(20,20);
