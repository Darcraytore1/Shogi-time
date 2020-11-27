// main 

import Player from "./Player.js";
import Echequier from "./Echequier_js.js";

import Lancier from "./Piece_js/Lancier.js";
import Fou from "./Piece_js/Fou.js";
import GeneralArgent from "./Piece_js/GeneralArgent.js";
import GeneralOr from "./Piece_js/GeneralOr.js";
import Tour from "./Piece_js/Tour.js";
import Pion from "./Piece_js/Pion.js";
import Cavalier from "./Piece_js/Cavalier.js";
import Roi from "./Piece_js/Roi.js";

import Lancier_u from "./Piece_js/Lancier_u.js";
import Fou_u from "./Piece_js/Fou_u.js";
import GeneralArgent_u from "./Piece_js/GeneralArgent_u.js";
import Tour_u from "./Piece_js/Tour_u.js";
import Pion_u from "./Piece_js/Pion_u.js";
import Cavalier_u from "./Piece_js/Cavalier_u.js";

var echequier = new Echequier();
var player = new Player(echequier,true);
var player2 = new Player(echequier,false);
echequier.affiche();

//console.log(player.Player1playPiece(0,2,0,3));
//console.log(player.getEchequier());
//console.log(player);


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


			// Case verte, donc coordonnée de la case cliqué en première 
			var x1 = parseInt(caseGreen.firstElementChild.getAttribute("x"));
			var y1 = parseInt(caseGreen.firstElementChild.getAttribute("y"));

			// deuxième case cliqué donc celle de destination pour la case verte actuelle
			var x2 = parseInt(this.getAttribute("x"),10);
			var y2 = parseInt(this.getAttribute("y"),10);

			// Les deux bancs de morts des pièces
			var bancPieces = document.querySelectorAll(".caseMorte");
			var bancPieces2 = document.querySelectorAll(".caseMorte2");

			var oldTypePiece = echequier.getPieceCellule()[y2][x2].type();
			var oldPiece = echequier.getPieceCellule()[y2][x2];

			if (player.getWhoPlay()){
				if (player.Player1playPiece(x1,y1,x2,y2)){

					this.firstElementChild.setAttribute("camp","1");
					//this.firstElementChild.setAttribute("x",player.listePieceGagnelength());
					this.firstElementChild.classList.add("reverse");
					
					//console.log(echequier.getPieceCellule()[x2][y2]);
					console.log(player.get(oldTypePiece));

					// Soit on déplace la pièce dans l'endroit ou elle doit aller, soit il y en a déjà une donc on la supprime carrément

					if (player.listePieceGagne.get(oldTypePiece) - 1 == 0){
						this.firstElementChild.remove();
						var img = echequier.createImgReverse(oldPiece,x,y);
						bancPieces2[oldPiece.numBanc()].append(img);
					} else this.firstElementChild.remove();

					
					caseGreen.firstElementChild.setAttribute("x",x2);
					caseGreen.firstElementChild.setAttribute("y",y2);

					this.append(caseGreen.firstElementChild);
					caseGreen.classList.remove("caseGreen");
						
					player.changeWhoPlay();
					player2.changeWhoPlay();
				}
			}

			if (player2.getWhoPlay()){
				if (player2.Player1playPiece(x1,y1,x2,y2)){

					
					this.firstElementChild.setAttribute("camp","2");
					//this.firstElementChild.setAttribute("x",player.listePieceGagnelength());
					this.firstElementChild.classList.remove("reverse");

					
					console.log(oldTypePiece);
					console.log(player2.listePieceGagne);

					if (player2.listePieceGagne.get(oldTypePiece) - 1 == 0){
						this.firstElementChild.remove();
						var img = echequier.createNormalImg(oldPiece,x,y);
						bancPieces[oldPiece.numBanc()].append(img);
					} else this.firstElementChild.remove();

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

// Les mouvement sur l'échequier 

for (var i = 0; i<caseBlanc.length;i++){
	caseBlanc[i].addEventListener('click',movePiece)
}


// Dans cette methode rajouter une classe ou un attribut active, puis dans la deuxième fonction listener 
// gérer le fait de placer une pièce sur les cases null 

// Pour la prochaine fois gérer le parachutage de au mois le pion 

var parachutageBanc2 = function(){
	
	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this.getAttribute('type'));

	if (player2.getWhoPlay() && player2.listePieceGagne.get(this.getAttribute('type')) >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

var parachutageBanc1 = function(){
	
	var caseGreen = document.querySelector(".caseGreen");
	console.log(caseGreen);
	console.log(this.getAttribute('type'));

	if (player.getWhoPlay() && player.listePieceGagne.get(this.getAttribute('type')) >= 1){

		if(caseGreen != null) {
			caseGreen.classList.remove("caseGreen");
		}
		this.classList.add("caseGreenBanc");
	}
}

// Les evenement sur les pièces mortes

var bancPieces = document.querySelectorAll(".caseMorte");

for (var i = 0; i<bancPieces.length;i++){
	bancPieces[i].addEventListener('click',parachutageBanc2);
}

var bancPieces2 = document.querySelectorAll(".caseMorte2");

for (var i = 0; i<bancPieces2.length;i++){
	bancPieces2[i].addEventListener('click',parachutageBanc1);
}