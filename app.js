
const display_input = document.getElementById('display');
const clear_b = document.getElementById('clear');


function clear(){
    display_input.value = "";
}

clear_b.onclick = clear

function display(text){
    display_input.value += text;
}

function calculate(){
    try{
        if(display_input.value.includes("/0")){
            display_input.value = "0 division"
        }
        else if(display_input.value == "Error"){
            display_input.value = "";
        }
        else if(display_input.value == ""){
            while (display_input.value == ""){
                display_input.value = "No Equati";
            }

        }
        else{
            display_input.value = eval(display_input.value);
        }
    }
    catch(error){
        display_input.value = "Error";
    }
}

