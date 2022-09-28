window.onload = function (){
    var mail = document.getElementById('email');
    var password = document.getElementById('password');
    var button = document.getElementById('submitBtn');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var pError5 = document.getElementById('errorMsgMail');
    var pError11 = document.getElementById('errorMsgPass');
    var p = document.createElement("p");
    var pText = document.createTextNode('');
  
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
            pError5.removeChild(p);
            pText.textContent = '';
        }
    }

    function aprove (e){
        mail.onblur = function (){
            if (!parametro(mail.value)){
                mail.classList.add('error')
                pText.textContent = 'Formato de mail invalido';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError5.appendChild(p);
            }
        }
    }

    password.addEventListener ('blur', aprovePass);
    password.addEventListener ('focus', errorPass);

    function errorPass (e){
        password.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError11.removeChild(p);
            pText.textContent = '';
        }
    }

    function aprovePass (e){
        password.onblur = function (){
            if(password.value.length < 8){
                password.classList.add('error');
                pText.textContent = 'Tiene que tener al menos 8 caracteres';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError11.appendChild(p);
            }else {
                console.log('Correcto')
            }
        }
    }

    button.addEventListener('click', confirm);

    function confirm (e){
        e.preventDefault()
        if (password.classList.contains('error')){
            alert('La contraseña no coincide');
        }else if (mail.classList.contains('error')){
            alert('El mail no es valido');
        }else {
            alert(mail.value + '\n' + password.value);
        }
    }
}