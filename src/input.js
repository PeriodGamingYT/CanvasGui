// Input API.
var input = {
  m : {
    x : 0,
    y : 0,
    buttons : {
      l : false,
      r : false,
      dbl : false
    }
  },
  k : {
    p : false,
    key : '',
    s : {
      alt : false,
      shft : false,
      mta : false,
      ctrl : false
    }
  }
};

function resetMouseButtons() {
  input.m.buttons = {
    l : false,
    r : false,
    dbl : false
  }
}

function resetKeyInput() {
  input.k = {
    p : false,
    key : '',
    s : {
      alt : false,
      shft : false,
      mta : false,
      ctrl : false
    }
  };
}

document.onkeyup = () => {
  resetKeyInput();
}

document.onkeydown = () => {
  resetKeyInput();
  switch(event.key) {
    case 'Shift':
      input.k.s.shft = true;
      break;
    case 'Alt':
      input.k.s.alt = true;
      break;
    case 'Meta':
      input.k.s.mta = true;
      break;
    case 'Control':
      input.k.s.ctrl = true;
      break;
    default:
      input.k.key = event.key;
      break;
  }
}

document.onmousemove = () => {
  input.m.x = event.clientX;
  input.m.y = event.clientY;
}

document.onmouseup = () => {
  resetMouseButtons();
}

document.onmousedown = () => {
  resetMouseButtons();
  input.m.buttons.l = true;
}

document.on = () => {
  resetMouseButtons();
  input.m.buttons.l = true;
} // I have to recharge my computer, then I will start where I left off of.
