// QUESTION 1
    //There are three main ways to access elements in the DOM
        //1)By Tagname
            // elements cal be accessed from a HTML file using their tagnames
            // index numbers can be used in case of multiple elements by the same tagname
            //document.getElementsByTagName("Tagname");
        // 2)By Classname
             //classnames can also be used in accessing elements as they are unique
             //index numbers can be used in case of multiple elements by the same classname
             //document.getElementsByClassName("classname");
        //3)By Id
             //elements can be accessed with their unique id's provided by the user
              //index numbers can be used in case of multiple elements by the same Id
              //document.getElementById("id");
// QUESTION 2
    
      function addition()
      {
          var num1,num2,sum;
          num1=Number(document.getElementById("firstnum").value);
          num2=Number(document.getElementById("secnum").value);
          sum=num1+num2;
          document.getElementById("result").value=sum;  
            }

  