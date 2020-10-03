let test = document.getElementById("test");
//document.write(test);

var number = 0;
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

function onDragStart(event) {

	event
	  .dataTransfer
	  .setData('text/plain', event.target.id);

	event
	  .currentTarget
	  .style
	  .backgroundColor = 'yellow';

	}
	
function onDragOver(event) {
		event.preventDefault();	
}

function onDrop(event) {

	const id = evet.dataTransfer.getData('text');
	const draggableElement = document.getElementById(id);
	const dropzone = event.target;
	dropzone.appendChild(draggableElement);

	event
		.dataTransfer
		.clearData();
}
