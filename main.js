let IsSwitch = false;

function SwitchLogin() {
    IsSwitch = true;

    if (IsSwitch == true) {
        document.getElementById("signup").classList.add("none");
        document.getElementById("login").classList.remove("none");
        document.getElementById("switcher-signup").classList.add("not-active");
        document.getElementById("switcher-login").classList.remove("not-active");
    }
}

function SwtichSignUp() {
    IsSwitch = false;

    if (IsSwitch == false) {
        document.getElementById("login").classList.add("none");
        document.getElementById("signup").classList.remove("none");
        document.getElementById("switcher-signup").classList.remove("not-active");
        document.getElementById("switcher-login").classList.add("not-active");
    }
}