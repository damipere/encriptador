const textareahtml = document.getElementById("texto");
const oculta = document.getElementById("imgbus");
const oculta2 = document.getElementById("subtexto");
const textoencriptado =document.getElementById("textencrip");
const resultado =document.getElementById("resultado");
const copiarboton =document.getElementById("copiar");

function encripta(){
  resultado.style.display= "block";
    let text= textareahtml.value;
    if(validar(text)){
      text=text.replace(/[aeiou]/g,function(x){
        switch(x){
          case "a":
            return "ai"
          break
          case "e":
            return "enter"
          break
          case "i":
            return "imes"
          break
          case "o":
            return "ober"
          break
          case "u":
            return "ufat"
          break
        }
      });
      oculta.style.display = "none";
      oculta2.style.display = "none";
      textoencriptado.style.display = "none";
      copiarboton.style.display= "block";
      resultado.innerHTML= text;
    }
    else{
      alert("Solo letras minusculas, sin acentos o caracteres especiales");
    }
}
function desencriptar(){
  resultado.style.display= "block";
  let text=textareahtml.value;
  var letras = ["ai","enter","imes","ober","ufat"]
  if(validar(text)){
  for(var i=0;i<letras.length;i++){
    switch(letras[i]){
      case "ai":
        text=text.replace(/ai/g,"a");
      break
      case "enter":
        text=text.replace(/enter/g,"e");
      break
      case "imes":
        text=text.replace(/imes/g,"i");
      break
      case "ober":
        text=text.replace(/ober/g,"o");
      break
      case "ufat":
        text=text.replace(/ufat/g,"u");
      break
    }
  }
  copiarboton.style.display= "block";
  resultado.innerHTML= text;
  }
  else{
    alert("Solo letras minusculas, sin acentos o caracteres especiales");
  }
}
function copiar(){
  resultado.select();
  document.execCommand("copy");
}

function validar(valor) {
    let isValid = false;
    const pattern = new RegExp(/^[a-z0-9\s]+$/g);
    if (!valor) {
      isValid = false;
    } else {
      if (!pattern.test(valor)) {
        isValid = false;
      } else {
        isValid = true;
      }
    }
    return isValid;
  }