// const aboutbtn = document.querySelector("#aboutbtn");
// aboutbtn.addEventListener("click", (event) => {
//   //   aboutbtn.style.display.color = "black";
// });
const aboutCode = document.querySelector("#aboutCode");
const desc = document.querySelector("#desc");

desc.addEventListener(
    "mouseover",
    function (event) {
        console.log(event);
        // highlight the mouseover target
        // event.target.style.color = "orange";
        aboutCode.style.visibility = "visible";
        // aboutCode.innerHTML = "A quick learner..Passionate in coding";
        // reset the color after a short delay
        setTimeout(function () {
            // event.target.style.color = "";
            aboutCode.style.visibility = "hidden";
        }, 3000);
    },
    false
);
const dash = document.querySelector("#dash");

setInterval(dashfn, 500);
function dashfn() {
    dash.style.visibility = "visible";

}
setInterval(dashfnDel, 1000);
function dashfnDel() {
    dash.style.visibility = "hidden";

}

