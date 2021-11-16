function contactUs () {
    var fName = document.getElementById("first").value;
    var lName = document.getElementById("last").value;
    var street = document.getElementById("number").value;
    var streetName = document.getElementById("streetName").value;
    var city =  document.getElementById("city").value;
    var state =  document.getElementById("state").value;
    var zip =  document.getElementById("zip").value;
    var phone =  document.getElementById("phone").value;

    // Validation
    if(!fName.match(/^[A-Za-z]+$/)) {
        alert("You didn't enter a first name");
        return false;
    } else if(!lName.match(/^[A-Za-z]+$/)) {
        alert("You didn't enter a Last Name");
        return false;
    }else if(!street.match(/^[-+]?[0-9]+$/)) {
        alert("You didn't enter a Street Number");
        return false;
    }else if(!streetName.match(/^[A-Za-z]+$/)) {
        alert("You didn't enter a Street Name");
        return false;
    }else if(!city.match(/^[A-Za-z]+$/)) {
        alert("You didn't enter a city");
        return false;
    }else if(!state.match(/^[A-Za-z]+$/)) {
        alert("You didn't enter a State");
        return false;
    }else if(!zip.match(/^\d{6}$/)) {
        alert("You didn't enter a Zip Code");
        return false;
    }else if(!phone.match(/^\d{10}$/)) {
        alert("You didn't enter a Phone Number");
        return false;
    }

    // Dom manipulation
    document.getElementById("name").innerHTML = fName + " " + lName;
    document.getElementById("address").innerHTML = street + " " + streetName;
    document.getElementById("cityState").innerHTML = city + " " + state + " " + zip;

    // Submit promt
    if(contactUs) {
        var reply = prompt("How would you like us to contact you?Type email, call or snail mail.");
        if(reply == "email") {
            var email = prompt("please enter your email address.");
            document.getElementById("email").innerHTML = email;
        } else if(reply == "call") {
            alert("we will call you at: "+ phone);
            var phone1 = phone;
            document.getElementById("phoneNumber").innerHTML = phone1;
        } else if (reply == "snail mail") {
            alert("we will mail you a letter to: "+ street + " " + streetName)
        }
    }

}