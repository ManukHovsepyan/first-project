const topDiv = document.getElementById("top_div")
let array_event_names = [
    "click",
    "ctextmenu",
    "dblclick",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mouseout",
    "mouseover",
    "mouseup"
]
const mouseEvents = document.querySelector(".mouse_event")
for(let i=0;i<array_event_names.length;i++){
    topDiv.addEventListener(array_event_names[i], (e) =>{
       let span = document.createElement("span")
       span.textContent = e.type
       mouseEvents.appendChild(span)
    })
}
const keyboardEvents = document.querySelector(".keyboard_event")
document.addEventListener('keydown', function(event) {
  console.log(event)  
  let span = document.createElement("span")
    span.textContent = event.key + "(" + event.keyCode + ")"
    keyboardEvents.appendChild(span)
});