let Output=document.getElementById("dis");
function display(num) {
    Output.value += num;
}

function calculate() {
    try{
        Output.value=eval(Output.value);
    }
    catch(err){
        alert("Invalid Operation")
    }
}

function Clear(){
    Output.value="0";
}

function del(){
    Output.value=Output.value.slice(0,-1);
}
