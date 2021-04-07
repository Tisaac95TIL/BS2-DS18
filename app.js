console.log("Hello from Theo");

let viz;

//To do list
//1. Grab the url of dashboard and store it in a variable
const vizUrl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard?:language=en&:display_count=y&:origin=viz_share_link";

//2. Grab the container on the index page
const vizContainer = document.getElementById("vizContainer");
//2.1 Create viz options
const options = {
  device: "desktop",
};
//3. Create a function to call the Tableau JS API
function initViz() {
  viz = new tableau.Viz(vizContainer, vizUrl, options);
}

//grab the pdf button

const pdfbutton = document.getElementById("pdfbutton");
function generatePDF() {
  console.log("You clicked on the PDF button");
  viz.showExportPDFDialog();
  pdfbutton.addEventListener("click", generatePDF);
}
//Generate ppt
const powerpointbutton = document.getElementById("PowerpointButton");
function generatePowerPoint() {
  viz.showExportPowerPointDialog();
}
//Grab the swap viz button
const swapViz = document.getElementById("swapViz");
function switchViz() {
  const otherVizUrl =
    "https://public.tableau.com/views/CentralParksquirrels/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link";

  if (viz) {
    viz.dispose();
    viz = new tableau.Viz(vizContainer, otherVizUrl, options);
  }

  swapViz.addEventListener("Click", switchViz);
}

function getRangeValues() {
  document
    .getElementById("filterButton")
    .addEventListener("click", getRangeValues);
}

// get the workbook

const workbook = viz.getWorkbook();
const activeSheet = workbook.getActiveSheet();
const sheets = activeSheet.getWorksheets();

//4. Call that function when the page has finished loading
document.addEventListener("DOMContentLoaded", initViz());
