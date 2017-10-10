
/* var phoneNumbers = 'necessary';

 
phoneNumbers = prompt('Type Your Necessary');

    switch(phoneNumbers){
        case 'police':
            alert(17);
            break;
            
        case 'pompier':
            alert(18);
            break;
            
        case 'numéro vert':
            alert(0880);
            break;
            
        case 'numéro mobile':
            alert(076946476);
            break;
            
        default:
           alert('Sorry We Can Not Help You :(')
    };*/


/*    var prenoms = ['Jack', 'Alex', 'Richard', 'Elia'];
    
    for(var i=0; i <4; i++){
        if(prenoms[i] === "Jack"){
            prenoms[i] = 'Robert'
        }
        alert(prenoms[i]);
    }*/



/////////////Fin First part////////////




///////////Beg Second part///////////


/*
        var admis = true;
        var lesEtudiants = [
            {
                nom : 'Pierre',
                moyenne : 15,
                admis : true,
            },
             {
                nom : 'jean',
                moyenne : 14,
                admis : true,
            },
             {
                nom : 'richard',
                moyenne : 9,
                admis : false,
            },
             {
                nom : 'robert',
                moyenne : 7,
                admis : false,
            }, 
            {
                nom : 'alex',
                moyenne : 6,
                admis : false,
            },
            {
                nom : 'jack',
                moyenne : 4,
                admis : false,
            },
        ];
  
        
        for(var i = 0; i < lesEtudiants.length; i++){
            var etudiant = lesEtudiants[i]
        if(lesEtudiants[i].admis == true){
            console.log(etudiant.nom + 'est' + ' avec ' + etudiant.moyenne + ' de ' + ' moyenne ');
        }else{
            console.log(etudiant.nom + ' est ' + ' non ' + ' admis ');
            
        }
        }*/





///////////////fin Srcond part////////////////////////////////




/////////////////beg third part///////////////



 var questions = [ 
     {
     
     ques: 'Est-ce que tu aime le Javascript ?',
     ans: 'Oui'
     
     
    },
     
   {
       ques: 'Le Javascript est une évolution du Java ?',
     ans:'Non'
   },
     
     {
       ques: 'Le Javascript est proche du Java ?',
     ans:'Oui'
   },
     
     {
       ques: 'Le Javascript est une langage d\'objet par prototypage ?' ,
     ans:'Oui'
   },
    
     {
       ques: 'Le Javascript est souvent utilisé coté client ?',
     ans:'Oui'
   },
     {
         ques: 'Le Javascript peut etre utilisé coté client et serveur ?',
         ans : 'Oui'
     }
];

   /* for(i=0; i<questions.length; i++){
        if(prompt(questions[i].ques).toLowerCase() === questions[i].ans.toLowerCase()){
            console.log('Bonne réponse pour la question ' + questions[i].ques)
        }else{
            console.log('Faux. La bonne réponse à la question ' + questions[i].ques + ' était ' + questions[i].ans)
        }
    }*/



/*
    var i = 0;
    while( i<questions.length ) {
            
             if(prompt(questions[i].ques).toLowerCase() === questions[i].ans.toLowerCase()){
            console.log('Bonne réponse pour la question ' + questions[i].ques)
        }else{
            console.log('Faux. La bonne réponse à la question ' + questions[i].ques + ' était ' + questions[i].ans)
        }
        i++;
    }*/




////////////////// fin third part //////////////////////


//////////////////Beg forth part//////////////////////////

/*
var addition = function (chiffre1, chiffre2){
    return chiffre1 + chiffre2;
}

console.log(addition(2, 5));



var substract = function(chiffre1, chiffre2){
    return chiffre1 + chiffre2
}

console.log(substract(2,7));


var myModulo = function (chiffre1, chiffre2){
    return chiffre1 + chiffre2
}

console.log(myModulo(4,5));


var division = function (chiffre1, chiffre2){
    return chiffre1 + chiffre2
}

console.log(division(8,6));

*/

///////////////// fin fourth part/////////////

/////////////////beg fifth part ///////////////

function myCalculator (result){
    var add1 = prompt('chiffrePrim');
    var add2 = prompt('chiffreSeco');
    var result = Number(add1) + Number(add2);
    return alert ('votre result est ' + result)
}

 console.log(myCalculator())


/////////////////fin fifth part ///////////////

















