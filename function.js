
function validate()
{

	var x = document.forms["userForm"]["Username"].value;

    if (x == "") 
    {
        alert("The feild is required");  
    }   
    else
     {
     window.alert("HI : "+ document.getElementById("Username").value  +"    WELCOME :-)");
    	
     }

}



var today = new Date();
console.log(today);

