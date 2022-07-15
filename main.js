let n = 0

function btnclick(){
    n = n + 1
}
function btn_click(){
    n = n - 1
}
function cheak(){
    if (n < 0){
        n = 0;
    }
    let testinfo = document.getElementById("test");
    testinfo.innerHTML = `${n}本目`;
}
