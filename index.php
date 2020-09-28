<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="CSS.css">
	<title> Site shogi de ouf (J'espère un jour) </title>
</head>
<body> 
	<p class="center"> Shogi master </p>

</body>
</html>

<?php 
	
	require_once("Echequier.php");
	require_once("Lancier.php");
	require_once("Player.php");

 	// La question à se poser est de savoir si il est important de séparer chaque, pour moi oui donc j'ai crée une classe pour chaque pièce.


	$echequier = new Echequier();
	//$Lancier = new Lancier();		//Lancier peut bien etre appele 

	//print_r($Echequier->getPieceCellule());		// La fonction get fonctionne bien
	//print($Lancier->lancier);

	$player = new Player($echequier);
	print($player->getEchequier());
	print($player->Player1playPiece(2,2,2,3));		// Ne pas oublier que dans les faits le 0 est compte, alors que sur un plateau le 0, n'existe pas
	?> <br> <?php
	print($player->getEchequier());
	print($player->Player1playPiece(2,3,2,4));		// Le authorizedMouvement pose probleme sur les cases null, si null return false
	?> <br> <?php
	print($player->getEchequier());
	print($player->Player1playPiece(2,4,2,5));
	?> <br> <?php
	print($player->getEchequier());
	print($player->Player1playPiece(2,4,2,6));
	?> <br> <?php
	print($player->getEchequier());
	print($player->Player1playPiece(2,5,2,7));		// Les differents cas de figures de refus de mouvement de la piece 
	?> <br> <?php
	print($player->getEchequier());
	
	//print(false);	// Le false n'affiche rien et le true affiche 1
	
?>