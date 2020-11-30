import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import gridData from "../../data/grid.json";

var count = 1
var intial_column = gridData.columns.slice(0,1)
var selectedColumns = []
const grid = new Grid({
    columns: intial_column,
    sort: true,
    data: gridData.schoolData
});


document.getElementById("button").onclick = function() {reRender()};

function reRender(){
    //just need to change what you put into unshift
    //count is just a placeholder for now
    count +=1
    selectedColumns.unshift(gridData.columns[count])
    //document.getElementById("button").innerHTML = count
    
    if (selectedColumns.length > 5){
        //gets rid of the last column
        selectedColumns.pop()
    }
    //updates the grid
    grid.updateConfig({
        columns: gridData.columns.slice(0,1).concat(selectedColumns)
      }).forceRender();
}

export default function () {
    grid.render(document.getElementById('grid'));
}

