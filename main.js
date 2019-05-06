

//Creating functions
var imageCount = 1;


function rightArrow() {
    
    
    
    if(imageCount < 5)
        {
            imageCount = imageCount + 1;
        
        }
    
   switch(imageCount)
        {
            case 1:
               $("#slideShow").css("background-image", "url('Pictures/Banners/Banner1.jpg')")
                break; 
            case 2:
              $("#slideShow").css("background-image", "url('Pictures/Banners/Banner2.jpg')"); 
                break;
                
            case 3:
              $("#slideShow").css("background-image", "url('Pictures/Banners/Banner3.jpg')");
                break;
                
                
             case 4:
              $("#slideShow").css("background-image", "url('Pictures/Banners/Banner4.jpg')");
                break;
                
              case 5:
              $("#slideShow").css("background-image", "url('Pictures/Banners/Banner5.jpg')");
                break;
                
                     
          
        
           
        }
           
    
   
     
}


function leftArrow() {
    
    
    
    if(imageCount > 1)
        {
            imageCount = imageCount - 1;
        
        }
    
   switch(imageCount)
        {
            case 5:
               $("#slideShow").css("background-image", "url('Pictures/Banners/Banner5.jpg')")
                break; 
            case 4:
              $("#slideShow").css("background-image", "url('Pictures/Banners/Banner4.jpg')"); 
                break;
                
            case 3:
              $("#slideShow").css("background-image", "url('Pictures/Banners/Banner3.jpg')");
                break;
                
                
             case 2:
              $("#slideShow").css("background-image", "url('Pictures/Banners/Banner2.jpg')");
                break;
                
              case 1:
              $("#slideShow").css("background-image", "url('Pictures/Banners/Banner1.jpg')");
                break;
                
                     
          
        
           
        }
           
    
   
     
}


$(document).ready(function(){
    
    //facebook icon
    
  $("#facebook").mouseenter(function(){
    $(this).attr("src","Pictures/socialMedia/FacebookAfter.png")
  });
    
    
  $("#facebook").mouseleave(function(){
    $(this).attr("src","Pictures/socialMedia/Facebook.png")
  });
    
    
    
     //Twitter icon
    
  $("#twitter").mouseenter(function(){
    $(this).attr("src","Pictures/socialMedia/twitterAfter.png")
  });
    
    
  $("#twitter").mouseleave(function(){
    $(this).attr("src","Pictures/socialMedia/twitter.png")
  });
    
    
     //Youtube icon
    
  $("#youtube").mouseenter(function(){
    $(this).attr("src","Pictures/socialMedia/youtubeAfter.png")
  });
    
    
  $("#youtube").mouseleave(function(){
    $(this).attr("src","Pictures/socialMedia/youtube.png")
  });
    
    
    
    
    //slideshow function
    
    $("#rightArrow").click(function(){
        rightArrow();
    })
    
     $("#leftArrow").click(function(){
        leftArrow();
    })


    /* Sign-in Page */
    /*Validation for input boxes*/

    var moved1 = 0;
    var moved2 = 0;

    
 
   
    $("#signInButton").click(function(){

        
        //Storing variables

        const email = $("#emailBox").val();
        const password = $("#passwordBox").val();
        var emailSubmit = false;
        var passSubmit = false;
        
       
        
        
        
        
        
        //email complicated regex starts here
        
        var emailValidate = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        
        //email complicated regex ends here
        
        
        //making things visible
        
        
        $("#emailError").css("visibility","visible");
        $("#passwordError").css("visibility","visible");





        /*checking for email*/
        //is email box empty?
        if(email == "" )
        {
            $("#emailBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#emailBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#emailBox").css({"background-repeat": "no-repeat"});
            $("#emailBox").css({"background-size": "28px"});
            $("#emailBox").css({"background-position": "right"});
            $("#emailError").html("Please fill out this field");
            $("#emailError").css("color","red");
            
            
            var emailSubmit = false;
            
            


                





        }
        else
        {
            
            if( emailValidate.test(email) == true )
                {
                    
                    $("#emailBox").css({"box-shadow": "0px 0px 6px 2px green"});
                    $("#emailBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
                    $("#emailBox").css({"background-repeat": "no-repeat"});
                    $("#emailBox").css({"background-size": "28px"});
                    $("#emailBox").css({"background-position": "right"});
                    $("#emailError").html("");
                    $("#emailError").css("color","green");
            
                    var emailSubmit = true;


                    
                }
            
            else
                {
                    $("#emailBox").css({"box-shadow": "0px 0px 6px 2px red"});
                    $("#emailBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#emailBox").css({"background-repeat": "no-repeat"});
            $("#emailBox").css({"background-size": "28px"});
            $("#emailBox").css({"background-position": "right"});
                    $("#emailError").html("Please enter a valid email address");
                    $("#emailError").css("color","red");
            
                    var emailSubmit = false;
                    
                }

            
        }


        /*checking for password*/
        //is password box empty?
        if(password == "" )
        {
            $("#passwordBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#passwordBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#passwordBox").css({"background-repeat": "no-repeat"});
            $("#passwordBox").css({"background-size": "28px"});
            $("#passwordBox").css({"background-position": "right"});
            $("#passwordError").html("Please fill out this field");
            $("#passwordError").css("color","red");
            
            var passSubmit = false;

            

        }
        else
        {
            $("#passwordBox").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#passwordBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#passwordBox").css({"background-repeat": "no-repeat"});
            $("#passwordBox").css({"background-size": "28px"});
            $("#passwordBox").css({"background-position": "right"});
            $("#passwordError").html("");
            
            
            var passSubmit = true;

            
       


        }
        
        //Can you sumbit the data?
        
        if(emailSubmit == true && passSubmit == true)
            {
                //$("form").submit();
                  window.setTimeout(formSubmit, 50);
                function formSubmit()
                {
                     window.alert("form has been submitted");
                }
                
                   

                
            }


    })

    
    
    
    
     /* Sign-Up Page */
    /*Validation for input boxes*/

    
    //page 1
    
    
    //extra
      var genderSubmit = false;
    var birthdaySubmit = false;
    var countrySubmit = false;
    var citySubmit = false;
    var streetSubmit = false;
    var streetSubmit = false;
    var phoneNumberSubmit = false;
    
    
    //extra
    
     
   var goToPage3 = false;

    $("#Next1Button").click(function(){

        
        
        //Storing variables
        
        const firstName = $("#firstNameBox").val();
        const surName = $("#SurnameBox").val();

        const email = $("#emailBox").val();
        const password = $("#passwordBox").val();
        
        const confirmPassword = $("#confirmPasswordBox").val();
        
        
       
        
        
        
        
        
        
        var firstSubmit = false;
        var surNameSubmit = false;
        var emailSubmit = false;
        var passSubmit = false;
        var cpasswordSubmit = false;
        
        
        //email complicated regex starts here
        
        var emailValidate = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        
        //email complicated regex ends here
        
        
        //making things visible
        
         $("#firstNameError").css("visibility","visible");
        $("#SurNameError").css("visibility","visible");
        
        $("#emailError").css("visibility","visible");
        $("#passwordError").css("visibility","visible");
        
         $("#confirmPasswordError").css("visibility","visible");
        
        
        /*checking for first Name*/
        //is firstName box empty?
        if(firstName == "" )
        {
            $("#firstNameBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#firstNameBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#firstNameBox").css({"background-repeat": "no-repeat"});
            $("#firstNameBox").css({"background-size": "28px"});
            $("#firstNameBox").css({"background-position": "right"});
            $("#firstNameError").html("Please fill out this field");
            $("#firstNameError").css("color","red");
            
            var firstSubmit = false;
            
            //extra
            var genderSubmit = false;

            

        }
        else
        {
            $("#firstNameBox").css({"box-shadow": "0px 0px 6px 2px green"});
               $("#firstNameBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#firstNameBox").css({"background-repeat": "no-repeat"});
            $("#firstNameBox").css({"background-size": "28px"});
            $("#firstNameBox").css({"background-position": "right"});
         
            $("#firstNameError").html("");
            $("#firstNameError").css("color","green");
            
            var firstSubmit = true;

            
       


        }
        
        
        /*checking for surName*/
        //is surName box empty?
        if(surName == "" )
        {
            $("#SurnameBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#SurnameBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#SurnameBox").css({"background-repeat": "no-repeat"});
            $("#SurnameBox").css({"background-size": "28px"});
            $("#SurnameBox").css({"background-position": "right"});
            $("#SurNameError").html("Please fill out this field");
            $("#SurNameError").css("color","red");
            
            var surNameSubmit = false;

            

        }
        else
        {
            $("#SurnameBox").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#SurnameBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#SurnameBox").css({"background-repeat": "no-repeat"});
            $("#SurnameBox").css({"background-size": "28px"});
            $("#SurnameBox").css({"background-position": "right"});
            $("#SurNameError").html("");
            $("#SurNameError").css("color","green");
            
            var surNameSubmit = true;

            
       


        }
        


 

        /*checking for email*/
        //is email box empty?
        if(email == "" )
        {
            $("#emailBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#emailBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#emailBox").css({"background-repeat": "no-repeat"});
            $("#emailBox").css({"background-size": "28px"});
            $("#emailBox").css({"background-position": "right"});
            $("#emailError").html("Please fill out this field");
            $("#emailError").css("color","red");
            
            
            var emailSubmit = false;
            
            


                





        }
        else
        {
            
            if( emailValidate.test(email) == true )
                {
                    
                    $("#emailBox").css({"box-shadow": "0px 0px 6px 2px green"});
                    $("#emailBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
                    $("#emailBox").css({"background-repeat": "no-repeat"});
                    $("#emailBox").css({"background-size": "28px"});
                   $("#emailBox").css({"background-position": "right"});
                    $("#emailError").html("");
                    $("#emailError").css("color","green");
            
                    var emailSubmit = true;


                    
                }
            
            else
                {
                    $("#emailBox").css({"box-shadow": "0px 0px 6px 2px red"});
                    $("#emailBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
                   $("#emailBox").css({"background-repeat": "no-repeat"});
                    $("#emailBox").css({"background-size": "28px"});
                    $("#emailBox").css({"background-position": "right"});
                    $("#emailError").html("Please enter a valid email address");
                    $("#emailError").css("color","red");
            
                    var emailSubmit = false;
                    
                }

            
        }


        /*checking for password*/
        //is password box empty?
        if(password == "" )
        {
            $("#passwordBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#passwordBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#passwordBox").css({"background-repeat": "no-repeat"});
            $("#passwordBox").css({"background-size": "28px"});
            $("#passwordBox").css({"background-position": "right"});
            $("#passwordError").html("Please fill out this field");
            $("#passwordError").css("color","red");
            
            var passSubmit = false;

            

        }
        else
        {
            $("#passwordBox").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#passwordBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#passwordBox").css({"background-repeat": "no-repeat"});
            $("#passwordBox").css({"background-size": "28px"});
            $("#passwordBox").css({"background-position": "right"});
            $("#passwordError").html("");
            $("#passwordError").css("color","green");
            
            var passSubmit = true;

            
       


        }
        
        
        //Confirm password box validation
        
        
    
        //is confirmpassword box empty?
        
        if(confirmPassword == "")
            {
            $("#confirmPasswordBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#confirmPasswordBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#confirmPasswordBox").css({"background-repeat": "no-repeat"});
            $("#confirmPasswordBox").css({"background-size": "28px"});
            $("#confirmPasswordBox").css({"background-position": "right"});
            $("#confirmPasswordError").html("Please fill out this field");
            $("#confirmPasswordError").css("color","red");
            
            var cpasswordSubmit = false;
            }
        
        else
        {
            
            if( confirmPassword == password )
                {
                    
                    $("#confirmPasswordBox").css({"box-shadow": "0px 0px 6px 2px green"});
                    $("#confirmPasswordBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
                    $("#confirmPasswordBox").css({"background-repeat": "no-repeat"});
                    $("#confirmPasswordBox").css({"background-size": "28px"});
                    $("#confirmPasswordBox").css({"background-position": "right"});
                    $("#confirmPasswordError").html("");
                    $("#confirmPasswordError").css("color","green");
            
                    var cpasswordSubmit = true;


                    
                }
            
            else
                {
                    $("#confirmPasswordBox").css({"box-shadow": "0px 0px 6px 2px red"});
                    $("#confirmPasswordBox").css({"background-image": "url('Pictures/Validation/wrong.png')"});
                    $("#confirmPasswordBox").css({"background-repeat": "no-repeat"});
                    $("#confirmPasswordBox").css({"background-size": "28px"});
                    $("#confirmPasswordBox").css({"background-position": "right"});
                    $("#confirmPasswordError").html("Password must match confirm Password");
                    $("#confirmPasswordError").css("color","red");
            
                    var cpasswordSubmit = false;
                    
                }

            
        }

        
        
        
        //Can you submit the data?
        
    if(emailSubmit == true && passSubmit == true && cpasswordSubmit == true && firstSubmit == true && surNameSubmit == true  )
            {

                //going to page 2
                window.location.replace("signUp2.html");
 
            }
        
            
    else{
        //going to the top of the screen.
        
        
         $(document).scrollTop(0);
        
    }
        

    })

    
    
  
    
   
    
  $("#Next2Button").click(function(){
          
      //storing data to variables
      const gender = $("#gender  option:selected").val();
      const birthday = $("#birthday").val();
      const country = $("#country").val();
      const city = $("#city").val();
      const street = $("#street").val();
      const zipCode = $("#zipCodeBox").val();
      const phoneNumber = $("#phoneNumberBox").val();
      
      
 
    var genderSubmit = false;
    var birthdaySubmit = false;
    var countrySubmit = false;
    var citySubmit = false;
    var streetSubmit = false;
    var zipCodeSubmit = false;
    var phoneNumberSubmit = false;
      
      
      //making error meessages visible
      
      $("#GenderError").css("visibility","visible");
      $("#birthdayError").css("visibility","visible");
      $("#CountryError").css("visibility","visible");
      $("#cityError").css("visibility","visible");
      $("#streetError").css("visibility","visible");
      $("#zipCodeError").css("visibility","visible");
      $("#phoneNumberError").css("visibility","visible");
      
      
      //gender validation
      
      if(gender == "(Select)" )
        {
            $("#gender").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
           ;
            $("#GenderError").html("Please select a gender");
            $("#GenderError").css("color","red");
            
            var genderSubmit = false;

            

        }
        else
        {
            $("#gender").css({"box-shadow": "0px 0px 6px 2px green"});
 
            $("#GenderError").html("");
            $("#GenderError").css("color","green");
            
           var genderSubmit = true;

        }
        
      
            
      //birthday validation
      
      if(birthday == "" )
        {
            $("#birthday").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            
            $("#birthdayError").html("Please enter your birthday");
            $("#birthdayError").css("color","red");
            
            var birthdaySubmit = false;

            

        }
        else
        {
            $("#birthday").css({"box-shadow": "0px 0px 6px 2px green"});
 
            $("#birthdayError").html("");
            $("#birthdayError").css("color","green");
            
           var birthdaySubmit = true;

        }
      
      //country validation
      
      if(country == "(Select)" )
        {
            $("#country").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            
            
            $("#CountryError").html("Please enter your country");
            $("#CountryError").css("color","red");
            
           var  countrySubmit = false;

            

        }
        else
        {
            $("#country").css({"box-shadow": "0px 0px 6px 2px green"});
             
            $("#CountryError").html("");
            $("#CountryError").css("color","green");
            
         var countrySubmit = true;

        }
      
       
      //city validation
      
      if(city == "" )
        {
            $("#city").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#city").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#city").css({"background-repeat": "no-repeat"});
            $("#city").css({"background-size": "28px"});
            $("#city").css({"background-position": "right"});
            
      
            $("#cityError").html("Please fill out this field");
            $("#cityError").css("color","red");
            
           var  citySubmit = false;

            

        }
        else
        {
            $("#city").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#city").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#city").css({"background-repeat": "no-repeat"});
            $("#city").css({"background-size": "28px"});
            $("#city").css({"background-position": "right"});
            $("#cityError").html("");
            $("#cityError").css("color","green");
            
            var citySubmit = true;

        }
      
     
      
      //street validation
      
      if(street == "" )
        {
            $("#street").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#street").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#street").css({"background-repeat": "no-repeat"});
            $("#street").css({"background-size": "28px"});
            $("#street").css({"background-position": "right"});
            $("#streetError").html("Please fill out this field");
            $("#streetError").css("color","red");
            
            var streetSubmit = false;

            

        }
        else
        {
            $("#street").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#street").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#street").css({"background-repeat": "no-repeat"});
            $("#street").css({"background-size": "28px"});
            $("#street").css({"background-position": "right"});
            $("#streetError").html("");
            $("#streetError").css("color","green");
            
           var  streetSubmit = true;

        }
      
      
      //zip-code validation
      if(zipCode == "" )
        {
            $("#zipCodeBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#zipCodeBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#zipCodeBox").css({"background-repeat": "no-repeat"});
            $("#zipCodeBox").css({"background-size": "28px"});
            $("#zipCodeBox").css({"background-position": "right"});
            $("#zipCodeError").html("Please fill out this field");
            $("#zipCodeError").css("color","red");
            
            var zipCodeSubmit = false;

        }
        else
        {
            if(isNaN(zipCode) == false)
                {
                    
              
            $("#zipCodeBox").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#zipCodeBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#zipCodeBox").css({"background-repeat": "no-repeat"});
            $("#zipCodeBox").css({"background-size": "28px"});
            $("#zipCodeBox").css({"background-position": "right"});
            $("#zipCodeError").html("");
            $("#zipCodeError").css("color","green");
            
            var zipCodeSubmit = true;
                }
            else{
                 $("#zipCodeBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#zipCodeBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#zipCodeBox").css({"background-repeat": "no-repeat"});
            $("#zipCodeBox").css({"background-size": "28px"});
            $("#zipCodeBox").css({"background-position": "right"});
            $("#zipCodeError").html("Please enter a numeric value.");
            $("#zipCodeError").css("color","red");
            
            var zipCodeSubmit = false;
                
            }

        }
      
      
       //zip-code validation
      if(phoneNumber == "" )
        {
            $("#phoneNumberBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#phoneNumberBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#phoneNumberBox").css({"background-repeat": "no-repeat"});
            $("#phoneNumberBox").css({"background-size": "28px"});
            $("#phoneNumberBox").css({"background-position": "right"});
            $("#phoneNumberError").html("Please fill out this field");
            $("#phoneNumberError").css("color","red");
            
            var phoneNumberSubmit = false;
            

            

        }
        else
        {
            if(isNaN(phoneNumber) == false)
               {
            $("#phoneNumberBox").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#phoneNumberBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#phoneNumberBox").css({"background-repeat": "no-repeat"});
            $("#phoneNumberBox").css({"background-size": "28px"});
            $("#phoneNumberBox").css({"background-position": "right"});
            $("#phoneNumberError").html("");
            $("#phoneNumberError").css("color","green");
            
           var phoneNumberSubmit = true;
                }
            else{
                $("#phoneNumberBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#phoneNumberBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#phoneNumberBox").css({"background-repeat": "no-repeat"});
            $("#phoneNumberBox").css({"background-size": "28px"});
            $("#phoneNumberBox").css({"background-position": "right"});
            $("#phoneNumberError").html("Please enter a numeric value.");
            $("#phoneNumberError").css("color","red");
                  var phoneNumberSubmit = false;
                
            }

        }
     
      
      
      //extra
      
      
      //Condition to go to page 3.
      
      if(genderSubmit == true  && birthdaySubmit == true && countrySubmit == true && citySubmit == true && streetSubmit== true && zipCodeSubmit == true  && phoneNumberSubmit == true)
            {
                
       
                $(document).scrollTop(0);
                
                //going to page 3
                window.location.replace("signUp3.html");
                
            }
      
       else{
        //going to the top of the screen.
        
        
         $(document).scrollTop(0);
        
    }
      
      
      
      
      
        
      
      })
    

     $("#Next3Button").click(function(){
          
      //storing data to variables
      const cardHolderName = $("#cardHolderNameBox").val();
      const cardNumber = $("#cardNumberBox").val();
      const expirationDate = $("#expirationDateBox").val();
      const securityCode= $("#securityCodeBox").val();
         
      //storing data for credit card radio buttons
     
         var cardType = $('input[name=pMethod]:checked').val();
         
        
         
      
 
    var cardHolderNameSubmit = false;
    var cardNumberSubmit = false;
    var expirationDateSubmit = false;
    var securityCodeSubmit = false;
    
      
      
      //making error meessages visible
      
      $("#cardHolderNameError").css("visibility","visible");
      $("#cardNumberError").css("visibility","visible");
      $("#expirationDateError").css("visibility","visible");
      $("#securityCodeError").css("visibility","visible");
         
         
         //cardHolderName validation
         
         if(cardHolderName == "" )
        {
            $("#cardHolderNameBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#cardHolderNameBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#cardHolderNameBox").css({"background-repeat": "no-repeat"});
            $("#cardHolderNameBox").css({"background-size": "28px"});
            $("#cardHolderNameBox").css({"background-position": "right"});
            $("#cardHolderNameError").html("Please fill out this field");
            $("#cardHolderNameError").css("color","red");
            
            var cardHolderNameSubmit = false;

            

        }
        else
        {
            $("#cardHolderNameBox").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#cardHolderNameBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#cardHolderNameBox").css({"background-repeat": "no-repeat"});
            $("#cardHolderNameBox").css({"background-size": "28px"});
            $("#cardHolderNameBox").css({"background-position": "right"});
            $("#cardHolderNameError").html("");
            $("#cardHolderNameError").css("color","green");
            
            var cardHolderNameSubmit = true;

            
       


        }
         
         
          //card number validation
         
         if(cardNumber == "" )
        {
            $("#cardNumberBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#cardNumberBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#cardNumberBox").css({"background-repeat": "no-repeat"});
            $("#cardNumberBox").css({"background-size": "28px"});
            $("#cardNumberBox").css({"background-position": "right"});
            $("#cardNumberError").html("Please fill out this field");
            $("#cardNumberError").css("color","red");
            
            var cardNumberSubmit = false;

            

        }
        else
        {
            if(isNaN(cardNumber) == false)
               {
            $("#cardNumberBox").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#cardNumberBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#cardNumberBox").css({"background-repeat": "no-repeat"});
            $("#cardNumberBox").css({"background-size": "28px"});
            $("#cardNumberBox").css({"background-position": "right"});
            $("#cardNumberError").html("");
            $("#cardNumberError").css("color","green");
            
            var cardNumberSubmit = true;

               }
            
            else{
                $("#cardNumberBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#cardNumberBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#cardNumberBox").css({"background-repeat": "no-repeat"});
            $("#cardNumberBox").css({"background-size": "28px"});
            $("#cardNumberBox").css({"background-position": "right"});
            $("#cardNumberError").html("Please enter a numeric value");
            $("#cardNumberError").css("color","red");
            
            var cardNumberSubmit = false;

                
            }
            
            
       


        }
         
           
          //expiration date validation
         
         if(expirationDate == "" )
        {
            $("#expirationDateBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
      
            $("#expirationDateError").html("Please fill out this field");
           $("#expirationDateError").css("color","red");
            
            var expirationDateBoxSubmit = false;

            

        }
        else
        {
            $("#expirationDateBox").css({"box-shadow": "0px 0px 6px 2px green"});
            
            $("#expirationDateError").html("");
            $("#expirationDateError").css("color","green");
            
            var expirationDateSubmit = true;

            
       


        }
         
         
            
          //security code validation
         
         if(securityCode == "" )
        {
            
            $("#securityCodeBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#securityCodeBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#securityCodeBox").css({"background-repeat": "no-repeat"});
            $("#securityCodeBox").css({"background-size": "28px"});
            $("#securityCodeBox").css({"background-position": "right"});
            $("#securityCodeError").html("Please fill out this field");
           $("#securityCodeError").css("color","red");
            
            var securityCodeSubmit = false;

            

        }
        else
        {
            if(isNaN(securityCode) == false)
               {
            
            $("#securityCodeBox").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#securityCodeBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#securityCodeBox").css({"background-repeat": "no-repeat"});
            $("#securityCodeBox").css({"background-size": "28px"});
            $("#securityCodeBox").css({"background-position": "right"});
            $("#securityCodeError").html("");
            $("#securityCodeError").css("color","green");
            
            var securityCodeSubmit = true;
               }
            
            else{
                $("#securityCodeBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#securityCodeBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#securityCodeBox").css({"background-repeat": "no-repeat"});
            $("#securityCodeBox").css({"background-size": "28px"});
            $("#securityCodeBox").css({"background-position": "right"});
            $("#securityCodeError").html("Please enter a numeric Value.");
            $("#securityCodeError").css("color","red");
            
            var securityCodeSubmit = false;
                
            }

            
       


        }
         
         //Condition to go to page 4(Last page).
      
      if(cardHolderNameSubmit == true  && cardNumberSubmit == true && expirationDateSubmit == true && securityCodeSubmit == true  &&  (cardType  == "v" || cardType == "m"))
            {
                
       
                $(document).scrollTop(0);
               
                
                //going to page 4
                window.location.replace("signUp4.html");
                
            }
      
       else{
        //going to the top of the screen.
        
        
         $(document).scrollTop(0);
        
    }
      
        
      
    
 })
    
    //page4(final page)
    
    $("#submit").click(function(){
        
         if( $('#TC').is(":checked"))
        {
            $("#TCError").css("visibility","hidden");
            window.setTimeout(formSubmit, 50);
                function formSubmit()
                {
                     window.alert("form has been submitted");
                }
           
           
        }
        else
        {
            
            $("#TCError").html("Submission error: You must agree to the terms and conditions before submitting the form.");
           $("#TCError").css("color","red");
            $("#TCError").css("visibility","visible");
            
          
            $(document).scrollTop(0);
          
            
       


        }
         
         
        
    })
    
    
    //when you click any of the items in the shopping page
    $(".shoppingItems").click(function(){
  //pause effect starts here

        
       // 1)Shopping items
       $(".shoppingItems").fadeOut("medium");
        
        
        
        //2)Banners
        $("#shoppingPagesBanners").fadeOut("medium");
        $("#VerticalAds").fadeOut("medium");
        
        //3)ScrollButton
        $("#topButton").fadeOut("medium");
        
        // 4) Top part
        //$("#topPart").fadeOut("medium");
        $(".borderedButtons").fadeOut();
        $("#searchBar").fadeOut();
        $("#navBar").fadeOut();
        $("#logo").fadeOut();
        $("#topPart").css("background-color","rgba(0,0,0,0)");
        
     
     
        
        // 5) Bottom part
       $("#bottomPart").fadeOut("medium");
        
        //background(extra????)
        
       $("#shoppingBackground").css({"background-image": "linear-gradient(to right, black,#2e3744,black)"});
        
      
        
        

       
        //pause effect ends here
      
    })
    
    
     //Shopping page


     /*Box that appears when you click at an item in the {SHOPPING PAGE} */
   $(".itemPage").hide();
    
    //going to items own pages
    $(".shoppingItem1").click(function(){
        //make the new page visible
        $(".itemPage1").fadeIn();
        
    
    })
    $(".shoppingitem2").click(function(){
        //make the new page visible
        $(".itemPage2").fadeIn();
        
    
    })
    
    $(".shoppingItem3").click(function(){
        //make the new page visible
        $(".itemPage3").fadeIn();
        
    
    })
    
    $(".shoppingItem4").click(function(){
        //make the new page visible
        $(".itemPage4").fadeIn();
        
    
    })
    
    $(".shoppingItem5").click(function(){
        //make the new page visible
        $(".itemPage5").fadeIn();
        
    
    })
    
    
     $(".shoppingItem6").click(function(){
        //make the new page visible
        $(".itemPage6").fadeIn();
        
    
    })
    
    $(".shoppingItem7").click(function(){
        //make the new page visible
        $(".itemPage7").fadeIn();
        
    
    })
    
    $(".shoppingItem8").click(function(){
        //make the new page visible
        $(".itemPage8").fadeIn();
        
    
    })
    
    
    $(".backButton").click(function(){
        //make the new page visible
        $(".itemPage").fadeOut();
        
        //pause effect REVERSAL starts here

        
       // 1)Shopping items
       $(".shoppingItems").fadeIn("medium");
        
        //$(".itemsHeadings").fadeOut("medium");
        
        //2)Banners
        $("#shoppingPagesBanners").fadeIn("medium");
        $("#VerticalAds").fadeIn("medium");
        
        //3)ScrollButton
        $("#topButton").fadeIn("medium");
        
        // 4) Top part
        $(".borderedButtons").fadeIn();
        $("#searchBar").fadeIn();
        $("#navBar").fadeIn();
        $("#logo").fadeIn();
        $("#topPart").css("background-color","#2e3744");
        
        
        
        
        
        // 5) Bottom part
        $("#bottomPart").fadeIn("medium");
        
        //background
       
        

       
        //pause effect REVERSAL ends here
        
        
      
    })
    
    
    /*Effect after you choose a side(picture) of the item*/
    var image = $(this).attr("src");
  
    
    $(".sideImages").click(function(){
        
        var image = $(this).attr("src");
      //  $(".itemPageImage").css("background-image","url("+ image  + ")");
        
        $(this).parent().parent().find(".itemPageImage").css("background-image","url("+ image  + ")");
        
        
    
        
         })
    //$(this).attr('src')
    
    
    /* Shoppig cart in all pages*/
    
    //variables for cart-Menu
    var itemCounter = 0;
    var topPosition = 522;
    
    $(".shoppingCartContent").hide();
    
    
    $(".itemsCounter").text(itemCounter);
    
    
       //Showing Cart content when it is clicked 
      $(".shoppingCart").click(function(){
      $(".shoppingCartContent").slideToggle("slow");
          
      })
    
   
    
    /*Cart counter variable*/
    cartCounter = 0;
    //Adding items when the button "Add to cart is pressed"
    $(".cartButton").click(function(){
        
        
        

        
       
        
        //changing cart shape as you add more items
        $(".itemsCounter").css("color","red");
    $(".itemsCounter").css("text-shadow","2px 2px 100px red;");
        cartCounter++;
        
        
        
        //Taking information about the items and storing them in variables
        $(".itemsCounter").text(cartCounter);
        
        
        
        
        
        
       
       var heading= $(this).parent().find(".itemDescriptionHeading").text();
        
        
        var price= $(this).parent().find(".itemDescriptionPrice").text();
        price = price.substring(price.indexOf(":")+1)
        
      
        var imageSrc =  $(this).parent().find(".sideFront").attr("src");
        
        
        
        
       
        
        
        
        
        
        /* REAAAL STUFF      
        */
         /*Real Appending*/
        
        itemCounter ++;
        
        
        $(".shoppingCartmovingbox").append("<div class = 'cartItems " + "item" + itemCounter +"' style = 'top:"+ topPosition + "px; '>"+"</div>");
        
        $(".item" + itemCounter).append("<div  class = 'cartItemImage'></div>");
        
        $(".item" + itemCounter).append("<span class = 'cartItemHeading'>Heading</span>");
        
        
        
        $(".item" + itemCounter).append("<span class = 'cartItemPrice'>Price</span></div>");
        
        //extra price(hidden) for quantity selector
        $(".item" + itemCounter).append("<span class = 'extraPrice' style = 'visibility:hidden;'></span></div>");
        
        //extra price(hidden) for quantity selector
        
        
        
        
        $(".item" + itemCounter).append("<span class = 'cartItemQuantity'><span>Item Quantity</span><input  class = 'QuantitySelector' type = 'number' min = '1' max = '10' value = '1' ></span>");
        
        
        $(".item" + itemCounter).append("<span class = 'cartItemNumber'>"+itemCounter + "</span>");
        topPosition +=87;
        
        /*Inserting data*/
        $(".item" + itemCounter ).find(".cartItemImage").css('backgroundImage','url('+imageSrc+ ')');
        
         $(".item" + itemCounter).find(".cartItemHeading").text(heading);
        
       
         $(".item" + itemCounter).find(".cartItemPrice").html(price);
        
         //extra price
        $(".item" + itemCounter).find(".extraPrice").html(price);
        
         //extra price
        
         //Calculating quantity and it's effect on price 
        
        
        //when pressing the top or bottom button in the number field
        
      
    $(".QuantitySelector").click(function(){
        
     var price =$(this).parent().parent().find(".extraPrice").text();
        price = price.substring(price.indexOf("$")+1); 
        
        var quantity = $(this).val();
        
        var finalPrice = quantity * price;
        
        
      $(this).parent().parent().find(".cartItemPrice").text("$" + finalPrice);

    
  
    })
        
       
    //disabling cart button
      //$(this).attr("disabled","disabled")
       // $(this).replacwith("<input type = 'button' value = 'Add to Cart' class = 'cartButtonDisabled'> ");
        
        $(this).replaceWith( "<input type = 'button' value = 'Add to Cart' class = 'cartButtonDisabled'> ");
        
        //when you press the disabled button
    $(".cartButtonDisabled").click(function(){
      $(this).parent().append(" <p style = 'color:red; position:absolute; left:420px; top:500px; font-size:24px;'>You already selected one item<br/>You can't add anymore items.</p>");
      
     
})
    
    
      
        
    })
        
 
    
    
    
         //Cart top and bottom buttons
    
     
    
    
     //variables to limit movement in cart moving box
      var section = 3;
      
    $(".ShoppingCartTopButton").click(function(){

        if(itemCounter > 3 &&  section >3 ) 
            {
               
              //getting moving box position
              var boxpos = $(".shoppingCartmovingbox").css("top");
              boxpos = parseFloat(boxpos.substring(0,boxpos.indexOf("p")));
        
             $(".shoppingCartmovingbox").css("top", (boxpos + 87) + "px" );
            section--;
                ;
                
            }
         
    })
    
    $(".ShoppingCartBottomButton").click(function(){
        
        if(itemCounter > 3 && section < itemCounter )
            {
        var boxpos = $(".shoppingCartmovingbox").css("top");
        boxpos = parseFloat(boxpos.substring(0,boxpos.indexOf("p")));
        
        
          $(".shoppingCartmovingbox").css("top", (boxpos - 87) + "px" );
            section++;
            }
    })
    
        
    
  /*Deleting an item in Cart-Menu*/
   $(".cartItemDelete").click(function(){
       
       window.alert("sa");
       
   })
    
    //FAQ Page
    
    var opened = false;
    $(".QuestionContent").hide();
    //when clicking any of the questions bar.
    $(".QuestionBar").click(function(){
        
        if(opened == false)
        {
            $(this).find(".sign").text("-");
            opened = true;
            $(this).parent().find(".QuestionContent").slideDown();
            opened = true;
            
            
            
            
            
        }
        else{
            $(this).find(".sign").text("+");
            opened = false;
            $(this).parent().find(".QuestionContent").slideUp();
            $(".QuestionBar").next("top","-=70px");
            opened = false;
            
        }
        
        
        
    })
    
    
    //contactUs page validation
    $("#SendMessageButton").click(function(){
         //Storing variables
        
        const firstName = $("#contactFNameBox").val();
        const surName = $("#contactLNameBox").val();
        const email = $("#contactemailBox").val();
        const subject = $(".contactUsDropDownList option:selected").val();
        const message =  $("#contactUsMessage").val();
        var firstSubmit = false;
        var surNameSubmit = false;
        var emailSubmit = false;
        var subjectSubmit = false;
        var messageSubmit = false;

        //email complicated regex starts here
        
        var emailValidate = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        
        //email complicated regex ends here
        
        
        //making things visible
        
        $(".contactErrorMessages").css("visibility","visible");
        
        
        /*checking for first Name*/
        //is firstName box empty?
        if(firstName == "" )
        {
            $("#contactFNameBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#contactFNameBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#contactFNameBox").css({"background-repeat": "no-repeat"});
            $("#contactFNameBox").css({"background-size": "28px"});
            $("#contactFNameBox").css({"background-position": "right"});
            $("#contactFNameError").html("Please fill out this field");
            $("#contactFNameError").css("color","red");
            
            var firstSubmit = false;
            
            //extra
            var genderSubmit = false;

            

        }
        else
        {
            $("#contactFNameBox").css({"box-shadow": "0px 0px 6px 2px green"});
             $("#contactFNameBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#contactFNameBox").css({"background-repeat": "no-repeat"});
            $("#contactFNameBox").css({"background-size": "28px"});
            $("#contactFNameBox").css({"background-position": "right"});
          
            $("#contactFNameError").html("");
            $("#contactFNameError").css("color","green");
            
            var firstSubmit = true;

            
       


        }
        
        
        /*checking for surName*/
        //is surName box empty?
        if(surName == "" )
        {
            $("#contactLNameBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            
            $("#contactLNameError").html("Please fill out this field");
            $("#contactLNameError").css("color","red");
            
            var surNameSubmit = false;

            

        }
        else
        {
            $("#contactLNameBox").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#contactLNameBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
            $("#contactLNameBox").css({"background-repeat": "no-repeat"});
            $("#contactLNameBox").css({"background-size": "28px"});
            $("#contactLNameBox").css({"background-position": "right"});
            $("#contactLNameError").html("");
            $("#contactLNameError").css("color","green");
            
            var surNameSubmit = true;

            
       


        }
        


 

        /*checking for email*/
        //is email box empty?
        if(email == "" )
        {
            $("#contactemailBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#contactemailBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#contactemailBox").css({"background-repeat": "no-repeat"});
            $("#contactemailBox").css({"background-size": "28px"});
            $("#contactemailBox").css({"background-position": "right"});
            $("#contactEmailError").html("Please fill out this field");
            $("#contactEmailError").css("color","red");
            
            
            var emailSubmit = false;
            
            


                





        }
        else
        {
            
            if( emailValidate.test(email) == true )
                {
                    
                    $("#contactemailBox").css({"box-shadow": "0px 0px 6px 2px green"});
                   
                    $("#contactEmailError").html("");
                    $("#contactEmailError").css("color","green");
            
                    var emailSubmit = true;


                    
                }
            
            else
                {
                    $("#contactemailBox").css({"box-shadow": "0px 0px 6px 2px red"});
                    $("#contactemailBox").css({"background-image": "url('Pictures/Validation/wrong.png')"});
                    
                    $("#contactEmailError").html("Please enter a valid email address");
                    $("#contactEmailError").css("color","red");
            
                    var emailSubmit = false;
                    
                }

            
        }
        
        //subject
        
      if(subject == "(Select)" )
        {
            $(".contactUsDropDownList").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
          
            $("#contactSubjectError").html("Please select a subject");
            $("#contactSubjectError").css("color","red");
            
            var subjectSubmit = false;

            

        }
        else
        {
            $(".contactUsDropDownList").css({"box-shadow": "0px 0px 6px 2px green"});
            
            $("#contactSubjectError").html("");
           $("#contactSubjectError").css("color","green");
            
           var subjectSubmit = true;

        }
        
         //Message
    
    //const message =  $("#contactUsMessage").val();
   
      //"contactMessageFieldError" 
      //messageSubmit = false;
    
   if(message == "" )
        {
            $("#contactUsMessage").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#contactMessageFieldError").html("Please fill out This message field");
            $("#contactMessageFieldError").css("color","red");
            
            var messageSubmit = false;
            

            

        }
        else
        {
            
            $("#contactUsMessage").css({"box-shadow": "0px 0px 6px 2px green"});
            $("#contactMessageFieldError").html("");
            $("#contactMessageFieldError").css("color","green");
            
            var messageSubmit = true;

            
       


        }
        
        
         
        //Can you submit the data?
        
    if(firstSubmit == true && surNameSubmit == true && emailSubmit == true && subjectSubmit == true && messageSubmit == true  )
            {

                //$("form").submit();
                  window.setTimeout(formSubmit, 50);
                function formSubmit()
                {
                     window.alert("form has been submitted");
                }
                
 
            }
        
            
    else{
        //going to the top of the screen.
        
        
         $(document).scrollTop(0);
        
    }
        

    })
    
    
    
   
    //letter animation
   
        
        
       window.setTimeout(letterAnimation1Starts, 300);
        
        
        function letterAnimation1Starts()
        {
            
                     $(".letterPicture").attr("src","Pictures/LetterAnimation/letterAnimationStart.gif");
                    
                
        
        }
        
        
 
  
    // forgot password page button
    
      $("#resetPasswordButton").click(function(){
          //Storing variables

        const email = $("#emailBox").val();

 
        
        //email complicated regex starts here
        
        var emailValidate = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        
        //email complicated regex ends here
        
        
        //making things visible
        
        
        $("#emailError").css("visibility","visible");
        $("#passwordError").css("visibility","visible");





        /*checking for email*/
        //is email box empty?
        if(email == "" )
        {
            $("#emailBox").css({"box-shadow": "0px 0px 6px 2px rgb(186, 70, 70)"});
            $("#emailBox").css({"background-image": "url('Pictures/Validation/Error.ico')"});
            $("#emailBox").css({"background-repeat": "no-repeat"});
            $("#emailBox").css({"background-size": "28px"});
            $("#emailBox").css({"background-position": "right"});
            $("#emailError").html("Please fill out this field");
            $("#emailError").css("color","red");
            
            
            var emailSubmit = false;
            
            


                





        }
        else
        {
            
            if( emailValidate.test(email) == true )
                {
                    
                    $("#emailBox").css({"box-shadow": "0px 0px 6px 2px green"});
                    $("#emailBox").css({"background-image": "url('Pictures/Validation/Correct.png')"});
                    $("#emailBox").css({"background-repeat": "no-repeat"});
                    $("#emailBox").css({"background-size": "28px"});
                    $("#emailBox").css({"background-position": "right"});
                    $("#emailError").html("");
                   
                    
                     //$("form").submit();
                  window.setTimeout(formSubmit, 50);
                function formSubmit()
                {
                     window.alert("form has been submitted");
                }

            
                


                    
                }
            
            else
                {
                    $("#emailBox").css({"box-shadow": "0px 0px 6px 2px red"});
                    $("#emailBox").css({"background-image": "url('Pictures/Validation/wrong.png')"});
                    $("#emailBox").css({"background-repeat": "no-repeat"});
                    $("#emailBox").css({"background-size": "28px"});
                    $("#emailBox").css({"background-position": "right"});
                    $("#emailError").html("Please enter a valid email address");
                    $("#emailError").css("color","red");
            
                   
                    
                }

            
        }


    
    
    
      })
   
    
    /*when pressing the small bottom at the corner to scroll to the top
    of the screen*/
    
    $("#topButton").click(function(){
        
         $("html, body").animate({ scrollTop: 0 });
       
        
    })
    
    
   



    
})
    
    




    
   
    
    
    


    
    


    

    
    
    
    
