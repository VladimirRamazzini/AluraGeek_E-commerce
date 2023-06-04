     
     /* F A L T A _ V A L I D A C I O N _ P A R A _ L O G I N */

function enviar(){
     const nombre = document.getElementById("nombre").value;
     const email = document.getElementById("email").value;
     const asunto = document.getElementById("asunto").value;
     const mensaje = document.getElementById("mensaje").value;
     window.location.href=`mailto:fmt309@hotmail.com?subject=Envio_de_Formulario_Contacto_MiPortafolio&body=Nombre%3A%20${nombre}%0D%0ACorreo%3A%20${email}%20%0D%0AAsunto%3A%20${asunto}%20%20%0D%0AMensaje%3A%20${mensaje}`;
}

function validarDatos(){
     window.event.preventDefault();
     if(document.form.nombre.value ==""){
         alert("Campo nombre obligatorio");
         document.form.nombre.focus();
     }else if(document.form.email.value.indexOf("@")==-1 || document.form.email.value.indexOf(".")==-1 ){
         alert("Campo E-mail es invalido, Ingrese correctamente su dirección");
         document.form.email.focus();
     }else if(document.form.asunto.value ==""){
         alert("Campo Asunto obligatorio");
         document.form.asunto.focus();
     }else if(document.form.mensaje.value =="" || document.form.mensaje.value.length > 50){
         alert("Campo Mensaje es obligatorio y debe contener máximo 50 caracteres");
         document.form.mensaje.focus();
     } else {
         enviar();
         exhibirMensaje();
     }
 
 }

 document.querySelector("form").addEventListener("submit", validarDatos);
 
 function exhibirMensaje(){
     var ul = document.querySelector(".envio");
     ul.innerHTML = "";
     var li = document.createElement("li");
         li.textContent = "Abriendo su app de correo!!";
         ul.appendChild(li);
         
         setTimeout(function(){
             li.textContent = null;
             form.reset();    
         },1000);
 }