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
/*Alteração de menu com scroll*/
    /*Daclaração dos objetos que terão a função*/
const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const mynav = document.querySelector('div#barraSuperior');
const myimg = document.querySelector('.linkTopo');
const mybt = document.querySelector('label');
const myElem = document.querySelector('nav li a');

let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 1300);
}
    /*Evento causado quando acionado scroll da página*/
addEventListener('scroll', () => {
    mynav.style.setProperty('background-color', scrolled() > 50 ? "rgba(0, 0, 5, 0)":"rgba(0, 0, 5, 1)")
    mynav.style.setProperty('box-shadow', scrolled() > 50 ? "rgb(245, 103, 21) 0px 0px 0px":"rgb(245, 103, 21) 0px 3px 0px")
    mynav.style.setProperty('padding-top', scrolled() > 50 ? "20":"0")
    myimg.style.setProperty('margin-top', scrolled() > 50 ? "50px":"30px")
    mybt.style.setProperty('top', scrolled() > 50 ? "10px":"-8px")
    mynav.style.setProperty('background-color', scrolled() > -50 ? "rgba(0, 0, 5, 0)":"rgba(0, 0, 5, 1)")
    mynav.style.setProperty('box-shadow', scrolled() > -50 ? "rgb(245, 103, 21) 0px 0px 0px":"rgb(245, 103, 21) 0px 3px 0px")
    mynav.style.setProperty('padding-top', scrolled() > -50 ? "20px":"0px")
    myimg.style.setProperty('margin-top', scrolled() > -50 ? "50px":"30px")
    mybt.style.setProperty('top', scrolled() > -50 ? "10px":"-8px")
    mynav.style.setProperty('position', scrolled() > 50 ? "relative":"fixed")
})