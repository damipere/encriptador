const textareahtml = document.getElementById("texto");
const oculta = document.getElementById("imgbus");
const oculta2 = document.getElementById("subtexto");
const textoencriptado =document.getElementById("textencrip");
const resultado =document.getElementById("resultado");
const copiarboton =document.getElementById("copiar");
//obtenemos todos los campos a ocupar u ocultar
function encripta(){

  
  resultado.style.display= "block";
  //muestra el textarea
    let text= textareahtml.value;
    //primero valida que venga sin mayusculas o caracteres especiales
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

      //empieza a buscar vocales y remplaza dependiendo de cual vocal es
      oculta.style.display = "none";
      oculta2.style.display = "none";
      textoencriptado.style.display = "none";
      copiarboton.style.display= "block";
      resultado.innerHTML= text;
      // oculta lo que no se va a ocupar y muestra el boton copiar en este caso para los mediaquery es donde se ocupa esto
    }
    else{
      alert("Solo letras minusculas, sin acentos o caracteres especiales");
      // en caso de error muestra un alert
    }
}
function desencriptar(){
//muestra el textarea
  resultado.style.display= "block";
  let text=textareahtml.value;
  var letras = ["ai","enter","imes","ober","ufat"]
  //primero valida que venga sin mayusculas o caracteres especiales
  if(validar(text)){
    // hace un recorrido del array donde se almaceno las vocales encriptadas y las encuentra empieza a remplazar
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
  //muestra el cupon en estos casos se ocupa mas en mediaquerys
  copiarboton.style.display= "block";
  resultado.innerHTML= text;
  }
  else{
    alert("Solo letras minusculas, sin acentos o caracteres especiales");
    //en caso de error muestra un alert
  }
}

//boton copiar
function copiar(){
  resultado.select();
  document.execCommand("copy");
}
//valida por medio de un Regexp que venga solo minusculas y numeros
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