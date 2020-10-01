var values = [];


var input_name = document.getElementById("nama");
var input_email = document.getElementById("email");
var input_password = document.getElementById("password");
var input_address = document.getElementById("address");
var input_gender = document.getElementsByName("gender");
var input_skintype = document.getElementById("skintype");
var input_customer = document.getElementsByName("customer must agree with terms and conditions");
var div_data = document.getElementById("data");

function addValues(){
    value = input_name.value;
    if(value == null || value.length < 1) {
        alert("Please input valid name!");
        return;
    }

    eemail = input_email.value;
    if(eemail== null || eemail.length <8){
        alert("Please input your email!");
        return;
    }

    pass = input_password.value;
    if(pass == null || pass.length <3){
        alert("Please input valid password!");
        return;
    }

    alamat = input_address.value;
    if(alamat == null || alamat.length <10){
        alert("Please input your address completely!");
        return;
    }

        var genValue = false;

        for(var i=0; i<input_gender.length;i++){
            if(input_gender[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            alert("Please Choose the gender!");
            return false;
        }

    skin = input_skintype.value;
    if(skin == null || skin.length <2){
        alert("Please insert your skin type!");
        return;
    }else if(skin == 'black'){
    }else if(skin == 'white'){
    }else if(skin == 'brown'){
    }else{
        alert("Please insert white, black, or brown!");
        return;
    }

    var customerValue = false;
    for(var i=0; i<input_customer.length;i++){
        if(input_customer[i].checked == true){
            customerValue = true;    
        }
    }

    if(!customerValue){
        alert("Please agree our terms and conditions!");
        return false;
    }

    values.push(value);
    alert("inserted!");
    
}



