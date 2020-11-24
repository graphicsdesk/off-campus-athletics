import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import gridData from "../../data/grid.json";

var selectedColumns = gridData.columns.slice(0,5)
const grid = new Grid({
    columns: selectedColumns,
    sort: true,
    data: gridData.schoolData
});

export default function () {
    grid.render(document.getElementById('grid'));
}
