//髪の本数
let n = 0;
//前回の合計
let total = 0;
//プラスを押した場合
function btnclick(){
    n++;
    //現在の本数を表示
    let testinfo = document.getElementById("test");
    testinfo.innerHTML = `${n}本目`;
    cheak();
}
//マイナスを押した場合
function btn_click(){
    n--;
    if (n < 0){
        n = 0;
    }
    //現在の本数を表示
    let number = document.getElementById("test");
    number.innerHTML = `${n}本目`;
    cheak();
}
//単価が負の数か判定する
function cheak(){
    //単価を取得
    let unit_price = document.getElementById("unit_price");
    let unit_read = unit_price.value;
    let confirmation = Math.sign(unit_read);
    //単価が負の数なら
    if(confirmation == -1){
        let error = document.getElementById("money");
        error.innerHTML = `正の数にしてください`;
    //正の数なら値段を表示
    } else {
        let money = document.getElementById("money");
        money.innerHTML = `${n*unit_read}円`;
    }
    total = n*unit_read;  
}
//終了ボタンを押したらcookieを埋め込む
function finish(){
    //30日間保存する        
    document.cookie = `siraga=${n} ; max-age=2592000`;
    document.cookie = `total=${total} ; max-age=2592000`;
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
    let hair = document.getElementById('hair');
    hair.innerHTML = `前回は${cArray[1]}本抜きました。`;
}
}
//全てのcookieを取り出す
let cookie = document.cookie; 
// ;で分割し配列に
let cookiesarray = cookie.split(';');
//一つ一つ取り出す
for(let d of cookiesarray){ 
    //さらに=で分割して配列に
    let carray = d.split('='); 
    // 取り出したいkeyと合致したら以下のものを実行する
    let total = document.getElementById('total');
    total.innerHTML = `前回は${carray[1]}円でした。`;
}
