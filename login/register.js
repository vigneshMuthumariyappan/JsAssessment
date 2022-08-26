
// ----------register-------------------

let UserNameError =1,emailRegError = 1,RegisterPasswordError=1,RegisterConfirmPasswordError=1;
    let ReName = document.getElementById("UserName");
      ReName.onkeyup = function(){
        setTimeout(function(){
            let word = document.getElementById("UserName").value;
            document.getElementById("ReFinalCheck").innerHTML = "";
            // console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(word))
            if(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(word)){
                document.getElementById("UserNameError").innerHTML = "";
                UserNameError =1;
            }else{
                document.getElementById("UserNameError").innerHTML="Proper Name";
                UserNameError =0;
            }
        },1000)
      } 

      function Re_email(e){
        // console.log(e)
        let word = document.getElementById("UserName").value;
        let email = document.getElementById("ReEmail").value;
        if (e.keyCode == 9){
            if (word == "")
            document.getElementById("UserNameError").innerHTML="Name field is empty";
        }
        document.getElementById("ReFinalCheck").innerHTML = "";
        setTimeout(function(){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                document.getElementById("ReemailError").innerHTML = "";
                emailRegError =1;
            }else{
                document.getElementById("ReemailError").innerHTML="Enter valid email";
                emailRegError =0;
            }
        },1000)

    }
    function Repass(e){
        // console.log(e)
        let email = document.getElementById("ReEmail").value;
        let pass = document.getElementById("RePass").value;
        console.log(pass)
        if (e.keyCode == 9){
            if (email == "")
            document.getElementById("ReemailError").innerHTML="email field is empty";
        }
        document.getElementById("ReFinalCheck").innerHTML = "";
        setTimeout(function(){
            if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(pass)){
                document.getElementById("RepasswordError").innerHTML = "";
                RegisterPasswordError =1;
            }else{
                document.getElementById("RepasswordError").innerHTML="Pass must contain one{'a','A','3'} min 8 letter";
                RegisterPasswordError =0;
            }
        },1000)

    }
    function ReCopass(e){
        // console.log(e)
        let pass = document.getElementById("RePass").value;
        let Copass = document.getElementById("ReCoPass").value;
        console.log(Copass)
        if (e.keyCode == 9){
            if (pass == "")
            document.getElementById("RepasswordError").innerHTML="Password field is empty";
        }
        document.getElementById("ReFinalCheck").innerHTML = "";
        setTimeout(function(){
            if(Copass == pass){
                document.getElementById("ReCopasswordError").innerHTML = "";
                RegisterConfirmPasswordError =1;
            }else{
                document.getElementById("ReCopasswordError").innerHTML="Passmiss Match";
                RegisterConfirmPasswordError =0;
            }
        },1000)

    }

    function ReValidation(){
        if (UserNameError == 1 && emailRegError == 1 && RegisterPasswordError == 1 && RegisterConfirmPasswordError == 1){
            window.location.href = "./LoginForm.html";
        }
        else{
            document.getElementById("ReFinalCheck").innerHTML = "fields are empty or check the fields"
        }
    }








