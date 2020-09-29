<head>

<style type="text/css">
<!--
.caseBlanc, .caseBrun{
height : 35px;
width : 35px;
border : 1px solid #000000;
}
.caseBlanc {
background-color: #efd7b8;
}
-->
</style>

<body>
    
<script language="JavaScript">
	var nombre=1;
	var classe="caseBlanc"
	document.write('<table>');
	for(var l=1; l<10; l++) { // creer 9 lignes 
	
		document.write('<tr>');
		for(var c=1; c<10; c++) { // creer 9 cases par lignes
			
			    
			//document.write('<td><a onMouseOver="position('+l+','+c+')"><div id="'+l+'|'+c+'" class="'+classe+'"></div></a></td>'); // CREATION DES CASES (position('+l+','+c+') EST COMPLETE PAR UNE FONCTION DE LOCALISATION DES CASES DANS UN AUTRE SCRIPT)
			// Test pour voir
			document.write('<td><a onMouseOver="position('+l+','+c+')"><div id="test" class="'+classe+'"></div></a></td>');
			nombre++;
			}
		nombre++;
		document.write('</tr>');
		}
	document.write('</table>');
</script>

<script language="JavaScript">
	let test = document.getElementById("test");
  
// Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste
test.addEventListener("mouseenter", function( event ) {   
  // on met l'accent sur la cible de mouseenter
  event.target.style.color = "purple";

  // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// Ce gestionnaire sera exécuté à chaque fois que le curseur
// se déplacera sur un autre élément de la liste
test.addEventListener("mouseover", function( event ) {   
  // on met l'accent sur la cible de mouseover
  event.target.style.color = "orange";

  // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

</script>
    
</body>