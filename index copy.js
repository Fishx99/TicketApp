//window.alert("working nice lets nail this??")
window.alert("working nice lets nail this?");


//check if either a one way/Return button clicked
function checkRadiobutton() 
{
  window.alert("working nice lets nail this?");
    const butCheck =document.getElementById("IDO").checked
    const butCheck2 =document.getElementById("IDR").checked
   
    if (butCheck== true)
    return true;
    else if
    (butCheck2==true) 
    return true;
    else
    window.alert("Please check either one way or return for your trip")
    return false;
  }


//log all the values of 
function validate() {
   
    const a1= document.getElementById("IDO").value
    const a2 = document.getElementById("IDR").value
    const a3 = document.getElementById("IDfrom").value
    const a4 = document.getElementById("IDto").value
    const a5 = document.getElementById("IDStart").value
    const a6 = document.getElementById("IDreturn").value
    const a7 = document.getElementById("IDP1Fname").value
    const a8 = document.getElementById("IDP1age").value
    const a9 = document.getElementById("ID1genderM").value
    const a10 = document.getElementById("ID1genderF").value
    const a11 = document.getElementById("email").value
    const a12 = document.getElementById("mob").value
    const a13 = document.getElementById("address").value
    const a14 = document.getElementById("P2Fname").value
    const a15 = document.getElementById("P2age").value
    const a16 = document.getElementById("Gender3M").value
    const a17 = document.getElementById("Gender3F").value

   window.alert("Input Values" + a1 + a2 + a3 + a4 );

    checkRadiobutton();
    
}

// check if passenger name input more than 5 char

function checkLetLenght(datat){
  let textt =document.getElementById(datat).value
  let tlength = textt.length;

  if tlength < 5 
  windows.alert("please put in longer name value")
  else
  
}




  // if return radio button is checked then make return date editable
  function ReturnDateNeeded()
  {
    const AnButCheck=document.getElementById("IDR").checked
    if (AnButCheck==true)
    document.getElementById("IDreturn").readonly = false;
    return true;
    else if
    document.getElementById("IDreturn").disabled = true;
    return false;

  }



