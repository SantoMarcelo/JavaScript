 function ligar() {
    
    /**o comando prompt adiciona uma caixa de texto para ser digitado no browser. */
    var primeiroNome = prompt("Insira seu nome");
    alert("Prazer " + primeiroNome);
  
    document.getElementById("xti").src = "C:/IMAGENS/lampada2.jpg";
 }

 function calcularIMC(){
     var formulario = document.getElementById("formulario");

     var kilos = +formulario.peso.value;
     var altura = +formulario.altura.value;
     
     var imc = kilos /(altura * altura);
     var resultado
      
    // Colocar valor IMC no campo IMC 
    formulario.imc.value = imc.toFixed(2);
 

     if(imc < 20 ){
         resultado = " Abaixo do Peso ";
         formulario.resultado.value = resultado;
     } else if(imc >=  20 && imc < 25 ){
         resultado = "Peso Ideal ";
         formulario.resultado.value = resultado;
     } else if(imc >=  25 && imc < 30 ){
         resultado = "Sobrepeso ";
         formulario.resultado.value = resultado;
     } else if(imc >=  30 && imc < 35 ){
         resultado = "Obesidade Moderada ";
         formulario.resultado.value = resultado;
     } else if(imc >=  35 && imc < 40 ){
         resultado = "Obesidade Severa ";
         formulario.resultado.value = resultado;
     } else if(imc >=  40 && imc < 50 ){
         resultado = "Obesidade Morbida";
         formulario.resultado.value = resultado;
     } else if(imc >=  50 ){
         resultado = "Super Obesidade ";
         formulario.resultado.value = resultado;
     }

     console.log(resultado);

 } 