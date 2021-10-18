// ASHIM DAS MARCH 2021

let display = 0;
let i=0;
function validate(){
    // if(document.getElementById("ansBig").value == ""){
    //     document.getElementById("ansBig").value = "0";
    // }
    // else{
    // }
    if(display==0){
        display=1;
        document.getElementById("ansBig").classList.add("inactive");
        document.getElementById("ans").classList.add("active");
    }
}
function back(){
    if(display==1){
        document.getElementById("ansBig").classList.toggle("inactive");
        document.getElementById("ans").classList.toggle("active");
        display=0;
    }
    else calc.txt.value = calc.txt.value.slice(0, -1);
}

function toggleDisplay() {
    if(display==1){
        document.getElementById("ansBig").classList.toggle("inactive");
        document.getElementById("ans").classList.toggle("active");
        display=0;
    }
}

function numClick(element){
    
    toggleDisplay();

    if(String(document.getElementById("ansBig").value)=="0"){
        calc.txt.value += element.innerHTML;
        calc.txt.value = calc.txt.value.slice(1);
    }
    else
    calc.txt.value += element.innerHTML;
    if(String(calc.txt.value) == "00"){
        calc.txt.value=calc.txt.value.slice(1);
    }
}
function clearDisplay(){
    localStorage.setItem('cal.ady.data.'+i,calc.txt.value);
    if(display==1){
        document.getElementById("ansBig").classList.toggle("inactive");
        document.getElementById("ans").classList.toggle("active");
        display=0;
    }
    calc.txt.value = '';
}
function history(){
    if(localStorage.getItem('cal.ady.data.'+i)!=null){
        calc.txt.value=localStorage.getItem('cal.ady.data.'+i);
        i--;
    }
    else{
        i=0;
        calc.txt.value=localStorage.getItem('cal.ady.data.'+i);
        i--;
    }
}