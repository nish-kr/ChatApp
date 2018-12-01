function showPass() {
    var pass = document.getElementById('pass');
    if (document.getElementById('check').checked) {
        pass.setAttribute('type', 'text');
    } else {
        pass.setAttribute('type', 'password');
    }
}