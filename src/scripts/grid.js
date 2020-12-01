import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import gridData from "../../data/grid.json";

var selectedColumns = gridData.columns.slice(0,5)
const grid = new Grid({
    columns: selectedColumns,
    sort: true,
    data: gridData.schoolData
});

//code for dropdown buttom
function toggleClass(elem,className){
    if (elem.className.indexOf(className) !== -1){
      elem.className = elem.className.replace(className,'');
    }
    else{
      elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
    }
  
    return elem;
}
  
function toggleMenuDisplay(e){
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu');
    const icon = dropdown.querySelector('.fa-angle-right');
  
    toggleClass(menu,'hide');
    toggleClass(icon,'rotate-90');
}
  
function handleOptionSelected(e){	
  
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
    setTimeout(() => toggleClass(icon,'rotate-90',0));
}

export default function () {
    grid.render(document.getElementById('grid'));
    
    //get elements
    const dropdownTitle = document.querySelector('.dropdown .title');
    const dropdownOptions = document.querySelectorAll('.dropdown .option');

    //bind listeners to these elements
    dropdownTitle.addEventListener('click', toggleMenuDisplay);
    dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
}
