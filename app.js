const display_input = document.getElementById('display');
const clear_b = document.getElementById('clear');
let calculated = false;
let operand_pressed = false;
const delBtn = document.getElementById('del');


function del(){
    display_input.value = display_input.value.slice(0, -1);

}

delBtn.onclick = del;

function clear(){
    display_input.value = "";
}

clear_b.onclick = clear

function display(text){
    if(calculated && (text == '+' || text == '-' || text == '*' || text == '/')){
        if((text == '+' || text == '-' || text == '*' || text == '/') && (display_input.value[display_input.value.length - 1] == '+' || display_input.value[display_input.value.length - 1] == '-' || display_input.value[display_input.value.length - 1] == '*' || display_input.value[display_input.value.length - 1] == '/')){
            display_input.value += "";
        }
        else{
            display_input.value += text;
            console.log("added");
            calculated = false;
        }
    }
    else{
        if((text == '+' || text == '-' || text == '*' || text == '/') && (display_input.value[display_input.value.length - 1] == '+' || display_input.value[display_input.value.length - 1] == '-' || display_input.value[display_input.value.length - 1] == '*' || display_input.value[display_input.value.length - 1] == '/')){
            display_input.value += "";
        }
        else{
            if (calculated) {
                //display_input.value = "";
                display_input.value = text;
                console.log("no value");
            } 
            else {
                display_input.value += text;
                console.log("writing ")
            }
        }
        
        calculated = false;
        //console.log(display_input.value[display_input.value.length-1])
    }
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
        calculated = true;
    }
    catch(error){
        display_input.value = "Error";
    }
}

