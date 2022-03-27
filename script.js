let tela = document.querySelector(".tela")
function verificar(num) {
    
    if (tela.innerHTML.length < 56) {
        tela.innerHTML += num
    } else {
        return 0
    }

}
function clean(){
    tela.innerHTML = ""
}
function backspace(){
    if(tela.textContent){
        tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length -1)
    }
}
function confirm(){
    if(tela.innerHTML != ""){
        tela.innerHTML = eval(tela.innerHTML)
    }else{
        return 0
    }
}
