//髪の本数
let n = 0;
//合計
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
    //単価が負の数なら
    if(unit_read <= 0){
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
    let time = new Date().toLocaleString("ja-JP")
    //30日間保存する        
    document.cookie = `siraga=${n} ; max-age=2592000`;
    document.cookie = `total=${total} ; max-age=2592000`;
    document.cookie = `time=${time} ; max-age=2592000`
}
//引数nameを持つCookieを返す。なければundefinedを返す。
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
let a = (getCookie("siraga"));
let hair = document.getElementById('hair');
hair.innerHTML = `前回は${a}本抜きました。`;

let b = (getCookie("total"));
let last_time = document.getElementById('total');
last_time.innerHTML = `前回は${b}円でした。`;

let c = (getCookie("time"));
let time = document.getElementById('time');
time.innerHTML = `前回は${c}にしました。`;
