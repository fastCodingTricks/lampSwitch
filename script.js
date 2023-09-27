const lamp = document.querySelector("#lamp");
const switch_btn = document.querySelector("#switch");
const body = document.querySelector("body");


let isLight = true;
switch_btn.addEventListener("click", () =>{
    if(isLight){
        lamp.src = "./images/light-bulb.svg";
        switch_btn.src = "./images/on-switch.png";
        body.style.backgroundColor = "#111111";
        isLight = false
    }
    else{
        lamp.src = "./images/off-bulb.svg";
        switch_btn.src = "./images/off-switch.png";
        body.style.backgroundColor = "white";

        isLight = true;
    }
})