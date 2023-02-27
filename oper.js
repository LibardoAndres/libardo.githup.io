function operacion(){
    var n1=parseInt(document.MyForm.numero1.value);
    var n2=parseInt(document.MyForm.numero2.value);
    var n3=parseInt(document.MyForm.numero3.value);
    var n4=parseInt(document.MyForm.numero4.value);
    
   
    var resul=(n1+n2)/2;
    var result3=((n1+n2)/2)*0.25;
    var result2=n3+n4;
    var result4=((n3+n4)*1.2).toFixed(0);
   

    resul1=document.getElementById("resultado de la corriente");
    resul3=document.getElementById("resultado de la corriente de el controlador");
    resul2=document.getElementById("resultado de el voltaje");
    resul4=document.getElementById("resultado de el voltaje de el controlador");
    
    resul1.innerHTML=resul +"Ah";
    resul3.innerHTML=result3 +"A";
    resul2.innerHTML=result2 +"v";
    resul4.innerHTML=result4 +"v";
   
    
    
}
function operacion2(){
    var n1=parseInt(document.MyForm.numero1.value);
    var n2=parseInt(document.MyForm.numero2.value);
    var n3=parseInt(document.MyForm.numero3.value);
    var n4=parseInt(document.MyForm.numero4.value);
    var result5=(((n1+n2)/2)*0.25)*((n3+n4)*1.2).toFixed(0);

    resul5=document.getElementById("resultado de la potencia del sistema");
    resul5.innerHTML=result5 +"W";
}





