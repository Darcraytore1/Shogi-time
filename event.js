//import * from 'Cavalier';

//let test = document.getElementById("test");
//let test = document.getElementById("0,0");
//document.write(test);

//var number = 0;
// Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste

// Test n°1
/*
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
*/

// Test n°2
/*
test.addEventListener("click", function( event ){
  if (number == 0){
    document.write("<p id='test'>caca</p>");
  }
  else {
    document.write("<p id='test'>prout</p>");
  }

},false);
*/

// Test drag and drop

function onDragStart(event) {

    event
        .dataTransfer
        .setData('text/plain', event.target.id);

    
    //event.currentTarget.style.backgroundColor = 'yellow';

}
	
function onDragOver(event) {
    
    event.preventDefault();	
  
}

/*
function onClick(event){
    //const id = event.dataTransfer.getData('text');
    //document.write(document.getElementById(id));
    //document.write(element);

    const x = event.target.x;
    //const x = element.getAttribute(x);
    document.write(x);
    document.write("3");
}
*/

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

    draggableElement.setAttribute("x",x2);

    document.write(draggableElement.getAttribute("x"));
    
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