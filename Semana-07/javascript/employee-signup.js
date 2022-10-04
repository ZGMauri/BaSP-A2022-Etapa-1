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
    var pError1 = document.getElementById('error-msg-name');
    var pError2 = document.getElementById('error-msg-city');
    var pError3 = document.getElementById('error-msg-dni');
    var pError5 = document.getElementById('error-msg-mail');
    var pError6 = document.getElementById('error-msg-rpass');
    var pError7 = document.getElementById('error-msg-lname');
    var pError8 = document.getElementById('error-msg-postal');
    var pError9 = document.getElementById('error-msg-phone');
    var pError10 = document.getElementById('error-msg-adress');
    var pError11 = document.getElementById('error-msg-pass');
    var p = document.createElement("p");
    var pText = document.createTextNode('');
    var errorsArray = [];
    var haveErrors = false;
 
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

    function errorName (){
        name.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError1.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveName (){
        name.onblur = function (){
            var y = name.value;
            if (name.value.length <= 3){
                name.classList.add('error');
                pText.textContent = 'Name must have more than 3 letters';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError1.appendChild(p);
            }else if (findNumbers(y)){
                name.classList.add('error');
                pText.textContent= 'Name must have only letters';
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

    function errorLastName (){
        lastName.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError7.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveLastName (){
        lastName.onblur = function (){
            var y = lastName.value;
            if (lastName.value.length <= 3){
                lastName.classList.add('error');
                pText.textContent = 'LastName must have more than 3 letters';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError7.appendChild(p);
            }else if (findNumbers(y)){
                lastName.classList.add('error');
                pText.textContent= 'LastName must have only letters';
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

    function errorAdress (){
        adress.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError10.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveAdress (){
        adress.onblur = function (){
            
            if (adress.value.length < 5){
                adress.classList.add('error');
                pText.textContent = 'Address must have at least 5 characters';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError10.appendChild(p);
            }else if (adress.value.indexOf(' ') == -1 || adress.value.indexOf(' ') == 0 || adress.value.indexOf(' ') == (adress.value.length) -1 ){
                adress.classList.add('error');
                pText.textContent = 'Address must have only numbers, letters and a space in the middle';
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

    function errorCity (){
        city.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError2.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveCity (){
        city.onblur = function (){ 
            var y = city.value;          
            if (city.value.length <= 3){
                city.classList.add('error');
                pText.textContent = 'City must have more than 3 letters';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError2.appendChild(p);
            }else if(!findNumbers(y) || !findLetters(y)){
                city.classList.add('error');
                pText.textContent = 'City must have alphanumeric text';
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
    
    function error (){
        mail.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError5.removeChild(p);
            pText.textContent = '';
        }
    }

    function aprove (){
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

    dni.addEventListener ('blur', aproveDni);
    dni.addEventListener ('focus', errorDni);

    function errorDni (){
        dni.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError3.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveDni (){
        dni.onblur = function (){
            if(isNaN(dni.value)){
                dni.classList.add('error')
                pText.textContent = 'DNI must have only numbers';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError3.appendChild(p);
            }else if (dni.value.length < 7){
                dni.classList.add('error')
                pText.textContent = 'DNI must have more than 7 numbers';
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

    function errorPhone (){
        phone.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError9.removeChild(p);
            pText.textContent = '';
        }
    }

    function aprovePhone (){
        phone.onblur = function (){
            if(isNaN(phone.value)){
                phone.classList.add('error')
                pText.textContent = 'Phone must have only numbers';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError9.appendChild(p);
            }else if (phone.value.length != 10){
                phone.classList.add('error')
                pText.textContent = 'Phone must have 10 numbers';
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

    function errorPostalCode (){
        postalCode.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError8.removeChild(p);
            pText.textContent = '';
        }
    }

    function aprovePostalCode (){
        postalCode.onblur = function (){
            if(isNaN(postalCode.value)){
                postalCode.classList.add('error')
                pText.textContent = 'Zip must have only numbers';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError8.appendChild(p);
            }else if ((postalCode.value.length < 4) || (postalCode.value.length > 5)){
                postalCode.classList.add('error')
                pText.textContent = 'Zip must have between 4 and 5 numbers';
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

    function errorPass (){
        password.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError11.removeChild(p);
            pText.textContent = '';
        }
    }

    function aprovePass (){
        password.onblur = function (){
            if(password.value.length < 8){
                password.classList.add('error');
                pText.textContent = 'Password must have more than 7 letters';
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

    function errorRPass (){
        repeatPassword.onfocus = function (){
            if (this.classList.contains('error')){
                this.classList.remove('error');
            }
            pError6.removeChild(p);
            pText.textContent = '';
        }
    }

    function aproveRPass (){
        repeatPassword.onblur = function (){
            if(repeatPassword.value != password.value){
                repeatPassword.classList.add('error');
                pText.textContent = 'Passwords dont match';
                p.appendChild(pText);
                p.style.color = '#FF0000';
                pError6.appendChild(p);
            }else {
                console.log('Correcto')
            }
        }
    }

    function convertDateFormat(date) {
        var dateReverse = date.split('-');
        console.log(dateReverse);
        return dateReverse[1] + '/' + dateReverse[2] + '/' + dateReverse[0];
   }

    if (localStorage != 0){
        console.log('entramos al if')
        name.value = localStorage.getItem('name');
        lastName.value = localStorage.getItem('lastName');
        dni.value = localStorage.getItem('dni');
        date.value = localStorage.getItem('date');
        phone.value = localStorage.getItem('phoneNumber');
        adress.value = localStorage.getItem('address');
        city.value = localStorage.getItem('location');
        postalCode.value = localStorage.getItem('postalCode');
        mail.value = localStorage.getItem('email');
        password.value = localStorage.getItem('password');
        repeatPassword.value = localStorage.getItem('repeatPassword');
    }

    button.addEventListener('click', confirm);

    function confirm (e){
        e.preventDefault()
        errorsArray = [];
        haveErrors = false;
        if (name.classList.contains('error')){
            errorsArray.push (' Field name have errors ');
            haveErrors = true;
        }
        if (lastName.classList.contains('error')){
            errorsArray.push (' Field last name have errors ');
            haveErrors = true;
        }
        if (city.classList.contains('error')){
            errorsArray.push (' Field city have errors ');
            haveErrors = true;
        }
        if (postalCode.classList.contains('error')){
            errorsArray.push (' Field postal code have errors ');
            haveErrors = true;
        }
        if (dni.classList.contains('error')){
            errorsArray.push (' Field DNI have errors ');
            haveErrors = true;
        }
        if (phone.classList.contains('error')){
            errorsArray.push (' Field phone have errors ');
            haveErrors = true;
        }
        if (date.classList.contains('error')){
            errorsArray.push (' Invalid date format ');
            haveErrors = true;
        }
        if (adress.classList.contains('error')){
            errorsArray.push (' Field adress have errors ');
            haveErrors = true;
        }
        if (mail.classList.contains('error')){
            errorsArray.push (' Invalid mail format ');
            haveErrors = true;
        }
        if (password.classList.contains('error')){
            errorsArray.push (' Field password have errors ');
            haveErrors = true;
        }
        if (repeatPassword.classList.contains('error')){
            errorsArray.push (' Passwords dont match ');
            haveErrors = true;
        }
        if (!haveErrors) {
            alert('Name: ' + name.value + '\n' + 'LastName: ' + lastName.value + '\n' + 'City: ' + city.value + '\n' + 'PostalCode: ' + postalCode.value + '\n' + 'DNI: ' + dni.value + '\n' + 'Phone: ' + phone.value 
            + '\n' + 'Date: ' + convertDateFormat(date.value) + '\n' + 'Adress: ' + adress.value + '\n' + 'Email: ' + mail.value + '\n' + 'Password: ' + password.value + '\n' + 'ConfirmPassword: ' + repeatPassword.value);
            var url = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${name.value}&lastName=${lastName.value}&dni=${dni.value}&dob=${convertDateFormat(date.value)}&phone=${phone.value}&address=${adress.value}&city=${city.value}&zip=${postalCode.value}&email=${mail.value}&password=${password.value}&repeatPassword=${repeatPassword.value}`;
            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    if (data.success == true) {
                        localStorage.setItem('name', name.value);
                        localStorage.setItem('lastName', lastName.value);
                        localStorage.setItem('dni', dni.value);
                        localStorage.setItem('date', date.value);
                        localStorage.setItem('phoneNumber', phone.value);
                        localStorage.setItem('address', adress.value);
                        localStorage.setItem('location', city.value);
                        localStorage.setItem('postalCode',postalCode.value);
                        localStorage.setItem('email',mail.value);
                        localStorage.setItem('password',password.value);
                        localStorage.setItem('repeatPassword',repeatPassword.value);

                        var msgSucess = [
                            'Request succesfull:',
                            data.msgSucess
                        ]
                        alert(msgSucess.join('\n'))
                    } else {
                        var msgError = [
                            'An error has occured:',
                            console.log(data)
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

