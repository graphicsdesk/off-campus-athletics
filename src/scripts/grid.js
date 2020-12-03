import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import gridData from "../../data/grid.json";

var count = 4
var intial_column = gridData.columns.slice(0, count)
var selectedColumns = gridData.columns.slice(1, count)
const grid = new Grid({
  columns: intial_column,
  sort: true,
  data: gridData.schoolData
});

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
  const newValue = 'Added ' + e.target.textContent + ' ';
  const titleElem = document.querySelector('.dropdown .title');
  const icon = document.querySelector('.dropdown .title .fa');

  var element = document.getElementById(id);
  element.style.display = "none"

  titleElem.textContent = newValue;
  titleElem.appendChild(icon);

  //trigger custom event
  document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
  //setTimeout is used so transition is properly shown
  setTimeout(() => toggleClass(icon, 'rotate-90', 0));
}

document.getElementById("button1").onclick = function () { reRender() };
document.getElementById("button2").onclick = function () { updateColors() };

//my attempt at combining the two functions
function buttonStuff(){
  reRender()
  setTimeout(updateColors(),1000)
}

function reRender() {
  //just need to change what you put into unshift
  //count is just a placeholder for now

  //document.getElementById("button").innerHTML = x.length
 
  count += 1
  selectedColumns.push(gridData.columns[count])
  
  if (selectedColumns.length > 5) {
    //gets rid of the last column
    selectedColumns.shift()
  }
  
  //updates the grid
  grid.updateConfig({
    columns: gridData.columns.slice(0, 1).concat(selectedColumns)
  }).forceRender();


}

//function to update colors
function updateColors(){
  var data = document.getElementsByClassName("gridjs-td");
  var headers = document.getElementsByClassName("gridjs-th gridjs-th-sort");

  var i = 1;
  //loop through each column
  while (i<headers.length){
    var currentColumn = []
    var opacity = 0.05

    //collect all data of a column into a single array
    for (var j=i; j < data.length; j += (headers.length)) {
      currentColumn.push(data[j])
    }

    //get the column sorted but only their indices
    var indexArray = selectionSortIndex(currentColumn)
    //document.write(indexArray)
    
    for (var idx = 0; idx < currentColumn.length; idx++){
      //get color for the sport
      var color = checkColor(headers[i].getAttribute("data-column-id"))
      
      //check if previous is the same number
      var k = idx
      if ((k-1)>=0){
        if (currentColumn[indexArray[idx]].innerHTML===currentColumn[indexArray[idx-1]].innerHTML){
          opacity -= 0.15
          if (opacity < 0){
            opacity = 0.05
          }
          
        }
      }
      
      //set background color
      currentColumn[indexArray[idx]].style.backgroundColor = "rgba("+color+ ","+String(opacity)+")";
      opacity += 0.15
    }
    
    i+=1
  }
}

function checkColor(sport){
  if (sport == "baseball"){
    return "56,205,114"
  }
  else if (sport == "hockey"){
    return "126,33,173"
  }
  else if (sport == "tennis"){
    return "147,153,202"
  }
  else if (sport == "rowing"){
    return "215,153,202"
  }
  else if (sport == "track"){
    return "160,162,166"
  }
  else if (sport == "football"){
    return "214,76,76"
  }
  else if (sport == "golf"){
    return "254,208,0"
  }
  else if (sport == "basketball"){
    return "237,107,21"
  }
  else if (sport == "xc"){
    return "255,102,88"
  }
  else if (sport == "fencing"){
    return "46,121,248"
  }
  else if (sport == "swim"){
    return "74,2,255"
  }
  else if (sport == "volleyball"){
    return "72,121,75"
  }
  else{
    return 
  }
}
function swap(list, x, y){
  var temp = list[y];
  list[y] = list[x];
  list[x] = temp;
}

function selectionSortIndex(list){
  var arr = []
  //make a copy
  for (i = 0; i < list.length; i++) {
    arr[i] = list[i];
  }
  let smallestIndex = 0;
  let currentIndex = 1;
  let beginningIndex = 0;
  var index_arr = [] 
  //make a list of indices only that you will reorder
  for (var i =0; i< arr.length; i++){
    index_arr.push(i)
  }

  //loop until the sorted section is the full array
  while(beginningIndex < arr.length){
    //loop over the array until the currentIndex has reached the last element
      while(currentIndex < arr.length){
          //keep track of the smallest index by comparing it to the current index
          if(Number(arr[smallestIndex].innerHTML) > Number(arr[currentIndex].innerHTML)){
              
            smallestIndex = currentIndex;
          }
          //add to the current index to iterate through the array
          currentIndex++;
          
      }
      // after iterating through the array once, if the smallest number isn't at the sorted section, swap the two
      if(smallestIndex !== beginningIndex){
          
          swap(arr, smallestIndex, beginningIndex)
          //switch the indices to get the final
          swap(index_arr, smallestIndex, beginningIndex)
      }
      
      //add to the beginning index to incorporate the new sorted section
      beginningIndex++;
      //start the current index at 1 above the sorted section
      currentIndex = beginningIndex + 1;
      //reset the smallest index to the beginningIndex
      smallestIndex = beginningIndex;
  }

    return index_arr;
}


  export default function () {
    grid.render(document.getElementById('grid'));

    //get elements
    const dropdownTitle = document.querySelector('.dropdown .title');
    const dropdownOptions = document.querySelectorAll('.dropdown .option');

    //bind listeners to these elements
    dropdownTitle.addEventListener('click', toggleMenuDisplay);
    dropdownOptions.forEach(option => option.addEventListener('click', handleOptionSelected));
  }