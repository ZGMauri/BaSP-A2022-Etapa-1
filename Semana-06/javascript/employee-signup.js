window.onload = function (){
    var name = document.getElementById('name');
    var lastName = document.getElementById('last-name');
    var dni = document.getElementById('dni');
    var date = document.getElementById('date');
    var phone = document.getElementById('phone');
    var adress = document.getElementById('adress');
    var city = document.getElementById('city');
    var postalCode = document.getElementById('postal-code');
    var mail = document.getElementById('mail');
    var password = document.getElementById('pass');
    var repeatPassword = document.getElementById('repeat-pass');
    var button = document.getElementById('submitBtn');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var arrayNumber = ['0','1','2','3','4','5','6','7','8','9'];
    var arrayChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','w','x','y','z'];
    var haveLetters = false;
    var haveNumbers = false;
    var pError1 = document.getElementById('errorMsgName');
    var pError2 = document.getElementById('errorMsgCity');
    var pError3 = document.getElementById('errorMsgDni');
    //var pError4 = document.getElementById('errorMsgDate');
    var pError5 = document.getElementById('errorMsgMail');
    var pError6 = document.getElementById('errorMsgRPass');
    var pError7 = document.getElementById('errorMsgLName');
    var pError8 = document.getElementById('errorMsgPostal');
    var pError9 = document.getElementById('errorMsgPhone');
    var pError10 = document.getElementById('errorMsgAdress');
    var pError11 = document.getElementById('errorMsgPass');
    var p = document.createElement("p");
    var pText = document.createTextNode('');
 
    function findLetters (x){
        haveLetters = false;
        var yourstring = x.split('')
        console.log(yourstring);
        length = arrayChar.length;
        while(length--) {
            if (yourstring.indexOf(arrayChar[length])!=-1) {
                console.log('verdadero');
                haveLetters = true;
        }
            console.log('false')
        }
        return haveLetters; 
    }

    function findNumbers (y){
        haveNumbers = false;
        var yourstring = y.split('')
        console.log(yourstring);
        length = arrayNumber.length;
        while(length--) {
            if (yourstring.indexOf(arrayNumber[length])!=-1) {
                console.log('verdadero');
                haveNumbers = true;
        }
        console.log('false')
        }
        return haveNumbers; 
    }

    name.addEventListener ('blur', aproveName);
    name.addEventListener ('focus', errorName);

    function errorName (e){
        name.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError1.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveName (e){
        name.onblur = function (){
            var y = name.value;
            if (name.value.length <= 3){
                name.classList.add('error');
                pText.textContent = 'Tiene que tener mas de 3 caracteres';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError1.appendChild(p);
            }else if (findNumbers(y)){
                name.classList.add('error');
                pText.textContent= 'No puede tener numeros';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError1.appendChild(p);
            }else{
                console.log('correcto')
            }
        }
    }

    lastName.addEventListener ('blur', aproveLastName);
    lastName.addEventListener ('focus', errorLastName);

    function errorLastName (e){
        lastName.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError7.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveLastName (e){
        lastName.onblur = function (){
            var y = lastName.value;
            if (lastName.value.length <= 3){
                lastName.classList.add('error');
                pText.textContent = 'Tiene que tener mas de 3 caracteres';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError7.appendChild(p);
            }else if (findNumbers(y)){
                lastName.classList.add('error');
                pText.textContent= 'No puede tener numeros';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError7.appendChild(p);
            }else{
                console.log('correcto')
            }
        }
    }

    adress.addEventListener ('blur', aproveAdress);
    adress.addEventListener ('focus', errorAdress);

    function errorAdress (e){
        adress.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError10.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveAdress (e){
        adress.onblur = function (){
            
            if (adress.value.length < 5){
                adress.classList.add('error');
                pText.textContent = 'Debe tener al menos 5 caracteres';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError10.appendChild(p);
            }else if (adress.value.indexOf(' ') == -1 || adress.value.indexOf(' ') == 0 || adress.value.indexOf(' ') == (adress.value.length) -1 ){
                adress.classList.add('error');
                pText.textContent = 'Debe contener letras, numeros y un espacio en el medio';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError10.appendChild(p);
            }else{
                console.log('oki doki')
            }
        }
    }

    city.addEventListener ('blur', aproveCity);
    city.addEventListener ('focus', errorCity);

    function errorCity (e){
        city.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError2.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveCity (e){
        city.onblur = function (){ 
            var y = city.value;          
            if (city.value.length <= 3){
                city.classList.add('error');
                pText.textContent = 'Tiene que tener mas de 3 caracteres';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError2.appendChild(p);
            }else if(!findNumbers(y) || !findLetters(y)){
                city.classList.add('error');
                pText.textContent = 'Debe contener texto alfanumerico';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError2.appendChild(p);
            }else{
                console.log('correcto')
            }
        }
    }


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

    dni.addEventListener ('blur', aproveDni);
    dni.addEventListener ('focus', errorDni);

    function errorDni (e){
        dni.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError3.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveDni (e){
        dni.onblur = function (){
            if(isNaN(dni.value)){
                dni.classList.add('error')
                pText.textContent = 'El DNI debe contener solo numeros';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError3.appendChild(p);
            }else if (dni.value.length < 7){
                dni.classList.add('error')
                pText.textContent = 'El DNI debe contener mas de 7 caracteres';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError3.appendChild(p);
            }else {
                console.log('Correcto')
            }
        }
    }

    phone.addEventListener ('blur', aprovePhone);
    phone.addEventListener ('focus', errorPhone);

    function errorPhone (e){
        phone.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError9.removeChild(p);
            pText.textContent = '';
        }
    }

    function aprovePhone (e){
        phone.onblur = function (){
            if(isNaN(phone.value)){
                phone.classList.add('error')
                pText.textContent = 'El telefono debe contener solo numeros';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError9.appendChild(p);
            }else if (phone.value.length != 10){
                phone.classList.add('error')
                pText.textContent = 'Debe contener al menos 10 caracteres';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError9.appendChild(p);
            }else {
                console.log('Correcto')
            }
        }
    }

    postalCode.addEventListener ('blur', aprovePostalCode);
    postalCode.addEventListener ('focus', errorPostalCode);

    function errorPostalCode (e){
        postalCode.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError8.removeChild(p);
            pText.textContent = '';
        }
    }

    function aprovePostalCode (e){
        postalCode.onblur = function (){
            if(isNaN(postalCode.value)){
                postalCode.classList.add('error')
                pText.textContent = 'El codigo postal debe contener solo numeros';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError8.appendChild(p);
            }else if ((postalCode.value.length < 4) || (postalCode.value.length > 5)){
                postalCode.classList.add('error')
                pText.textContent = 'El codigo postal debe contener entre 4 y 5 caracteres';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError8.appendChild(p);
            }else {
                console.log('Correcto');
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

    repeatPassword.addEventListener ('blur', aproveRPass);
    repeatPassword.addEventListener ('focus', errorRPass);

    function errorRPass (e){
        repeatPassword.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError6.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveRPass (e){
        repeatPassword.onblur = function (){
            if(repeatPassword.value != password.value){
                password.classList.add('error');
                pText.textContent = 'Las contraseñas no coinciden';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError6.appendChild(p);
            }else {
                console.log('Correcto')
            }
        }
    }

    function convertDateFormat(date) {
        var dateReverse = date.split('-').reverse().join('/');
        return dateReverse;
   }

    button.addEventListener('click', confirm);

    function confirm (e){
        e.preventDefault()
        if (name.classList.contains('error')){
            alert('El nombre no es valido');
        }else if (lastName.classList.contains('error')){
            alert('El apellido no es valido');
        }else if (city.classList.contains('error')){
            alert('El campo city no es valido');
        }else if (postalCode.classList.contains('error')){
            alert('El codigo postal no es valido');
        }else if (dni.classList.contains('error')){
            alert('El DNI no es valido');
        }else if (phone.classList.contains('error')){
            alert('El telefono no es valido');
        }else if (date.classList.contains('error')){
            alert('La fecha no es valida');
        }else if (adress.classList.contains('error')){
            alert('La direccion no es valido');
        }else if (mail.classList.contains('error')){
            alert('El mail no es valido');
        }else if (password.classList.contains('error')){
            alert('El contraseña no es valida');
        }else if (repeatPassword.classList.contains('error')){
            alert('Las contraseñas no coinciden');
        }else {
            alert(name.value + '\n' + lastName.value + '\n' + city.value + '\n' + postalCode.value + '\n' + dni.value + '\n' + phone.value 
            + '\n' + convertDateFormat(date.value) + '\n' + adress.value + '\n' + mail.value + '\n' + password.value + '\n' + repeatPassword.value);
        }
    }
}