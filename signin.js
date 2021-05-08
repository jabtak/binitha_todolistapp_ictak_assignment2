function signIn(nav){
    var username = document.getElementById("username1").value;
    var password = document.getElementById("pswd1").value;
    if(username=="admin" && password=="12345"){
    nav();
    }
    else{
        alert("Incorrect username or password")
    }



}

function navigate(){
    debugger;
    window.location = "index.html";
     
}