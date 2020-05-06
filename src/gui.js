var ctx = document.querySelector("#canvas");
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
var canvas = ctx.getContext("2d");

// Window.
var windows = [];

function window(x, y, type, attributes) {
  windows.push(
    {
      x : x,
      y : y,
      type : type,
      attributes : attributes
    }
  );
}
