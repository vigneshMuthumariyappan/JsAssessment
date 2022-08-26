$(document).ready(function(){
    // $(".btn_").click(function(){
    //     $.ajax({
    //         method: "GET",
    //         url: "/login/LoginForm.html",
    //         dataType: "html",
    //         error:function(err){
    //             alert("not get"+err.status);
    //         }
    //     }).done(function(data){
    //         $("#login-function").html(data);
    //     })
    let searchId;
    let dataObj ;
    // console.log(searchId)
    $("#search").click(function() {
    // console.log(searchId)
        $.ajax({
            method: "GET",
            url: "product.json",
            dataType: "json",
            error:function(err){
                alert("not get"+err.status);
            }
        }).done(function(data){
              dataObj = data;
            $(function() {                  
                $('#search').autocomplete({
                    source: function (request, response) {
                        response($.map(data, function (obj, key) {
                            var name = obj.name.toUpperCase();
                            if (name.indexOf(request.term.toUpperCase()) != -1) {
                            // searchId = obj.name;
                            //     console.log(searchId);		
                                return {
                                    label: obj.name, // Label for Display
                                    value: obj.name
                                     // Value
                                }
                            } else {
                                return null;
                            }
                        }));			
                    },  
                });	
             });
        });
        function template(data){
            let val = $("#search").val();
            let searchIndex = data.map(Object => Object.name).indexOf(val);
            console.log(data);
            console.log(searchIndex)
            let dat = data;
            return `
            <div class="tem-container">
                <div class="tem-image">
                    <img src="/Js/AssessmentProject/${dat[searchIndex].img}" alt="....">
                </div>
                <div class="tem-overView">
                    <h3>${dat[searchIndex].title}</h3>
                    <h4>Company - ${dat[searchIndex].company}</h4>
                    <h4>Price - ${dat[searchIndex].Amount}</h4>
                    <a href = "/Js/AssessmentProject/login/ProductDetail.html?${dat[searchIndex].id}" class = "tem-btn"> veiw Detail </a>
                </div>
            </div>`;
        }
        $("#searchIcon").click(function(){
            document.getElementById("body-container").innerHTML = template(dataObj);
        //    $("#body-container").load("product.json",function(responseTxt,statusTxt,xhr){
        //     if(statusTxt == "success")
        //     if(statusTxt == "error")
        //     alert("error");
        //    })
        })
        
    });
});