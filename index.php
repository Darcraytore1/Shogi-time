<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="CSS.css">
	<!-- <script type="text/javascript" src="event.js"></script> -->
	<title></title>
</head>
<body>
	<figure>
		<figcaption>Shogi music</figcaption>
		<audio controls loop src="SHOGI_DESUNE.mp3">
				Your browser does not support the
				<code>audio</code> element.
		</audio>
	</figure>

	<table id ="echequier">

	<?php
	// Je pourrais directement le mettre dans echequier
	function affichageEchequier() {
		?>

		<?php 
		for($l=0; $l<9; $l++) { // creer 9 lignes 
		

			?>
			<tr>
			<?php
			for($c=0; $c<9	; $c++) { // creer 9 cases par lignes
				?>
					

				<td>
				
				<!--<div ondragover="onDragOver(event);" 
			ondrop="onDrop(event);" 
			class = "caseBlanc" 
			x = "<?php //echo $l ?>" 
			y = "<?php //echo $c ?>">
			-->
			<div class="caseBlanc" id="<?php echo $c ?>, <?php echo $l ?>"   x="<?php echo $c ?>" y ="<?php echo $l ?>"> 
			</div></td>
				
			<?php

			}
			?>
			</tr>
			<?php
			}
			?>

			<table>
				<tr>
					<td><div class="caseMorte" type = "Pion" id = "pion1"></div></td>
					<td><div class="caseMorte" type = "Fou" id = "fou1"></div></td>
					<td><div class="caseMorte" type = "GeneralOr" id = "generalOr1"></div></td>
					<td><div class="caseMorte" type = "GeneralArgent" id = "generalArgent1"></div></td>
					<td><div class="caseMorte" type = "Tour" id = "tour1"></div></td>
					<td><div class="caseMorte" type = "Cavalier" id = "cavalier1"></div></td>
					<td><div class="caseMorte" type = "Lancier" id = "lancier1"></div></td>
				</tr>
			</table>
			
			
			<br><br>
			<table>
				<tr>
					<td><div class="caseMorte2" type = "Pion" id = "pion2"></div></td>
					<td><div class="caseMorte2" type = "Fou" id = "fou2"></div></td>
					<td><div class="caseMorte2" type = "GeneralOr" id = "generalOr2"></div></td>
					<td><div class="caseMorte2" type = "GeneralArgent" id = "generalArgent2"></div></td>
					<td><div class="caseMorte2" type = "Tour" id = "tour2"></div></td>
					<td><div class="caseMorte2" type = "Cavalier" id = "cavalier2"></div></td>
					<td><div class="caseMorte2" type = "Lancier" id = "lancier2"></div></td>
				</tr>
			</table>
			<?php
		}

	affichageEchequier();

	

	?>


	<script type="module" src="event.js"></script>

</html>

