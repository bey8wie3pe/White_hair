//nは髪の本数
let n = 0
//プラスを押した場合
function btnclick(){
    n = n + 1;
    let testinfo = document.getElementById("test");
    testinfo.innerHTML = `${n}本目`;
    let salary = document.getElementById("salary");
    let salary_read = salary.value;
    let confirmation = Math.sign(salary_read);
    if(confirmation == -1){
        let change = document.getElementById("money");
        change.innerHTML = `正の数にしてください`;
    } else {
        let money = document.getElementById("money");
        money.innerHTML = `${n*salary_read}円`;
    }
}
//マイナスを押した場合
function btn_click(){
    n = n - 1;
    if (n < 0){
        n = 0;
    }
    let testinfo = document.getElementById("test");
    testinfo.innerHTML = `${n}本目`;
    let salary = document.getElementById("salary");
    let salary_read = salary.value;
    let confirmation = Math.sign(salary_read);
    if(confirmation == -1){
        let change = document.getElementById("money");
        change.innerHTML = `正の数にしてください`;
    } else {
        let money = document.getElementById("money");
        money.innerHTML = `${n*salary_read}円`;
    }
}
//終了ボタンを押したらcookieを埋め込む
function finish(){
    document.cookie = 'siraga='+n ;'expires=Tue, 19 Jan 2038 03:14:07 GMT'

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
     if( cArray[0] == 'siraga'){
        let hair = document.getElementById("hair");
        hair.innerHTML = `前回は${cArray}本抜きました。`;
    }
}
