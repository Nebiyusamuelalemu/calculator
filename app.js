const display_input = document.getElementById('display');
const clear_b = document.getElementById('clear');
let calculated = false;
const delBtn = document.getElementById('del');
let notifier = true;

if (notifier){
    window.alert("This App Was Made By Nebiyu\nSide Note: thank you for using my calculator it was my first project hope you liked it :)")
    notifier = false;
}

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

document.addEventListener("keydown", ev => {
    //console.log(ev.key);
    if (ev.key == "0"){
        display('0');
    }
    else if (ev.key == "1"){
        display('1');
    }
    else if (ev.key == "2"){
        display('2');
    }
    else if (ev.key == "3"){
        display('3');
    }
    else if (ev.key == "4"){
        display('4');
    }
    else if (ev.key == "5"){
        display('5');
    }
    else if (ev.key == "6"){
        display('6');
    }
    else if (ev.key == "7"){
        display('7');
    }
    else if (ev.key == "8"){
        display('8');
    }
    else if (ev.key == "9"){
        display('9');
    }
    else if (ev.key == "Enter" || ev.key == "="){
        calculate();
    }
    else if (ev.key == "+"){
        display('+');
    }
    else if (ev.key == "-"){
        display('-');
    }
    else if (ev.key == "*"){
        display('*');
    }
    else if (ev.key == "/"){
        display('/');
    }
    else if (ev.key == "c" || ev.key == "C"){
        clear();
    }
    else if (ev.key == "d" || ev.key == "D" || ev.key == "Backspace" || ev.key == "Delete"){
        del();
    }
    else if (ev.key == "."){
        display('.');
    }
})