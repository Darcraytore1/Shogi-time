// main 
var echequier = new Echequier();
var player = new Player(echequier);
player.getEchequier();


// Test drag and drop

function onDragStart(event) {

  event
      .dataTransfer
      .setData('text/plain', event.target.id);

  
  //event.currentTarget.style.backgroundColor = 'yellow';

}

/*
var pieces = document.querySelector("img")[0];
console.log(echequier);

document.addEventListener("drag",function(event){
  event
  .dataTransfer
  .setData('text/plain', event.target.id);
})
*/


function onDragOver(event) {
  
  event.preventDefault();	

}


/*
document.addEventListener("dragover",function(event){
  event.preventDefault();
})
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
