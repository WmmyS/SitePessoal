/*Funções de FadeIn e FadeOut*/
function fadeOut(id, time) {
    fade(id, time, 100, 0);
}
function fadeIn(id, time) {
    fade(id, time, 0, 100);
}
/*Estrutura do Fade*/
function fade(id, time, ini, fin) {
    var target = document.getElementById(id);
    var alpha = ini;
    var inc;
    if (fin >= ini) { 
        inc = 2; 
    } else {
        inc = -2;
    }
    timer = (time * 1000) / 50;
    var i = setInterval(
        function() {
            if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
                clearInterval(i);
            }
            setAlpha(target, alpha);
            alpha += inc;
        }, timer);
}
function setAlpha(target, alpha) {
    target.style.filter = "alpha(opacity="+ alpha +")";
    target.style.opacity = alpha/100;
}
/*Aplicação de transição nas figuras*/
function transicao(icone,endereco,endereco2){
    fadeIn(icone,0.3)
    var insta = document.getElementById(icone);
    document.getElementById(icone).onmouseenter = function(){
        insta.src = endereco2;
        fadeIn(icone,0.3)
    };    
    document.getElementById(icone).onmouseout = function(){
        var insta = document.getElementById(icone).src = endereco;
        fadeIn(icone,0.3)    
    };
};
function transicao2(id){
    fadeIn(id,0.3)
    var insta = document.getElementById(id);
    document.getElementById(id).onmouseenter = function(){
        fadeIn(id,0.3) 
    };    
    document.getElementById(id).onmouseout = function(){
        fadeIn(id,0.3)   
    };
};         
window.onload = transicao("iconInsta","img/instagran white.png","img/instagran.png");
window.onload = transicao("iconFace","img/facebook white.png","img/facebook.png");
window.onload = transicao("iconIn","img/linkedin white.png","img/linkedin.png");
/*Aplicação de transição nos itens do menu*/
window.onload = transicao2("limenu1");
window.onload = transicao2("limenu2");
window.onload = transicao2("limenu3");
window.onload = transicao2("limenu4");