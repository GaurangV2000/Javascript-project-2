function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&&password=="admin")
    {
        alert("login sucessfull");
        window.open("http://127.0.0.1:5500/homepage.html");
        return false;
    }
    else
    {
        alert("login failed");
    }
}