'use strict'

window.addEventListener('load', () => {
    var keyLength = this.document.querySelector('#length');
    var uppercase = this.document.querySelector('#uppercase');
    var numbers = this.document.querySelector('#numbers');
    var specialCharacters = this.document.querySelector('#special_characters');
    var form = this.document.querySelector('#data-form');
    var formContent = this.document.querySelector('.main-content');
    var passwordContent = this.document.querySelector('.password-content');
    var homeBtn = this.document.querySelector('#home');
    var passwordSubtitle = this.document.querySelector('.password')

    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        
        if(keyLength.value != ''){
            var letters;
            var numbersChar;
            var specials;
            var allCharacters= '';
            
            if(uppercase.checked ){
                letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                allCharacters += letters;
            }else{
                letters = 'abcdefghijklmnopqrstuvwxyz';
                allCharacters += letters;
            };

            if(numbers.checked ){
                numbersChar = '0123456789';
                allCharacters += numbersChar;
            };

            if(specialCharacters.checked){
                specials = '!"#$%&/()=`?¡¿+*}{][-_.,><@|°¬';
                allCharacters += specials;
            };

            var password = '';

            for(var i = 0; i < parseInt(keyLength.value); i++){
                var indiceAleatorio = Math.floor(Math.random()*allCharacters.length)
                password += allCharacters[indiceAleatorio];
            };

            
            uppercase.checked = false;
            numbers.checked = false;
            specialCharacters.checked = false;
            keyLength.value = "";

            formContent.style.transform = 'translateX(-800px)';
            formContent.style.opacity = '0';
            passwordContent.style.transform = 'translateX(0px)';
            passwordContent.style.opacity = '1';
            
            passwordSubtitle.innerHTML = password;
        }else{
            alert('La longitud de la contraseña es obligatoria');
        };

    });

    homeBtn.addEventListener('click', () => {
        formContent.style.transform = 'translateX(0px)';
        formContent.style.opacity = '1';
        passwordContent.style.transform = 'translateX(800px)';
        passwordContent.style.opacity = '0';
        passwordSubtitle.innerHTML = '';
    });


});
