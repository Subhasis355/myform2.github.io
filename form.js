window.addEventListener('load',function(){
    document.getElementById('buffering').style.display= "none";
    document.getElementById('main-body-container').style.display="block";
}
)




function toggleMenu(){
    var btnIcon = document.getElementById("menuBtnIcon");
    var menu = document.getElementById("menu");

    btnIcon.classList.toggle("menuBtnIconActive");
    menu.classList.toggle("myMenuActive");
}
function handleForm(event){
    var myForm = document.forms["myForm"];
    var sName = myForm["sName"].value;
    var phone = myForm["phone"].value;
    var mailid = myForm["mailid"].value;
    var libNo = myForm["libNo"].value;
    var password = myForm["password"].value;
    var conpassword = myForm["conpassword"].value;

    var errorMsg = document.getElementById("error");

    var reSN = /^([A-Z][a-z]+)\s([A-Z][a-z]+)$/;
    if(sName.length==0){
        errorMsg.innerHTML= "PLEASE ENTER USER NAME!" ;
        myForm["sName"].style.boxShadow = "inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else if(!reSN.test(sName)){
        errorMsg.innerHTML="Invalid Name";
        myForm["sName"].style.boxShadow="inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else{
        errorMsg.innerHTML=""
        myForm["sName"].style.boxShadow="inset 0 0 8px black";
    }

    var rePH = /^[6-9][0-9]{9}$/;
    if(phone.length==0)
    {
        errorMsg.innerHTML="ENTER PHONE NUMBER";
        myForm["phone"].style.boxShadow= "inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else if(!rePH.test(phone)){
        errorMsg.innerHTML="Invalid Phone Number";
        myForm["phone"].style.boxShadow="inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else{
        errorMsg.innerHTML=""
        myForm["phone"].style.boxShadow="inset 0 0 8px black";
    }

    var reMI = /^([a-z0-9\.]){2,50}@([a-z]{2,10}).([a-z]{2,4})(\.[a-z]{2,4})?$/;
    if(mailid.length==0)
    {
        errorMsg.innerHTML="ENTER MAIL ID";
        myForm["mailid"].style.boxShadow= "inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else if(!reMI.test(mailid)){
        errorMsg.innerHTML="Invalid Mail ID";
        myForm["mailid"].style.boxShadow="inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else{
        errorMsg.innerHTML=""
        myForm["mailid"].style.boxShadow="inset 0 0 8px black";
    }

    var reLN = /^([a-z]){2,10}@([0-9]{2,5})$/;
    if(libNo.length==0)
    {
        errorMsg.innerHTML="ENTER LIB NO";
        myForm["libNo"].style.boxShadow= "inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else if(!reLN.test(libNo)){
        errorMsg.innerHTML="Invalid Library No";
        myForm["libNo"].style.boxShadow="inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else{
        errorMsg.innerHTML=""
        myForm["libNo"].style.boxShadow="inset 0 0 8px black";
    }

    if(password.length==0)
    {
        errorMsg.innerHTML="ENTER PASSWORD";
        myForm["password"].style.boxShadow= "inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else if(password!=conpassword){
        errorMsg.innerHTML="Passwoed not matched";
        myForm["conpassword"].style.boxShadow="inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else{
        errorMsg.innerHTML=""
        myForm["password"].style.boxShadow="inset 0 0 8px black";
    }
    return true;
}
var flag = true;
function pwdToggle(){
    var pass = document.getElementById("pass");
    var conpass = document.getElementById("conpass");
    var eye = document.getElementById("eye");
    eye.classList.toggle("glyphicon-eye-close");
    if(flag)
    {
        pass.type="text";
        conpass.type="text";
        flag = false;
    }
    else{
        pass.type="password";
        conpass.type="password";
        flag=true;
    }

}