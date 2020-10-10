<!DOCTYPE html>
<html>
<?php
	require_once("Echequier.php");
	require_once("Player.php");
?>
<head>
	<link rel="stylesheet" type="text/css" href="CSS.css">
	<script type="text/javascript" src="event.js"></script>
	<title></title>
</head>
<body>
	<?php
		$nombre=1;
		//$classe="caseBlanc"
		//document.write('<table>');
		$echequier1 = new Echequier();
		$player1 = new Player($echequier1);
		$player1->Player1playPiece(2,2,2,3);
		
	?>
	<table id ="test">

	<?php
	// Je pourrais directement le mettre dans echequier
	function affichageEchequier($echequier) {

		$pieceCellule = $echequier->getPieceCellule();

		for($l=0; $l<9; $l++) { // creer 9 lignes 
		
			//document.write('<tr>');
			?>
			<tr>
			<?php
			for($c=0; $c<9	; $c++) { // creer 9 cases par lignes
				
					
				//document.write('<td><a onMouseOver="position('+l+','+c+')"><div id="'+l+'|'+c+'" class="'+classe+'"></div></a></td>'); // CREATION DES CASES (position('+l+','+c+') EST COMPLETE PAR UNE FONCTION DE LOCALISATION DES CASES DANS UN AUTRE SCRIPT)
				// Test pour voir
				//document.write('<td><a onMouseOver="position('+l+','+c+')"><div id="test" class="'+classe+'"></div></a></td>');
				?>
				<!-- <td><a onmouseover="position(<?php// echo $l ?>,<?php // echo $c ?>)"> <div id="<?php //$l ?> | <?php //$c ?>" class = "caseBlanc"> </div></a></td> -->

				<td><a id="<?php echo $c,$l ?>">
				<div ondragover="onDragOver(event);" 
			onclick="onClick(event);"
			ondrop="onDrop(event);" 
			class = "caseBlanc" 
			x = "<?php echo $l ?>" 
			y = "<?php echo $c ?>"><?php 
					if ($pieceCellule[$l][$c] != null){
						$pieceCellule[$l][$c]->printImgPiece($c,$l);
					}
					
				?></div></a></td>
				<!-- <td><a id="<?php //echo $l ?>,<?php //echo $c ?>" onmouseover="onMouseOver(event);"><div  class = "caseBlanc"></div></a></td> -->
				<?php
				//$nombre++;
				}
			//$nombre++;
			
			//document.write('</tr>');
			?>
			</tr>
			<?php
			}
	}

	function bougerPiece(){
		
	}

	affichageEchequier($echequier1);

	?>











	<!-- Test pour voir si le probleme vient des cases -->
<!--
	</table>

	<table id="test">
	<?php
	//for($l=1; $l<10; $l++) { 
	?>
		<tr>
		<?php
		//for($c=1; $c<10; $c++) { 

			?>

			<td><p>caca</p></td>
			<?php
			//}
			?>
		</tr>
		<?php
		//}
		?>
	</table>
-->
</body>

<!--
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
-->
</html>

