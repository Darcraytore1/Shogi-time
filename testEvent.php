<!DOCTYPE html>
<html>
  <head>
    <title>My Drag-and-Drop Example</title>
    <link rel="stylesheet" href="CSS.css" />
  </head>
  <body>
	<div class="example-parent">
  <div class="example-origin">
    <div
      id="draggable-1"
      class="example-draggable"
      draggable="true"
      ondragstart="onDragStart(event);"
    >
      draggable
    </div>
  </div>

  <div
    class="example-dropzone"
    ondragover="onDragOver(event);"
    ondrop="onDrop(event);"
  >
    dropzone
  </div>
</div>
	<script src="test3.js"></script>
  </body>
</html>