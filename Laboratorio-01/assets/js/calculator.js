function n(dato){ 
    document.getElementById("display").value+=dato;
 }
 
 function operazione() { 
 document.getElementById("display").value=eval(document.getElementById("display").value); 
 }
 
 function cancella() { 
  document.getElementById("display").value=""; 
 }