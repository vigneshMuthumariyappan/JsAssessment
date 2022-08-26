$(document).ready(function(){
    $.validator.setDefaults({
        submitHandler: function(){
                let obj = {
                    name:$("#UserName").val(),
                    email:$("#ReEmail").val(),
                    password:$("#password").val()
                }
                if(!localStorage.getItem($("#ReEmail").val())){
                    localStorage.setItem($("#ReEmail").val(),JSON.stringify(obj));
                    alert("submited Successfully");
                    window.location.href = "./LoginForm.html";
                }
                else{
                    alert("user already exist")
                }
        // localStorage.setItem($("#ReEmail").val(),$("#password").val());
        // localStorage.setItem($("#password").val(),$("#UserName").val());
         
        }
    });
    $.validator.addMethod("passValidate",function(value,element){
        return this.optional(element) || (value.match(/[a-zA-Z]/)) && (value.match(/[0-9]/) && (value.match(/[ `!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/? ~]/)));
    })
    $.validator.addMethod("nameValidate",function(value,element){
        return this.optional(element) || (value.match(/^[A-Za-z ]+$/));
    })
    
        $("#Register-form").validate({
            rules:{
                username:{
                    required:true,
                    nameValidate:true
                },
                email:{
                    required: true,
                    email:true
                },
                password:{
                    required:true,
                    minlength:8,
                    maxlength:20,
                    passValidate:true
                },
                ConfirmPassword:{
                    required:true,
                    equalTo: "#password"
                }
                
            },
            messages:{
                username:{
                    required:"Name field is empty",
                    nameValidate:"Enter proper name"
                },
                email:{
                    required: "Enter the email",
                    email:"Enter valid email"
                },
                password:{
                    required:"Enter the password",
                    minlength: "minlength required 8",
                    maxlength: "maxLength required 20",
                    passValidate:"password must contain one [a,A,1] and contain one special char"
                },
                ConfirmPassword:{
                    required: "Enter the confirmPassword",
                    equalTo: "Password missmatch"
                }
            }
        });
     
});