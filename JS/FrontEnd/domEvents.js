/* Events ->
if something happens i want to be notified */
function alertMe() {
  alert("Hi this is cool");
}
function clickAlert(e) {
  console.log(e);
}
document
  .querySelector("#btn-event-checker")
  .addEventListener("mouseover,mouseOverAlert");

/* we can attach an event to window,activate tab>

 */
window.addEventListener("mousemove", (e) => {
  //console.log("x direction", e.clientx);
  //console.log("y direction",e.clientY);
});
const display = document.getElementById("mouse");
window.addEventListener("mousemove", (e) => {
  display.textcontent = `x:${e.clientx}, Y:${e.clientY}`;
});
