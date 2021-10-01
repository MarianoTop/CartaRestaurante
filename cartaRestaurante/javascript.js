function mostrarReserva() {
    document.getElementById("contenedor-formulario").style.display = "flex";
    document.getElementById("caja-blur").style.display = "block";
  }

  function cerrarReserva() {
    document.getElementById("contenedor-formulario").style.display = "none";
    document.getElementById("caja-blur").style.display = "none";
  }

  function validar(nrotel){
     
    let resultado = validarTexto() && validarBotones() && validarCasilla() && validarTelefono(nrotel);

      if(resultado){
        mostrarConfirmacion();
      }
    
    return resultado;
  }

  function mostrarConfirmacion(){
    alert('Registro satisfactorio');
    cerrarReserva();
  }

  function validarTexto(){
    let x=  document.getElementsByClassName("verificable");

    let i=0;
    let validado=true;


    while(i<x.length && validado){

      if(x[i].value==""){
        alert("Por favor, complete el campo");
        x[i].style.backgroundColor = "red";
        x[i].focus();
        validado= false;
       
    }else{
        x[i].style.backgroundColor = "white";
        validado=true;
        i++;
    }

    }

    return validado;
  }

 
  function validarBotones() {
    let y=  document.getElementsByClassName("botonVerificable"); 
      let i=0 ;
      let validado=false;


      while (i<y.length&& !validado){

        if(y[i].checked){
          validado=true;
        }

        i++;
      }

      if(!validado){
        alert("Por favor, complete su genero");
        
      }


       return validado ;
  }


  function validarCasilla(){

    let z= document.getElementById(chequear);
    let casillaChequeada=false;
    if(chequear.checked){
      casillaChequeada=true;
    }else{
      alert("Por favor, acepte los protocolos contra el Covid-19")
    }


    return casillaChequeada;

  }

  function validarTelefono(inputtxt){ 

    let nrotel = /^\d{10}$/;
    let resultado = false;
    let tel = document.getElementById('telefono');

    if((inputtxt.value.match(nrotel))){
      resultado = true;
    }
    else{
      alert("teléfono inválido");
      tel.style.backgroundColor = "red";
    }

    return resultado;
  }