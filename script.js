function isBinus(){
    var selection=document.getElementById("univ");
    if(selection.value==="Universitas Bina Nusantara"){
        document.getElementById("binusian-info").style.display="block";
    }
    else{
        document.getElementById("binusian-info").style.display="none";
    }
};

function validateEmail(email){
    var confirm = /^[^\s@]+@[^\s@]+$/;
    
    return confirm.test(email);
}

function validateFilled(string,len,type){
    if(type=="more"){
        return string.length>len;
    }
    if(type=="equal"){
        return string.length==len;
    }
    if(type=="less"){
        return string.length<len;
    }
}

function validateNums(input){
    return (!isNaN(input));
}

function writeHTML(id,string){
    document.getElementById(id).innerHTML=string;
}

//=============== REGISTER SCRIPT =================

function registValidation(){
    var nama=document.getElementById("nama").value;
    var univ=document.getElementById("univ").value;
    var email=document.getElementById("email").value;
    var no_wa=document.getElementById("no-wa").value;
    var id_line=document.getElementById("id-line").value;
    var password=document.getElementById("password").value;

    if(!validateFilled(nama,0,"more")){
        writeHTML("invalid-name","Name can't be empty!");
    }
    else{
        writeHTML("invalid-name","");
    }

    if(!validateFilled(email,0,"more")){
        writeHTML("invalid-email","Email can't be empty!");
    }
    else if(!validateEmail(email)){
        writeHTML("invalid-email","Invalid email!");
    }
    else{
        writeHTML("invalid-email","");
    }

    if(!validateFilled(no_wa,0,"more")){
        writeHTML("invalid-wa","No. WhatsApp can't be empty");
    }
    else if(!validateNums(no_wa)){
        writeHTML("invalid-wa","Numbers only");
    }
    else{
        writeHTML("invalid-wa","");
    }

    if(!validateFilled(id_line,0,"more")){
        writeHTML("invalid-line","ID LINE can't be empty");
    }
    else{
        writeHTML("invalid-line","");
    }

    if(!validateFilled(password,0,"more")){
        writeHTML("invalid-pass","Password can't be empty");
    }
    else{
        writeHTML("invalid-pass","");
    }

    if(univ=="Universitas Bina Nusantara"){
        var nim=document.getElementById("nim").value;
        var region=document.getElementById("region").value;
        var major=document.getElementById("major").value;

        if(!validateFilled(nim,10,"equal")){
            writeHTML("invalid-nim","NIM needs to be 10 in length");
        }
        else if(!validateNums(nim)){
            writeHTML("invalid-nim","NIM needs to be in number");
        }
        else{
            writeHTML("invalid-nim","");
        }

        if(!validateFilled(major,0,"more")){
            writeHTML("invalid-major","Major can't be empty");
        }
        else{
            writeHTML("invalid-major","");
        }
    }
    else{
        writeHTML("invalid-nim","");
        writeHTML("invalid-major","");
    }
}


//=============== LOGIN SCRIPT =================

function loginValidation(){
    var form=document.getElementById("login");
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(!validateFilled(email,0,"more")){
        writeHTML("invalid-email","Email can't be empty!");
    }
    else{
        if (!validateEmail(email)){
            writeHTML("invalid-email","Invalid email!");
        }
        else{
            writeHTML("invalid-email","");
        }
    }
    
    
    if(!validateFilled(password,0,"more")){
        writeHTML("empty-pass","Password can't be empty!");
    }
    else{
        writeHTML("empty-pass","");
    }
};