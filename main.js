let n = 0;
let total = 0;
$("#plus").click(function(){
    n++;
    let unit_price = $("#unit_price").val();
    $("#test").html(`${n}本目`);
    $("#money").html(`${n*unit_price}円`);
    total = n*unit_price; 
    console.log(total);
    
})
$("#minus").click(function(){
    n--;
    if(n < 0){
        n = 0;
    }
    let unit_price = $("#unit_price").val();
    $("#test").html(`${n}本目`);
    $("#money").html(`${n*unit_price}円`);
    total = n*unit_price;  
    console.log(total);
})
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
    return decodeURIComponent(matches[1]);
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
