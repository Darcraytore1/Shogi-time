<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="CSS.css">
	<!-- <script type="text/javascript" src="event.js"></script> -->
	<title></title>
</head>
<body>
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
			</table>
			<br><br>
			<div class="bancPiece">

			</div>

			<br><br>
			<div class="bancPiece">

			</div>
			<?php
		}

	affichageEchequier();

	

	?>


	<script type="module" src="event.js"></script>

</html>

