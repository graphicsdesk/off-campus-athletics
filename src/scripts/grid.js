import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import gridData from "../../data/grid.json";

var columns = gridData.columns
const grid = new Grid({
    columns: columns.slice(0,5),
    sort: true,
    data: gridData.schoolData
});

export default function () {
    grid.render(document.getElementById('grid'));
}
