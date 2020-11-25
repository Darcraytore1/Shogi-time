// main 

import Player from "./Player.js";
import Echequier from "./Echequier_js.js";

var echequier = new Echequier();
var player = new Player(echequier,true);
var player2 = new Player(echequier,false);
echequier.affiche();

//console.log(player.Player1playPiece(0,2,0,3));
//console.log(player.getEchequier());
//console.log(player);

//Test clique sur une case, tp sur une autre, fonctionne, reste a ajouter les contraintes de mouvements des pièces
// Enfin je peux tenter d'implémenter les contraintes de deplacements des pieces

var caseBlanc = document.querySelectorAll(".caseBlanc");
//console.log(activeBanc);
//instantCase = caseBlanc[i];
//var whoPlay = "1";


var movePiece = function(){

	console.log(player.getEchequier());
	//console.log(player);
	//console.log(player2);

	console.log(player2.listePieceGagne);

	var caseGreen = document.querySelector(".caseGreen");
	var activeBanc = document.querySelector(".caseGreenBanc");
	//console.log(echequier.isAttacked(0,0,1));

	// Si il a une case qui est deja verte
	if(caseGreen != null){
	// Mettre une condition ou, si la pièce adversaire est dans le camp adverse
	// caseGreen.getAttribute("camp") != this.firstElementChild.getAttribute()
		if (this.firstElementChild == null){
			
			var x1 = parseInt(caseGreen.firstElementChild.getAttribute("x"));
			var y1 = parseInt(caseGreen.firstElementChild.getAttribute("y"));

			var x2 = parseInt(this.getAttribute("x"),10);
			var y2 = parseInt(this.getAttribute("y"),10);


			// Possibilite de changer les methodes Player1playPiece et 2, pour qu'elle renvoie seulement
			// un boolean et qu'elle ne fasse pas l'action par la meme occasion
			if (player.getWhoPlay()){
				if(player.Player1playPiece(x1,y1,x2,y2)){
					caseGreen.firstElementChild.setAttribute("x",x2);
					caseGreen.firstElementChild.setAttribute("y",y2);

					this.append(caseGreen.firstElementChild);
					caseGreen.classList.remove("caseGreen");

					player.changeWhoPlay();
					player2.changeWhoPlay();
				}
			}
			
			// a ajouter quand la methode Player2PlayPiece sera complete

			else if (player2.getWhoPlay()){
				if (player2.Player2playPiece(x1,y1,x2,y2)){

					caseGreen.firstElementChild.setAttribute("x",x2);
					caseGreen.firstElementChild.setAttribute("y",y2);

					this.append(caseGreen.firstElementChild);
					caseGreen.classList.remove("caseGreen");

					player.changeWhoPlay();
					player2.changeWhoPlay();
				}
			}
		

		}


		else if (caseGreen.firstElementChild.getAttribute("camp") != this.firstElementChild.getAttribute("camp")){
			
			var x1 = parseInt(caseGreen.firstElementChild.getAttribute("x"));
			var y1 = parseInt(caseGreen.firstElementChild.getAttribute("y"));

			var x2 = parseInt(this.getAttribute("x"),10);
			var y2 = parseInt(this.getAttribute("y"),10);
			var bancPieces = document.querySelectorAll(".caseMorte");
			var bancPieces2 = document.querySelectorAll(".caseMorte2");

			var oldTypePiece = echequier.getPieceCellule()[y2][x2].type();
			console.log(oldTypePiece);
			if (player.getWhoPlay()){
				if (player.Player1playPiece(x1,y1,x2,y2)){

					this.firstElementChild.setAttribute("camp","1");
					//this.firstElementChild.setAttribute("x",player.listePieceGagnelength());
					this.firstElementChild.classList.add("reverse");
					console.log("prise d'une pièce");
					
					//console.log(echequier.getPieceCellule()[x2][y2]);
					console.log(player.get("Pion"));

					// Soit on déplace la pièce dans l'endroit ou elle doit aller, soit il y en a déjà une donc on la supprime carrément

					if ((player.listePieceGagne.get("Pion") - 1 == 0) && oldTypePiece == "Pion") bancPieces2[0].append(this.firstElementChild);
					else if (oldTypePiece == "Pion") this.firstElementChild.remove();
					if ((player.listePieceGagne.get("Fou") - 1 == 0) && oldTypePiece == "Fou") bancPieces2[1].append(this.firstElementChild);
					else if (oldTypePiece == "Fou") this.firstElementChild.remove();
					if ((player.listePieceGagne.get("Tour") - 1 == 0) && oldTypePiece == "Tour") bancPieces2[4].append(this.firstElementChild);
					else if (oldTypePiece == "Tour") this.firstElementChild.remove();
					if ((player.listePieceGagne.get("Cavalier") - 1 == 0) && oldTypePiece == "Cavalier") bancPieces2[5].append(this.firstElementChild);
					else if (oldTypePiece == "Cavalier") this.firstElementChild.remove();
					if ((player.listePieceGagne.get("GeneralOr") - 1 == 0) && oldTypePiece == "GeneralOr") bancPieces2[2].append(this.firstElementChild);
					else if (oldTypePiece == "GeneralOr") this.firstElementChild.remove();
					if ((player.listePieceGagne.get("GeneralArgent") - 1 == 0) && oldTypePiece == "GeneralArgent") bancPieces2[3].append(this.firstElementChild);
					else if (oldTypePiece == "GeneralArgent") this.firstElementChild.remove();
					if ((player.listePieceGagne.get("Lancier") - 1 == 0) && oldTypePiece == "Lancier" )  bancPieces2[6].append(this.firstElementChild);
					else if (oldTypePiece == "Lancier") this.firstElementChild.remove();
					//this.firstElementChild.remove();
					caseGreen.firstElementChild.setAttribute("x",x2);
					caseGreen.firstElementChild.setAttribute("y",y2);

					this.append(caseGreen.firstElementChild);
					caseGreen.classList.remove("caseGreen");
						
					player.changeWhoPlay();
					player2.changeWhoPlay();
				}
			}

			if (player2.getWhoPlay()){
				if (player2.Player2playPiece(x1,y1,x2,y2)){

					
					this.firstElementChild.setAttribute("camp","2");
					//this.firstElementChild.setAttribute("x",player.listePieceGagnelength());
					this.firstElementChild.classList.remove("reverse");
					console.log("prise d'une pièce");
					//console.log(player.get("Pion"));
					console.log(x2,y2);
					
					console.log(player2.listePieceGagne.get("Pion") - 1);


					if ((player2.listePieceGagne.get("Pion") - 1 == 0) && oldTypePiece == "Pion") bancPieces[0].append(this.firstElementChild);
					else if (oldTypePiece == "Pion") this.firstElementChild.remove();
					if ((player2.listePieceGagne.get("Fou") - 1 == 0) && oldTypePiece == "Fou") bancPieces[1].append(this.firstElementChild);
					else if (oldTypePiece == "Fou") this.firstElementChild.remove();
					if ((player2.listePieceGagne.get("Tour") - 1 == 0) && oldTypePiece == "Tour") bancPieces[4].append(this.firstElementChild);
					else if (oldTypePiece == "Tour") this.firstElementChild.remove();
					if ((player2.listePieceGagne.get("Cavalier") - 1 == 0) && oldTypePiece == "Cavalier") bancPieces[5].append(this.firstElementChild);
					else if (oldTypePiece == "Cavalier") this.firstElementChild.remove();
					if ((player2.listePieceGagne.get("GeneralOr") - 1 == 0) && oldTypePiece == "GeneralOr") bancPieces[2].append(this.firstElementChild);
					else if (oldTypePiece == "GeneralOr") this.firstElementChild.remove();
					if ((player2.listePieceGagne.get("GeneralArgent") - 1 == 0) && oldTypePiece == "GeneralArgent") bancPieces[3].append(this.firstElementChild);
					else if (oldTypePiece == "GeneralArgent") this.firstElementChild.remove();
					if ((player2.listePieceGagne.get("Lancier") - 1 == 0) && oldTypePiece == "Lancier" )  bancPieces[6].append(this.firstElementChild);
					else if (oldTypePiece == "Lancier") this.firstElementChild.remove();

					caseGreen.firstElementChild.setAttribute("x",x2);
					caseGreen.firstElementChild.setAttribute("y",y2);

					this.append(caseGreen.firstElementChild);
					caseGreen.classList.remove("caseGreen");

					player.changeWhoPlay();
					player2.changeWhoPlay();
				}
			}
			console.log(player.listePieceGagne);
			console.log(player2.listePieceGagne);
		}

		// Une autre case devient verte
		if (player.getWhoPlay() && this.firstElementChild.getAttribute("camp") == "1"){
			caseGreen.classList.remove("caseGreen");
			this.classList.add("caseGreen");
		}

		else if  (player2.getWhoPlay() && this.firstElementChild.getAttribute("camp") == "2"){

			caseGreen.classList.remove("caseGreen");
			this.classList.add("caseGreen");
		}
	}

	else if ((this.firstElementChild != null) && (this.firstElementChild.getAttribute("camp") == "1" && player.getWhoPlay()) && activeBanc != null){
		
		activeBanc.classList.remove("caseGreenBanc");
		this.classList.add("caseGreen");
	}

	else if ((this.firstElementChild != null) && (this.firstElementChild.getAttribute("camp") == "2" && player2.getWhoPlay()) && activeBanc != null){

		activeBanc.classList.remove("caseGreenBanc");
		this.classList.add("caseGreen");
	}

	else if ((this.firstElementChild != null) && (this.firstElementChild.getAttribute("camp") == "1" && player.getWhoPlay())) {
	
		//console.log(this.firstElementChild);
		this.classList.add("caseGreen");
	}

	else if ((this.firstElementChild != null) && (this.firstElementChild.getAttribute("camp") == "2" && player2.getWhoPlay())) {
		//console.log(this.firstElementChild);
		this.classList.add("caseGreen");
	}

	// gérer le parachutage
	else if (activeBanc != null){

		var x = parseInt(this.getAttribute("x"),10);
		var y = parseInt(this.getAttribute("y"),10);

		

		//player.parachutagePiece(x,y,parseInt(activeBanc.firstElementChild.getAttribute("x")));
		if (player2.isParachutable(x,y) && player2.getWhoPlay()){

			// C'est le type de la pièce qu'il faut qu'on ajoute
			var type = activeBanc.getAttribute("type");

			player2.listePieceGagne.set(type,player2.listePieceGagne.get(type)-1);

			activeBanc.firstElementChild.setAttribute("x",x);
			activeBanc.firstElementChild.setAttribute("y",y);

			player2.parachutagePiece(x,y,2,type);
			// Si c'est un  pion
			// this.append(activeBanc.firstElementChild);

			var pieceCopy = echequier.createImg(echequier.getPieceCellule()[y][x],x,y);

			if (player2.listePieceGagne.get(type) == 0) activeBanc.firstElementChild.remove();

			this.append(pieceCopy)
			activeBanc.classList.remove("caseGreenBanc");

			player.changeWhoPlay();
			player2.changeWhoPlay();
			
		}

		if (player.isParachutable(x,y) && player.getWhoPlay()){

			var type = activeBanc.getAttribute("type");

			player.listePieceGagne.set(type,player.listePieceGagne.get(type)-1);

			activeBanc.firstElementChild.setAttribute("x",x);
			activeBanc.firstElementChild.setAttribute("y",y);

			player.parachutagePiece(x,y,1,type);
			// Si c'est un  pion
			// this.append(activeBanc.firstElementChild);

			var pieceCopy = echequier.createImgReverse(echequier.getPieceCellule()[y][x],x,y);

			if (player.listePieceGagne.get(type) == 0) activeBanc.firstElementChild.remove();

			this.append(pieceCopy)
			activeBanc.classList.remove("caseGreenBanc");

			player.changeWhoPlay();
			player2.changeWhoPlay();
		}

	}
		/*
		if (partieTermine == true){
			console.log("termine");
		}
		*/
}


for (var i = 0; i<caseBlanc.length;i++){
	caseBlanc[i].addEventListener('click',movePiece)
}

var bancPiecePion2 = document.querySelector("#pion1");
var bancPieceFou2 = document.querySelector("#fou1");
var bancPieceTour2 = document.querySelector("#tour1");
var bancPieceLancier2 = document.querySelector("#lancier1");
var bancPieceCavalier2 = document.querySelector("#cavalier1");
var bancPieceGeneralOr2 = document.querySelector("#generalOr1");
var bancPieceGeneralArgent2 = document.querySelector("#generalArgent1");

var bancPiecePion1 = document.querySelector("#pion2");
var bancPieceFou1 = document.querySelector("#fou2");
var bancPieceTour1 = document.querySelector("#tour2");
var bancPieceLancier1 = document.querySelector("#lancier2");
var bancPieceCavalier1 = document.querySelector("#cavalier2");
var bancPieceGeneralOr1 = document.querySelector("#generalOr2");
var bancPieceGeneralArgent1 = document.querySelector("#generalArgent2");

console.log(bancPiecePion1);
// Dans cette methode rajouter une classe ou un attribut active, puis dans la deuxième fonction listener 
// gérer le fait de placer une pièce sur les cases null 

// Pour la prochaine fois gérer le parachutage de au mois le pion 

var parachutagePion2 = function(){
	
	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player2.getWhoPlay() && player2.listePieceGagne.get("Pion") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutagePion1 = function(){

	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player.getWhoPlay() && player.listePieceGagne.get("Pion") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageLancier2 = function(){
	
	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player2.getWhoPlay() && player2.listePieceGagne.get("Lancier") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageLancier1 = function(){

	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player.getWhoPlay() && player.listePieceGagne.get("Lancier") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageGeneralOr2 = function(){
	
	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player2.getWhoPlay() && player2.listePieceGagne.get("GeneralOr") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageGeneralOr1 = function(){

	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player.getWhoPlay() && player.listePieceGagne.get("GeneralOr") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageGeneralArgent2 = function(){
	
	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player2.getWhoPlay() && player2.listePieceGagne.get("GeneralArgent") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageGeneralArgent1 = function(){

	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player.getWhoPlay() && player.listePieceGagne.get("GeneralArgent") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageTour2 = function(){
	
	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player2.getWhoPlay() && player2.listePieceGagne.get("Tour") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageTour1 = function(){

	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player.getWhoPlay() && player.listePieceGagne.get("Tour") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageFou2 = function(){
	
	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player2.getWhoPlay() && player2.listePieceGagne.get("Fou") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageFou1 = function(){

	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player.getWhoPlay() && player.listePieceGagne.get("Fou") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageCavalier2 = function(){
	
	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player2.getWhoPlay() && player2.listePieceGagne.get("Cavalier") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageCavalier1 = function(){

	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this);

	if (player.getWhoPlay() && player.listePieceGagne.get("Cavalier") >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

// Les evenement sur les pièces mortes

bancPiecePion2.addEventListener("click",parachutagePion2);
bancPieceLancier2.addEventListener("click",parachutageLancier2);
bancPieceGeneralArgent2.addEventListener("click",parachutageGeneralArgent2);
bancPieceGeneralOr2.addEventListener("click",parachutageGeneralOr2);
bancPieceTour2.addEventListener("click",parachutageTour2);
bancPieceFou2.addEventListener("click",parachutageFou2);
bancPieceCavalier2.addEventListener("click",parachutageCavalier2);


bancPiecePion1.addEventListener("click",parachutagePion1);
bancPieceLancier1.addEventListener("click",parachutageLancier1);
bancPieceGeneralArgent1.addEventListener("click",parachutageGeneralArgent1);
bancPieceGeneralOr1.addEventListener("click",parachutageGeneralOr1);
bancPieceTour1.addEventListener("click",parachutageTour1);
bancPieceFou1.addEventListener("click",parachutageFou1);
bancPieceCavalier1.addEventListener("click",parachutageCavalier1);



//console.log(caseBlanc[9].firstElementChild);

/*
document.addEventListener("click",function{

})
*/

// Test drag and drop
/*
function onDragStart(event) {

  event
      .dataTransfer
      .setData('text/plain', event.target.id);

  
  //event.currentTarget.style.backgroundColor = 'yellow';

}
*/

/*
var pieces = document.querySelector("img")[0];
console.log(echequier);

document.addEventListener("drag",function(event){
  event
  .dataTransfer
  .setData('text/plain', event.target.id);
})
*/

/*
function onDragOver(event) {
  
  event.preventDefault();	

}
*/

/*
document.addEventListener("dragover",function(event){
  event.preventDefault();
})
*/

/*
function onDrop(event) {
  
    // Mettre une condition if qui regarde si le mouvement est valide 
    // Je vais mettre des conditions en php dans le code pour l'instant mais à voir, c'est surement pas le mieux à faire 

    //document.write(echequier); // On ne peut pas faire rentrer des objects php 

    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);

    const dropzone = event.target;

    // Possibilite de mettre un if avec le joueur qui soit devenue une class js

    // Valeurs cases departs
    const x1 = draggableElement.getAttribute("x");
    const y1 = draggableElement.getAttribute("y");

    // Les valeurs de la case d'arrivee
    const x2 = dropzone.getAttribute("x");
    const y2 = dropzone.getAttribute("y");

    //player.Player1playPiece(x1,y1,x2,y2);


    draggableElement.setAttribute("x",x2);

    //document.write(draggableElement.getAttribute("x"));
    
    //document.write(x);
    //document.write(y);

    //const x = event;
    //document.write(x);
    
    //document.write(draggableElement);
    //x = dropzone.getData(x);
    //const y = dropzone.getData.y();

    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();

}
*/

/*
document.addEventListener("drop",function(event){


    const dropzone = event.target;

    // Possibilite de mettre un if avec le joueur qui soit devenue une class js

    // Valeurs cases departs
    //const x1 = pieces.getAttribute("x");
    //const y1 = pieces.getAttribute("y");

    // Les valeurs de la case d'arrivee
    //const x2 = dropzone.getAttribute("x");
    //const y2 = dropzone.getAttribute("y");

    pieces.setAttribute("x",x2);

    document.write(pieces.getAttribute("x"));

    dropzone.appendChild(pieces);

    event.dataTransfer.clearData();
})
*/

// Test position
function position(x,y){
  //document.write(x,y);
}

/*
function onMouseOver(event) {
  document.write("caca");
}
*/

/*
function onmouseover(x,y){
  document.write("x,y");
}
*/

// une methode pour rattraper les coordonnee après avoir clicke sur une case 
/*
test.addEventListener("click", function( event ) {   
  // on met l'accent sur la cible de mouseenter
  document.write("caca");

  // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
*/
