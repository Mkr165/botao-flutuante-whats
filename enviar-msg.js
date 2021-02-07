const modal = document.getElementById('modal-msg');
const iconeBotao = document.getElementById('areaBotao');
const celular ="01312345678"   

function enviar(msg) {
    let mensagem =  document.getElementById(msg).value 
    modal.classList.remove('open') 
    iconeBotao.innerHTML="<i class=\"fab fa-whatsapp\"></i>"
    window.open(`https://web.whatsapp.com/send?phone=55${celular}&text=`+mensagem); 
}

function controleModal() {  
    let disp = modal;
    if(!disp.classList.contains('open')){
        modal.classList.add('open')
        iconeBotao.innerHTML="<i class=\"fas fa-times\"></i>"
    }else{
        modal.classList.remove('open') 
        iconeBotao.innerHTML="<i class=\"fab fa-whatsapp\"></i>"
    }
}