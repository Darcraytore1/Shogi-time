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

 	// La question à se poser est de savoir si il est important de séparer chaque piece, pour moi oui donc j'ai crée une classe pour chaque pièce.


	$echequier = new Echequier();
	//$Lancier = new Lancier();		//Lancier peut bien etre appele 

	//print_r($Echequier->getPieceCellule());		// La fonction get fonctionne bien
	//print($Lancier->lancier);

	$player = new Player($echequier);

	// Multiples test avec les pions + mangeage de piece 
	/*
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
	print($player->Player1playPiece(2,5,2,6));
	?> <br> <?php
	print($player->getEchequier());
	print($player->Player1playPiece(2,6,2,7));		// Les differents cas de figures de refus de mouvement de la piece affiche des messages differents
	?> <br> <?php
	print($player->getEchequier());
	

	print($player);		// On peut manger des pieces 
	*/

	// Test avec les fous
	// ça a l'air environ de fonctionner a tester avec un bot 
	/*
	print($player->Player1playPiece(6,2,6,3));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(7,1,5,3)); 		// Faire en sorte que le fou ne puisse pas passer au dessus des autres pieces 
	?> <br> <?php
	print($player->getEchequier());
	
	print($player->Player1playPiece(3,5,1,3));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(1,3,0,4));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(0,4,-1,5));		// ça a l'air de bloque à gauche du tableau 
	?> <br> <?php
	print($player->getEchequier());
	*/

	// Test avec les generaux d'or
	/*
	print($player->Player1playPiece(3,0,3,1)); 		
	?> <br> <?php
	print($player->getEchequier());

	
	print($player->Player1playPiece(3,1,3,2));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(3,2,4,2));
	?> <br> <?php
	print($player->getEchequier());
	*/

	// Test avec les generaux d'argent
	/*
	print($player->Player1playPiece(2,0,2,1)); 		
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(2,1,2,0));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(2,2,2,3));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(2,1,2,2));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(2,2,3,3));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(3,3,2,2));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(2,2,1,3));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(1,3,2,2));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(2,2,2,3));
	?> <br> <?php
	print($player->getEchequier());
	*/

	// Test avec le Roi, on fera ça plus tard


	// Test avec le cavalier pour plus tard 


	// Test avec la tour 
	// ça a l'air environ de fonctionner a tester avec un bot
	/*
	print($player->Player1playPiece(1,1,3,1)); 		
	?> <br> <?php
	print($player->getEchequier());
	
	print($player->Player1playPiece(3,1,3,4));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(3,2,3,3));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(3,3,3,4));
	?> <br> <?php
	print($player->getEchequier());
	
	print($player->Player1playPiece(3,1,3,3)); 		
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(3,3,1,3)); 		
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(1,3,1,1)); 		
	?> <br> <?php
	print($player->getEchequier());
	*/

	// Test avec le lancier
	/*
	print($player->Player1playPiece(0,0,0,4)); 		
	?> <br> <?php
	print($player->getEchequier());
	*/
	
	/*
	print($player->Player1playPiece(3,1,3,4));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(3,2,3,3));
	?> <br> <?php
	print($player->getEchequier());
	*/

	/*
	print($player->Player1playPiece(0,4,-1,5));		// ça a l'air de bloque à gauche du tableau 
	?> <br> <?php
	print($player->getEchequier());
	*/

	// Test pour manger des pieces
	/*
	print($player->Player1playPiece(0,2,0,3)); 		
	?> <br> <?php
	print($player->getEchequier());
	
	print($player->Player1playPiece(0,3,0,4));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(0,4,0,5));
	?> <br> <?php
	print($player->getEchequier());

	print($player->Player1playPiece(0,5,0,6));
	?> <br> <?php
	print($player->getEchequier());
	*/
	
	// Test du getCampDeLaPiece
	/*
	$pion = new Pion(1);
	echo $pion->getCampDeLaPiece();
	*/

	// Test parachutage piece 
	print($player->getEchequier());
	print($player->Player1playPiece(2,2,2,3));	
	?> <br> <?php
	print($player->getEchequier());
	print($player->Player1playPiece(2,3,2,4));	
	?> <br> <?php
	print($player->getEchequier());
	print($player->Player1playPiece(2,4,2,5));
	?> <br> <?php
	print($player->getEchequier());
	print($player->Player1playPiece(2,5,2,6));
	?> <br> <?php
	print($player->getEchequier());
	print($player->parachutagePiece(new Pion(2),4,5));		// Le  numero du pion est important, à voir comment régler ça 



	//print(false);	// Le false n'affiche rien et le true affiche 1

	// Test pour expliquer a oscar
	/*
	$echequier = new Echequier();
	echo $echequier;
	$echequier->changeCellule(0,0,null);
	echo $echequier;
	$echequier->changeCellule(3,3,new Pion());
	echo $echequier;
	*/
	
?>