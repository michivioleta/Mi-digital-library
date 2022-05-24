function ver(n)
{
    document.getElementById("seccion2").style.borderRadius="10px"
    document.getElementById("seccion4").style.borderRadius="10px"
    
    

    document.getElementById("subseccion"+n).style.marginBottom="8px"
    document.getElementById("subseccion"+n).style.display="block"
    document.getElementById("subseccion"+n).style.borderRadius="10px"

}
function ocultar(n)
{
    document.getElementById("seccion2").style.borderRadius="50px"
    document.getElementById("seccion4").style.borderRadius="50px"

    document.getElementById("subseccion"+n).style.marginBottom="8px"
    document.getElementById("subseccion"+n).style.display="none"
    document.getElementById("subseccion"+n).style.borderRadius="10px"
    


}
function ham()
{
  document.getElementById("Contenedor1").style.display="block"
  /*console.log("aaaaaaaaaaa")*/
}
function hamb()
{
  document.getElementById("Contenedor1").style.display="none"
  /*console.log("5555555")*/
}

function otoshi(n)
{
  document.getElementById("subseccionuwu"+n).style.display="block"
}
function otoño(n)
{
  document.getElementById("subseccionuwu"+n).style.display="none"
}



function myfunction ()

{

  if(x.matches)

  {
    console.log("360_480")
    document.getElementById("titulo1").style.fontSize = "60%";
    document.getElementById("titulo2").style.fontSize = "60%";
    document.getElementById("titulo3").style.fontSize = "60%";
    document.getElementById("titulo4").style.fontSize = "60%";
    document.getElementById("seccion1").style.marginRight = "30px";
    document.getElementById("seccion2").style.marginRight = "30px";
    document.getElementById("seccion3").style.marginRight = "30px";
    document.getElementById("seccion4").style.marginRight = "30px";
  }
  else {
    document.getElementById("titulo1").style.fontSize = "60%";
    document.getElementById("titulo2").style.fontSize = "60%";
    document.getElementById("titulo3").style.fontSize = "60%";
    document.getElementById("titulo4").style.fontSize = "60%";
    document.getElementById("seccion1").style.marginRight = "30px";
    document.getElementById("seccion2").style.marginRight = "30px";
    document.getElementById("seccion3").style.marginRight = "30px";
    document.getElementById("seccion4").style.marginRight = "30px";
  
}

var x = window.matchMedia("(min-width : 0px) and (max-width: 480px)")
myfunction(x);
x.addListener(myfunction);
}




function myfunction1 ()

{

  if(x.matches)

  {

         console.log("360-480")

         //alert ("tamaño entre 360 y");

         //document.body.style.backgroundColor="lightgray";

         document. getElementById("titulo").style.fontSize="100%";

         document. getElementById("titulo1").style.fontSize="100%";

         document. getElementById("titulo2").style.fontSize="100%";

         document. getElementById("seccion5").style.marginRight="5%";

         document. getElementById("seccion6").style.marginRight="5%";

         document. getElementById("seccion7").style.marginRight="5%";

} else

  {

         document. getElementById("titulo").style.fontSize="150%";

         document. getElementById("titulo1").style.fontSize="150%";

         document. getElementById("titulo2").style.fontSize="150%";

         

         document. getElementById("seccion5").style.marginRight="5%";

         document. getElementById("seccion6").style.marginRight="5%";

         document. getElementById("seccion7").style.marginRight="5%";

  }

}

