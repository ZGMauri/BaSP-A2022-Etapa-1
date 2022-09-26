window.onload = function (){
    var mail = document.getElementById('email');
    var password = document.getElementById('password');
    var button = document.getElementById('submitBtn');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  
    //button.addEventListener('click', validar);
    mail.addEventListener ('blur', aprove);
    mail.addEventListener ('focus', error);

    function parametro (mail) {
        return emailExpression.test(mail);
    }
    
    function error (e){
        mail.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
        }
    }

    function aprove (e){
        mail.onblur = function (){
            if (!parametro(mail.value)){
                mail.classList.add('error')
            }
        }
    }
}