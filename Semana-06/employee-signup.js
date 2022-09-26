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

    //button.addEventListener('click', findLetters);
 
    //var substrings = name.value.split('');
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
        }
    }

    function aproveName (e){
        name.onblur = function (){
            var y = name.value;
            if (name.value.length <= 3){
                console.log('debe tener mas de 3 letras');
                name.classList.add('error');
            }else if (findNumbers(y)){
                console.log('no puede tener numeros');
                name.classList.add('error');
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
        }
    }

    function aproveLastName (e){
        lastName.onblur = function (){
            var y = lastName.value;
            if (lastName.value.length <= 3){
                console.log('debe tener mas de 3 letras');
                lastName.classList.add('error');
            }else if (findNumbers(y)){
                console.log('no puede tener numeros');
                lastName.classList.add('error');
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
        }
    }

    function aproveAdress (e){
        adress.onblur = function (){
            
            if (adress.value.length < 5){
                console.log('debe tener al menos 5 caracteres');
                adress.classList.add('error');
            }else if (adress.value.indexOf(' ') == -1 || adress.value.indexOf(' ') == 0 || adress.value.indexOf(' ') == (adress.value.length) -1 ){
                console.log('formato no valido');
                adress.classList.add('error');
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
        }
    }

    function aproveCity (e){
        city.onblur = function (){ 
            var y = city.value;          
            if (city.value.length <= 3){
                console.log('debe tener mas de 3 letras');
                city.classList.add('error');
            }else if(!findNumbers(y) || !findLetters(y)){
                console.log('formato invalido');
                city.classList.add('error');
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
        }
    }

    function aprove (e){
        mail.onblur = function (){
            if (!parametro(mail.value)){
                mail.classList.add('error')
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
        }
    }

    function aproveDni (e){
        dni.onblur = function (){
            if(isNaN(dni.value)){
                alert('El DNI debe contener solo numeros')
                dni.classList.add('error')
            }else if (dni.value.length < 7){
                alert('El DNI debe contener mas de 7 caracteres')
                dni.classList.add('error')
            }else {
                alert('Correcto')
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
        }
    }

    function aprovePhone (e){
        phone.onblur = function (){
            if(isNaN(phone.value)){
                alert('El telefono debe contener solo numeros')
                phone.classList.add('error')
            }else if (phone.value.length != 10){
                alert('El telefono debe contener 10 caracteres')
                phone.classList.add('error')
            }else {
                alert('Correcto')
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
        }
    }

    function aprovePostalCode (e){
        postalCode.onblur = function (){
            if(isNaN(postalCode.value)){
                alert('El codigo postal debe contener solo numeros')
                postalCode.classList.add('error')
            }else if ((postalCode.value.length < 4) || (postalCode.value.length > 5)){
                alert('El codigo postal debe contener entre 4 y 5 caracteres')
                postalCode.classList.add('error')
            }else {
                alert('Correcto')
            }
        }
    }
  
   /*  button.addEventListener('click', validate);

    function validate (e) {
        e.preventDefault()
         if(name.value.length < 3){
            alert('El nombre debe tener al menos 3 caracteres');
        }else if (!isNaN(name.value)){
            alert('El nombre no puede contener numeros')
        }
 
         if(isNaN(dni.value)){
            alert('El DNI debe contener solo numeros')
        }else if (dni.value.length < 7){
            alert('El DNI debe contener mas de 7 caracteres')
        }else {
            alert('Correcto')
        }

        if(isNaN(phone.value)){
            alert('El telefono debe contener solo numeros')
        }else if (phone.value.length != 10){
            alert('El telefono debe contener 10 caracteres')
        }else {
            alert('Correcto')
        }

        if(isNaN(postalCode.value)){
            alert('El codigo postal debe contener solo numeros')
        }else if ((postalCode.value.length >= 4) && (postalCode.value.length <= 5)){
            alert('El codigo postal debe contener 10 caracteres')
        }else {
            alert('Correcto')
        }

        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        function parametro (mail) {
            return emailExpression.test(mail);
        }

        if (parametro(mail.value)){
            console.log('mail correcto');
        }else {
            console.log('mail incorrecto');
        }
    } */
}