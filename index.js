
function Enviar() { // Funcion Enviar para cuando hace click en el boton enviar 

    ComprobarInputNombre();
    ComprobarinputEmail();
    comprobarInputpassword();
    ComprobarSiSonIgualespassword();


    // comprobar que todo los resultado son true para mostrar el alert
    if ( ComprobarInputNombre() == true &&  ComprobarinputEmail() == true && comprobarInputpassword() == true
     && ComprobarSiSonIgualespassword() == true ) {
        alert("La inscripción ha sido correcta");
    }
}

function ComprobarInputNombre() { // Comprueba  si los datos introducido en el input nombres son verdaderos o no

    var InputNombre = document.getElementById('nombre');
    var valor= document.getElementById('contenido_nombre');

    var validarValor=/^[a-z A-Z á-ú Á-Ú]+$/;  // expresion regular para comprobar que solo acepte caracteres


    if (InputNombre.value == "") { // comprueba si el input nombre no esta vacio 
          
        valor.innerHTML='Rellene este campo';  // rellena el valor 
        valor.style.color = "red"; // pone la letra del valor en color rojo
        InputNombre.style.borderColor = "red";   // borde de color rojo
        InputNombre.style.borderWidth = "medium";
        InputNombre.style.backgroundImage = "url('./imagenes/error-icon.svg')";
        return false;
    }
    else{

         if (validarValor.test(InputNombre.value) ) { /// Comprobrueba que Input Nombre sea solo letra 
            
            InputNombre.style.borderColor = "green";// el borde se pone verde 
            InputNombre.style.borderWidth = "medium"; // Pone el borde mas grueso
            valor.innerHTML=''; 
            InputNombre.style.backgroundImage = "url('./imagenes/success-icon.svg')";
            return true;    // si entra en el else el valor que devuelve la funcion es false
         }
         else{

            InputNombre.style.borderColor = "red"; 
            InputNombre.style.borderWidth = "medium"; 
            valor.innerHTML=''; // vacia el valor
            InputNombre.style.backgroundImage = "url('./imagenes/error-icon.svg')";
            return false;  // si entra en el else el valor que devuelve la funcion es false

         }
       
    }
   
}

function ComprobarinputEmail() { // Comprueba  si los datos introducido en el input email son verdaderos o no

    var InputEmail = document.getElementById('email');
    var valorEmail= document.getElementById('contenido_email');
    var validarEmail= /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/; // expresion regular para comprobar el email
  
    if (InputEmail.value == "") {
          
        valorEmail.innerHTML='Rellene este campo';
        valorEmail.style.color = "red";
        InputEmail.style.borderColor = "red";
        InputEmail.style.borderWidth = "medium";
        InputEmail.style.backgroundImage = "url('./imagenes/error-icon.svg')";
        return false;
    }
    else{

        if (validarEmail.test(InputEmail.value)){
            InputEmail.style.borderColor = "green";
            InputEmail.style.borderWidth = "medium";
            valorEmail.innerHTML='';
            InputEmail.style.backgroundImage = "url('./imagenes/success-icon.svg')";
            return true;
        } 
        else {
    
            InputEmail.style.borderColor = "red";
            InputEmail.style.borderWidth = "medium";
            valorEmail.innerHTML='Email inválido';
            valorEmail.style.color = "red";
            InputEmail.style.backgroundImage = "url('./imagenes/error-icon.svg')";
            return false;
        }
    }
}


function comprobarInputpassword() {// Comprueba  si los datos introducido en el input password son verdaderos o no

    var Inputpassword = document.getElementById('password');
    var valor= document.getElementById('contenido_clave');

    if (Inputpassword.value == "") {
          
        valor.innerHTML='Rellene este campo';
        valor.style.color = "red";
        Inputpassword.style.borderColor = "red";
        Inputpassword.style.borderWidth = "medium";
        Inputpassword.style.backgroundImage = "url('./imagenes/error-icon.svg')";
        return false;

    }
    else{

        if (Inputpassword.value.length == 8) {
            Inputpassword.style.borderColor = "green";
            Inputpassword.style.borderWidth = "medium";
            valor.innerHTML='';
            Inputpassword.style.backgroundImage = "url('./imagenes/success-icon.svg')";
            return true;
        }
        else{
            Inputpassword.style.borderColor = "red";
            Inputpassword.style.borderWidth = "medium";
            valor.innerHTML='No debe tener más de 8 caracteres';
            valor.style.color = "red";
            Inputpassword.style.backgroundImage = "url('./imagenes/error-icon.svg')";
            return false;
        }
        
    }
   
}


function ComprobarSiSonIgualespassword() { // Comprueba  si los datos introduccidos en el input  contraseña si son iguales o no 

    var InputRepetirpassword = document.getElementById('passwordComprobar');
    var valorpassIgual= document.getElementById('contenido_claverepetir');
    var Inputpassword = document.getElementById('password');

    if (Inputpassword.value == "") {
          
        valorpassIgual.innerHTML='Rellene este campo';
        valorpassIgual.style.color = "red";
        InputRepetirpassword.style.borderColor = "red";
        InputRepetirpassword.style.borderWidth = "medium";
        InputRepetirpassword.style.backgroundImage = "url('./imagenes/error-icon.svg')";
        return false;
    }
    else{

        if(Inputpassword.value == InputRepetirpassword.value){
            InputRepetirpassword.style.borderColor = "green";
            InputRepetirpassword.style.borderWidth = "medium";
            InputRepetirpassword.style.backgroundImage = "url('./imagenes/success-icon.svg')";
            valorpassIgual.innerHTML='';
            return true;
        }else{
            InputRepetirpassword.style.borderColor = "red";
            valorpassIgual.style.color = "red";
            InputRepetirpassword.style.borderWidth = "medium";
            valorpassIgual.innerHTML='Las Contraseñas no coinciden';
            InputRepetirpassword.style.backgroundImage = "url('./imagenes/error-icon.svg')";
            return false;
        }
       
    }
   
}