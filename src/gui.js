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

newWindow(10, 10, "h", {name : "Color Picker"});

function update() {
  var win;
  for(win of windows) {
    roundRect(win.x, win.y, 150, 150, 12, "#000", "#DDD");
    canvas.strokeStyle = "#000";
    canvas.beginPath();
    canvas.moveTo(win.x, win.y+12);
    canvas.lineTo(win.x+150, win.y+12);
    canvas.stroke();
    canvas.closePath();
    if(win.attributes.name) {
      canvas.font = "10px Arial";
      canvas.fillStyle = "#000";
      var length = canvas.measureText(win.attributes.name).width;
      var size = 150;
      var start = (size/2)-(length/2);
      start += win.x;
      canvas.fillText(win.attributes.name, start, win.y+10);
    }
  }
}

window.requestAnimationFrame(update);
