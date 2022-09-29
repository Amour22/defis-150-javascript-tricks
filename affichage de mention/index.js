

document.getElementById('moyenne').addEventListener('input',function calcul (moy){

  var moyenne=moy.target.value;

var mention;

var zone_affichage=document.getElementById("mentionzone");



if (moyenne>=16&&moyenne<=20) {
    
   mention="excelent" ;

   zone_affichage.innerHTML="vous avez la mention"+' '+mention;

}


else if (moyenne<16&&moyenne>=12) {
    
   mention="bien" ;
   
   zone_affichage.innerHTML="vous avez la mention"+' '+mention;
}

 

else if (moyenne<12&&moyenne>=10) {
    
   mention="passable" ;

   zone_affichage.innerHTML="vous avez la mention"+' '+mention;

}

 
else if (moyenne<10&&moyenne>5) {
    
   mention="mediocre" ;

    
   zone_affichage.innerHTML="vous avez la mention"+' '+mention;

}

 
else if (moyenne<=5&&moyenne>=0) {
    
   mention="defaillant" ;
   
   zone_affichage.innerHTML="vous etes ajournée"+' '+'MENTION'+' '+mention;}
 
else if (moyenne>20||moyenne<0) {


  zone_affichage.innerHTML="veuillez verifier la moyenne, une erreur est détecté"+' ';

   }

else if (moyenne==!Number) {



    zone_affichage.innerHTML="veuillez entrer une note"+' ';
  
     }   
   
}
);