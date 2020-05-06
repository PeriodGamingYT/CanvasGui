var ctx = document.querySelector("#canvas");
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
var canvas = ctx.getContext("2d");

// Used Shapes.
function roundRect(x, y, w, h, rad, s, f) {
  var origStroke = canvas.strokeStyle;
  var origFill = canvas.fillStyle;
  canvas.strokeStyle = s;
  canvas.fillStyle = f;
  if(w < 2 * rad) rad = w / 2;
  if(h < 2 * rad) rad = h / 2;
  canvas.beginPath();
  canvas.moveTo(x+rad, y);
  canvas.arcTo(x+w, y, x+w,   y+h, rad);
  canvas.arcTo(x+w, y+h, x,   y+h, rad);
  canvas.arcTo(x,   y+h, x,   y,   rad);
  canvas.arcTo(x,   y,   x+w, y,   rad);
  canvas.fill();
  canvas.stroke();
  canvas.closePath();
  canvas.strokeStyle = origStroke;
  canvas.fillStyle = origFill;
}

// Window.
var windows = [];

function newWindow(x, y, type, attributes) {
  windows = [...windows,
    {
      x : x,
      y : y,
      type : type,
      attributes : attributes
    }
  ];
}

newWindow(10, 10, "h", {});

function update() {
  var win;
  for(win of windows) {
    roundRect(win.x, win.y, 50, 50, 12, "#000", "#444");
  }
}

window.requestAnimationFrame(update);
