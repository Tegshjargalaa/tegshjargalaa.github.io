function CheckPassword(inputtxt) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (inputtxt.value.match(passw)) {
        alert('Correct, try another...')
        return true;
    }
    else {
        alert('Your password must be at least 10 character that include at leats one number and one uppercase and one lowercase letter!')
        return false;
    }
}
