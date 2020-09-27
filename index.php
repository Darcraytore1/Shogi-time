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

 	// La question à se poser est de savoir si il est important de séparer chaque, pour moi oui donc j'ai crée une classe pour chaque pièce.


	$Echequier = new Echequier();
	//$Lancier = new Lancier();		//Lancier peut bien etre appele 

	print_r($Echequier->numCellule);
	//print($Lancier->lancier);
	
?>