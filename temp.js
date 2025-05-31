const Textbox = document.getElementById("Textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");


function converter(){
    let temp;
    if(toCelsius.checked){
        temp = Number(Textbox.value);
        temp = (5/9) *(temp-32);
        result.textContent = temp.toFixed(1) + "°C";
        
    }
    else if(toFahrenheit.checked){
        temp = Number(Textbox.value);
        temp = temp * (9/5) + 32;
        result.textContent = temp.toFixed(1) + "°F";
        
    }
    else{
        result.textContent = "Select a unit";
    }

}