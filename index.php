<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
	<!-- <script type="text/javascript" src="event.js"></script> -->
	<title>Accueil</title>
</head>
<body>
	<!-- La musique, réutiliser le concept pour être moins chiant -->
	<!--
	<figure>
		<figcaption>Shogi music</figcaption>
		<audio controls loop src="SHOGI_DESUNE.mp3">
				Your browser does not support the
				<code>audio</code> element.
		</audio>
	</figure>
	-->
	<header>
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<h1 class="site-title">
					<a class="navbar-brand" href="index.php">Shogi-Master</a>
				</h1>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span class="navbar-toggler-icon"></span>
    			</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="jouer" role="button" data-bs-toggle="dropdown">
								Jouer
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Créer une partie</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link dropdown-toggle" href="#" id="apprendre" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Apprendre
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Créer une partie</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
	
	<div class="container-fluid">
		<div class="row text-center">
			<div class="col-4"></div>
			<div class="col-6">
				<!-- <div class="caseBlanc2"></div> -->
					<table>
						<tr>
							<td><div id="pionC2" class="compteurPieceMorte">0</div></td>
							<td><div id = "fouC2" class="compteurPieceMorte">0</div></td>
							<td><div id = "generalOrC2" class="compteurPieceMorte">0</div></td>
							<td><div id = "generalArgentC2" class="compteurPieceMorte">0</div></td>
							<td><div id = "tourC2" class="compteurPieceMorte">0</div></td>
							<td><div id = "cavalierC2" class="compteurPieceMorte">0</div></td>
							<td><div id = "lancierC2" class="compteurPieceMorte">0</div></td>
						</tr>
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
					<br>
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
							
							<?php
						}

					affichageEchequier();
					?>


					</table>
					<br>
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
						<tr>
							<td><div id = "pionC1" class="compteurPieceMorte">0</div></td>
							<td><div id = "fouC1" class="compteurPieceMorte">0</div></td>
							<td><div id = "generalOrC1" class="compteurPieceMorte">0</div></td>
							<td><div id = "generalArgentC1" class="compteurPieceMorte">0</div></td>
							<td><div id = "tourC1" class="compteurPieceMorte">0</div></td>
							<td><div id = "cavalierC1" class="compteurPieceMorte">0</div></td>
							<td><div id = "lancierC1" class="compteurPieceMorte">0</div></td>
						</tr>
					</table>

					

			</div>
		</div>
	</div>

	<script type="module" src="event.js"></script>

</html>

