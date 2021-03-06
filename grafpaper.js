var pixel = {
  size: 15,
  color: 'rgba(0,0,0,.2)',
  stroke: 'rgba(0,0,255,.1)',
};

var isDrawing = false;

/* setup graphing paper */
function setup() {
  // full window canvas
  createCanvas(windowWidth, windowHeight);

  // make graph paper
  stroke( pixel.stroke );
  for ( var i = 0; i < windowWidth; i += pixel.size ) {
    for ( var j = 0; j < windowHeight; j += pixel.size ) {
      rect( i, j, pixel.size, pixel.size);
    }
  }
}

/* draw on graphing paper */
function draw() {
  if ( !isDrawing ) {
    return;
  }
  else {
    var position = getPosition( mouseX, mouseY );
    stroke( pixel.stroke );
    fill( pixel.color );
    rect( position.x, position.y, pixel.size, pixel.size );
  }
}

/* helpers */
function getPosition( x, y ) {
  var drawPos = {
    x: ( Math.ceil(x/pixel.size) * pixel.size ) - pixel.size,
    y: ( Math.ceil(y/pixel.size) * pixel.size ) - pixel.size
  };
  return drawPos;
}

/* events */
function mousePressed() {
  isDrawing = true;
}

function mouseReleased() {
  isDrawing = false;
}