/*
 console.log(document.getElementById('test1'));
 document.getElementById('test2').innerHTML = '<a href="#"><strong>Modification</strong></a>';
 console.log(document.getElementById('test2'));


 console.log(document.getElementsByClassName('maClass'));
 console.log(document.querySelector('.maClass').className)

 console.log(document.querySelector('#monId'));

 console.log(document.querySelectorAll('.maClass'));




 var mesClasses = document.querySelector('.maClass').classList;
 console.log(mesClasses);

 mesClasses.add('nouvelle');
 mesClasses.remove('test');




 var mesClasses2 = document.querySelector('.sasa').classList;
 console.log(mesClasses2);

 var mesClass3 = document.querySelector('.kaka').classList;
 console.log(mesClass3);






 window.setInterval(function () {
     mesClasses.toggle("jaja");
 }, 500);



 window.setInterval(function () {
     mesClasses2.toggle('sasa');
 }, 500);

 window.setInterval(function () {
     mesClass3.toggle('kaka');
 }, 500)
*/

 /*console.log(document.querySelector('#monId').style.color="blue");*/


 function validateForm(){
     var y = document.forms["myForm"]["inp"].value;
     var x = document.forms["myForm"]["first-name"].value;
     var l = document.forms["myForm"]["last-name"].value;
     var m = document.forms["myForm"]["mail"].value;
     var c = document.forms["myForm"]["card"].value;
     var ms = document.forms["myForm"]["message"].value;
     var tr = document.forms["myForm"]["term"].value;
     if(y == ""){
         alert("You Should Select The First option!!!!!!!");
         
         return false
     }  if(x == ""){
         alert("Please Write Your First Name!!!");
         /*document.myForm.focus().*/
     } if(l == ""){
         alert("Please Write Your Last Name!!!");
     } if(m == ""){
         alert("Please Add Your Adress Mail!!!");
     } if(c == ""){
         alert("Please Add Your Card Number!!!");
     } if(ms == ""){
         alert("You Don't Have Any Message???");
     } if(tr == ""){
         alert("You Should Select The Last option!!!!!!!");
     }
 }
    