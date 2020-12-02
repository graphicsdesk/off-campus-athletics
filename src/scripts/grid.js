import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import gridData from "../../data/grid.json";

var count = 4
var intial_column = gridData.columns.slice(0, 4)
var selectedColumns = gridData.columns.slice(1, 4)
const grid = new Grid({
  columns: intial_column,
  sort: true,
  data: gridData.schoolData
});
var clicked = Array(11).fill(false);
var clicked_ids = []
//code for dropdown buttom
function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, '');
  }
  else {
    elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
  }

  return elem;
}

function toggleMenuDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector('.menu');
  const icon = dropdown.querySelector('.fa-angle-right');

  toggleClass(menu, 'hide');
  toggleClass(icon, 'rotate-90');
}

function handleOptionSelected(e) {

  const id = e.target.id;
  const titleElem = document.querySelector('.dropdown .title');
  const icon = document.querySelector('.dropdown .title .fa');

  var element = document.getElementById(id);
  var sport_id = parseInt(element.id);

  if (clicked[sport_id]){
    element.style.backgroundColor = "rgba(0,0,0,0)"
    var index = selectedColumns.indexOf(gridData.columns[sport_id])
    reRender(index, false)
    titleElem.textContent = 'Removed ' + e.target.textContent + ' ';
    clicked[sport_id] = false;
  } else{
    element.style.backgroundColor = "rgba(0,0,0,0.1)"
    reRender(sport_id, true)
    titleElem.textContent = 'Added ' + e.target.textContent + ' ';
    clicked[sport_id] = true
    clicked_ids.push(sport_id)
  }

  titleElem.appendChild(icon);

  //trigger custom event
  document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));

  //setTimeout is used so transition is properly shown
  setTimeout(() => toggleClass(icon, 'rotate-90', 0));
}

function reRender(sport, add) {
  //just need to change what you put into unshift
  //count is just a placeholder for now
  if (add){
    selectedColumns.push(gridData.columns[sport])
  } else {
    selectedColumns.splice(sport, 1)
  }
  
  //document.getElementById("button").innerHTML = count
  
  if (selectedColumns.length > 5) {
    //gets rid of the last column
    var removed_id = clicked_ids.shift()
    var element = document.getElementById(removed_id.toString())
    element.style.backgroundColor = "rgba(0,0,0,0)"
    clicked[removed_id] = false;
    selectedColumns.shift()
  }
  //updates the grid
  grid.updateConfig({
    columns: gridData.columns.slice(0, 1).concat(selectedColumns)
  }).forceRender();
}

export default function () {
  grid.render(document.getElementById('grid'));
  
  for (var i = 1; i<count; i++){
    clicked_ids.push(i)
    clicked[i] = true;
    var element = document.getElementById(i.toString());
    element.style.backgroundColor = "rgba(0,0,0,0.1)"
  }

  //get elements
  const dropdownTitle = document.querySelector('.dropdown .title');
  const dropdownOptions = document.querySelectorAll('.dropdown .option');

  //bind listeners to these elements
  dropdownTitle.addEventListener('click', toggleMenuDisplay);
  dropdownOptions.forEach(option => option.addEventListener('click', handleOptionSelected));
}

