
//  email check -----------------------------------------------
let emailError =1,passError = 1;
   function emailField(){
    let word = document.getElementById("email").value;
    if(word == ""){
        document.getElementById("emailError").innerHTML = "";
        cancelTimeout(timeOut);
    }
    let timeOut = setTimeout(function(word){
            // let word = document.getElementById("email").value;
            document.getElementById("FinalCheck").innerHTML = "";
            // console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(word))
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(word)){
                document.getElementById("emailError").innerHTML = "";
                checkError =1;
            }else{
                document.getElementById("emailError").innerHTML="Please check email address";
                checkError =0;
            }
        },1500,word)
      } 
    function passWord(e){
        console.log(e.keyCode)
        let word = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;
        if (e.keyCode == 9){
            if (word == "")
            document.getElementById("emailError").innerHTML="Email field is empty";
        }
        if(pass == "" || pass == e.keyCode == 9){
            document.getElementById("passwordError").innerHTML = "";
            cancelTimeout(PasstimeOut);
        }
        document.getElementById("FinalCheck").innerHTML = "";
        console.log(pass);
       let PasstimeOut = setTimeout(function(){
            if(pass.length>=8 ){
                document.getElementById("passwordError").innerHTML = "";
                passError =1;
            }else{
                document.getElementById("passwordError").innerHTML="password incorrect";
                passError =0;
            }
        },1500)
            // console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(word))
    }


function Validation(e){
    e.preventDefault();
    let pass = document.getElementById("pass").value;
    let emailVal = document.getElementById("email").value;
    // console.log(localStorage.getItem(pass));
    if (e.keyCode == 9){
        if (pass == "")
        document.getElementById("passwordError").innerText="Password field is empty";
    }
    if(emailField.value == "" || document.getElementById("pass").value == ""){
        document.getElementById("FinalCheck").innerHTML = "Field are empty"
    }
    else if (checkError == 1 && passError == 1 && JSON.parse(localStorage.getItem(emailVal)).password == pass){
        sessionStorage.setItem("name",JSON.parse(localStorage.getItem(emailVal)).name);
        window.location.href = `./welcome.html?name=${localStorage.getItem(pass)}`;
    }
    else{
        document.getElementById("FinalCheck").innerHTML = "Check the Field";
    }
}
// console.log("Samkiller54321")
