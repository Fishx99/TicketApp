
//checks which button is clicked return or one way
function checkRadiobutton()
{
      const butCheck =document.getElementById("IDO").checked
      const butCheck2 =document.getElementById("IDR").checked

      const val = document.getElementById("IDreturn").value
      let leng3 = val.length;
     
      if (butCheck==true) {
        //clicked one way
      } else if (leng3 < 1) {
       window.alert("please fill in return date");
      }               
}

//log all the values of the fields
function validate() 
{
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
  const a14 = document.getElementById("post").value
  const a15 = document.getElementById("P2Fname").value
  const a16 = document.getElementById("P2age").value
  const a17 = document.getElementById("Gender3M").value
  const a18 = document.getElementById("Gender3F").value

  let myValueList = [a1, a2 , a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18 ];

 checkAddLength(a7, a15);
 
}

//check is both passenger names are longer then 5 char
function checkAddLength(arg1, arg2) {
  
  let leng1 = arg1.length;
  let leng2 = arg2.length;

  if (leng1 < 5 || leng2 <5)
    {
      //document.getElementById("feedback").innerHTML = "Passenger name is too short";
   window.alert("Passenger name needs to be longer than 5 characters");
  } else
  {
    checkRadiobutton();
    //all good
  } 
}
