document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if(userEmail == 'sontan@bap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    }
    else{
        console.log('Your email or password is incorrect!!!')
    }
})
