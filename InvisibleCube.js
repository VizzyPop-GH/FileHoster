var rainbow = document.createElement('div');
rainbow.style.width = '100%';
rainbow.style.height = '100%';
rainbow.style.position = 'absolute';
rainbow.style.top = '0';
rainbow.style.left = '0';
rainbow.style.background = 'linear-gradient(to right, red, orange)';
document.body.appendChild(rainbow);









var cube = document.createElement('div');
cube.style.width = '100px';
cube.style.height = '100px';
cube.style.position = 'absolute';
cube.style.top = '50%';
cube.style.left = '50%';
cube.style.marginLeft = '-50px';
cube.style.marginTop = '-50px';
cube.style.transformStyle = 'preserve-3d';
cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
document.body.appendChild(cube);

var face = document.createElement('img');
face.src = 'https://resizing.flixster.com/CbqVJ1ytK31FEiKPnndNscCvYTo=/218x280/v2/https://flxt.tmsimg.com/assets/487578_v9_ba.jpg';
face.style.width = '100px';
face.style.height = '100px';
face.style.position = 'absolute';
face.style.transform = 'translateZ(50px)';
cube.appendChild(face);

var face = document.createElement('img');
face.src = 'https://resizing.flixster.com/CbqVJ1ytK31FEiKPnndNscCvYTo=/218x280/v2/https://flxt.tmsimg.com/assets/487578_v9_ba.jpg';
face.style.width = '100px';
face.style.height = '100px';
face.style.position = 'absolute';
face.style.background = 'blue';
face.style.transform = 'rotateY(90deg) translateZ(50px)';
cube.appendChild(face);

var face = document.createElement('img');
face.src = 'https://resizing.flixster.com/CbqVJ1ytK31FEiKPnndNscCvYTo=/218x280/v2/https://flxt.tmsimg.com/assets/487578_v9_ba.jpg';
face.style.width = '100px';
face.style.height = '100px';
face.style.position = 'absolute';
face.style.background = 'green';
face.style.transform = 'rotateY(180deg) translateZ(50px)';
cube.appendChild(face);

var face = document.createElement('img');
face.src = 'https://resizing.flixster.com/CbqVJ1ytK31FEiKPnndNscCvYTo=/218x280/v2/https://flxt.tmsimg.com/assets/487578_v9_ba.jpg';
face.style.width = '100px';
face.style.height = '100px';
face.style.position = 'absolute';
face.style.background = 'yellow';
face.style.transform = 'rotateY(-90deg) translateZ(50px)';
cube.appendChild(face);

var face = document.createElement('img');
face.src = 'https://resizing.flixster.com/CbqVJ1ytK31FEiKPnndNscCvYTo=/218x280/v2/https://flxt.tmsimg.com/assets/487578_v9_ba.jpg';
face.style.width = '100px';
face.style.height = '100px';
face.style.position = 'absolute';
face.style.background = 'orange';
face.style.transform = 'rotateX(90deg) translateZ(50px)';
cube.appendChild(face);

var face = document.createElement('img');
face.src = 'https://resizing.flixster.com/CbqVJ1ytK31FEiKPnndNscCvYTo=/218x280/v2/https://flxt.tmsimg.com/assets/487578_v9_ba.jpg';
face.style.width = '100px';
face.style.height = '100px';
face.style.position = 'absolute';
face.style.background = 'purple';
face.style.transform = 'rotateX(-90deg) translateZ(50px)';
cube.appendChild(face);

var x = 0;
var y = 0;
var lastX = 0;
var lastY = 0;
var dragging = false;

function rotateCube(event) {
  if (dragging) {
    x = event.clientX - lastX;
    y = event.clientY - lastY;
    cube.style.transform = 'rotateX(' + y + 'deg) rotateY(' + x + 'deg)';
  }
}

function onMouseDown(event) {
  dragging = true;
  lastX = event.clientX;
  lastY = event.clientY;
}

function onMouseUp(event) {
  dragging = false;
}

document.addEventListener('mousemove', rotateCube, false);
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseUp, false);
