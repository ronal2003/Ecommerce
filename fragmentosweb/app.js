// Validación Bootstrap
(function () {
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            // Validar coincidencia de contraseñas en registro
            const pass = form.querySelector('#regPass');
            const pass2 = form.querySelector('#regPass2');
            if (pass && pass2) {
                if (pass.value !== pass2.value) {
                    pass2.setCustomValidity('Las contraseñas no coinciden');
                } else {
                    pass2.setCustomValidity('');
                }
            }
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                // Aquí harías fetch() a tu API
                alert('Formulario válido. Conéctalo a tu backend para completar el flujo.');
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// Mostrar / ocultar contraseña (Login)
const toggleLoginPass = document.getElementById('toggleLoginPass');
const loginPassword = document.getElementById('loginPassword');
if (toggleLoginPass) {
    toggleLoginPass.addEventListener('click', () => {
        const isPwd = loginPassword.getAttribute('type') === 'password';
        loginPassword.setAttribute('type', isPwd ? 'text' : 'password');
        toggleLoginPass.querySelector('i').className = isPwd ? 'bi bi-eye-slash' : 'bi bi-eye';
    });
}

// Placeholders para OAuth (reemplaza con tu lógica real)
function fakeOAuth(provider) {
    alert('Redirigiendo a ' + provider + '... (demo)');
}
window.fakeOAuth = fakeOAuth;