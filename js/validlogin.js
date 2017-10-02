function  validresgistro(a,b,c,d){

	this.corr = a;
	
	this.DUI =b;
	this.NIT =c;
	this.telef = d;
	
	this.registrar = function(){
	var patron = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    var numero = /^(([0-9]{4})-)([0-9]{4})$/;
    var esNIT = /^(([0-9]{4})-)(([0-9]{6})-)(([0-9]{3})-)([0-9]{1})$/;
    var esDUI = /^(([0-9]{8})-)([0-9]{1})$/;
 


   if(!this.corr.search(patron)){
      	document.getElementById("noescor").style.display = "none";
   }
   else{
     document.getElementById("noescor").style.display = "block";
   }

   if(!this.telef.search(numero)){
      	document.getElementById("noestelef").style.display = "none";
   }
   else{
     document.getElementById("noestelef").style.display = "block";
   }

     if(!this.DUI.search(esDUI)){
      	document.getElementById("noesdui").style.display = "none";
   }
   else{
     document.getElementById("noesdui").style.display = "block";
   }
   
     if(!this.NIT.search(esNIT)){
      	document.getElementById("noesnit").style.display = "none";
   }
   else{
     document.getElementById("noesnit").style.display = "block";
   }
}
}

document.getElementById("registrar").addEventListener("click", function(){
        
         var correo = document.getElementById("correo").value;
       
         var nDUI = document.getElementById("dui").value;
         var nNIT = document.getElementById("nit").value;
         var telefono = document.getElementById("telefono").value;
        
      
      
     var validar1 = new validresgistro(correo, nDUI, nNIT,telefono);
     validar1.registrar();
});
function  validlogin(a,b){
	
	this.corre = a;
	this.contra= b;
	this.loguear = function(){
	 var patron = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
   
 
   if(!this.corre.search(patron)){
      	document.getElementById("noescor2").style.display = "none";

   }
   else{
     document.getElementById("noescor2").style.display = "block";
   }
}
}

document.getElementById("ingresar").addEventListener("click", function(){
         
         var correo = document.getElementById("logcorreo").value;
         var contraseña = document.getElementById("logpassword").value;
        
      
     var validar2 = new validlogin(correo,contraseña);
     validar2.loguear();
});