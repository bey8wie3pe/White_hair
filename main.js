//nは髪の本数
let n = 0
//プラスを押した場合
function btnclick(){
    n = n + 1
    if (n < 0){
        n = 0;
    }
    let testinfo = document.getElementById("test");
    testinfo.innerHTML = `${n}本目`;
}
//マイナスを押した場合
function btn_click(){
    n = n - 1
    if (n < 0){
        n = 0;
    }
    let testinfo = document.getElementById("test");
    testinfo.innerHTML = `${n}本目`;
}
//終了ボタンを押したらcookieを埋め込む
function finish(){
    document.cookie = 'tanaka='+n ;'expires=Tue, 19 Jan 2038 03:14:07 GMT'
}
function cookie(){
    let a = document.tanaka
}
//全てのcookieを取り出す
let cookies = document.cookie; 
// ;で分割し配列に
let cookiesArray = cookies.split(';');
//一つ一つ取り出す
for(let c of cookiesArray){ 
    //さらに=で分割して配列に
    let cArray = c.split('='); 
     // 取り出したいkeyと合致したら以下のものを実行する
    if( cArray[0] == 'tanaka'){
        let hair = document.getElementById("hair");
        hair.innerHTML = `前回は${cArray}本抜きました。`;
    }
}



