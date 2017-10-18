/////////////////deb premier texte ///////////////

$('#war p').click(function(){
    $(this).toggleClass('mycolour');
       
    });
///////////////fin premier texte//////////////////


/////////////////deb deuxième texte///////////////

$('#btn-hide').click(function(){
     $('#war2').css('height', '0')
    $('.text').hide();
   
})

$('#btn-show').click(function(){
    $('#war2').css('height', '90')
    $('.text').show();
})

///////////////fin deuxième texte///////////////


/////////////////deb image//////////////////////

$('#img').fadeOut(5000,0,function(){
   setInterval(function(){
       $('#img').delay(20).fadeIn(5000,0).delay(20).fadeOut(5000,0).delay(20).fadeIn(5000,0);
   }, 1000);
    
});

/////////////////fin image//////////////////


/////////////////deb checkbox///////////////


var allCheck = $('#tout');
var nonCheck = $('#aucun');
var test = $("input[type=checkbox]:not(#tout, #aucun)");



allCheck.click(function(e){
    for (var i = 0; i < test.length; i++)
        test[i].checked = true;
});

nonCheck.click(function(e){
    for (var i=0; i<test.length; i++)
        test[i].checked = false
});



//////////////fin  checkbox ///////////////

///////////////deb textarea //////////////
var area = $('#message');
var y = $("#carac")[0];
var x = $('#mots')

$(function(e){
   
    $('#message').keyup(function(){
        
        var nomberCaractere = $(this)[0].value.length;
        if(nomberCaractere > 79){
            area.css('background-color', 'red');
            area[0].value = area[0].value.slice(0, 79);
        }else{
            area.css('background-color', 'white');
        }
        
        y.innerHTML = nomberCaractere;
    })
    
    
    
}); 





/////////////////fin textarea///////////

























