// Giriş formu gönderildiğinde
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Başarıyla giriş yaptınız!");
});

// Kayıt formu gönderildiğinde
document.querySelector('.register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Başarıyla kayıt oldunuz!");
});