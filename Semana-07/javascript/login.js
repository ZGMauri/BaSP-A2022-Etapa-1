window.onload = function (){
    var mail = document.getElementById('email');
    var password = document.getElementById('password');
    var button = document.getElementById('submitBtn');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var pError5 = document.getElementById('error-msg-mail');
    var pError11 = document.getElementById('error-msg-pass');
    var p = document.createElement("p");
    var pText = document.createTextNode('');
    var errorsArray = [];
    var haveErrors = false;

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
                pText.textContent = 'Invalid email format';
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
                pText.textContent = 'Should be at least 8 characters';
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
        errorsArray = [];
        haveErrors = false;
        if (password.classList.contains('error')){
            errorsArray.push (' Wrong username/password combination ');
            haveErrors = true;
        }
        if (mail.classList.contains('error')){
            errorsArray.push (' Invalid email format ');
            haveErrors = true;
        }
        if (!haveErrors) {
            alert(mail.value + '\n' + password.value);
            var url = `https://basp-m2022-api-rest-server.herokuapp.com/login?email=${mail.value}&password=${password.value}`;
            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    if (data.success == true) {
                        var msgSucess = [
                            'Request succesfull:', 
                            data.msgSucess
                        ]
                        alert(msgSucess.join('\n'))
                    } else {
                        var msgError = [
                            'An error has occured:',
                            data.msgError
                        ]
                        alert(msgError.join('\n'));
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        }
        if (haveErrors){
           alert(errorsArray.join('\n')); 
        }
    }
}