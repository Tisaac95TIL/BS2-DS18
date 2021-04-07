console.log("Hello from Theo");

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
  const viz = new tableau.Viz(vizContainer, vizUrl, options);
}
//4. Call that function when the page has finished loading
document.addEventListener("DOMContentLoaded", initViz());
