function changeColor(color) {
    document.getElementById("container").style.backgroundColor = color;
    document.getElementById("input-contain").style.backgroundColor = color;
    document.getElementById("name").style.backgroundColor = color;
}
function formSubmit() {
    msg = document.getElementById("input-contain").value;
    if(msg != "") {
        document.getElementById("input-contain").style.display = 'none';
        document.getElementById("lets-go").style.opacity = 0;
        document.getElementById("name").innerHTML = msg;
        document.getElementById("name").style.display = 'flex';
    }
}
function Enter() {
    if(event.keyCode == 13) {
        msg = document.getElementById("input-contain").value;
        if(msg != "") {
            document.getElementById("input-contain").style.display = 'none';
            document.getElementById("lets-go").style.opacity = 0;
            document.getElementById("name").innerHTML = msg;
            document.getElementById("name").style.display = 'flex';
        }
    }
}