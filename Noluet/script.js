function signup(){
    var  password1 = getElementById(`passsugest`).value
    var  password2 = getElementById(`passconf`).value

    if (password1 != password2){
        window.alert('Your Passwords Does Not Match')
    }
}

function me(){
    document.getElementById("h3").innerHTML = "me"; 
}
