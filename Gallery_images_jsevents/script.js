document.querySelector('.grid').addEventListener('mouseover', function(e) {
  var etarget=e.target;
  if (etarget.tagName === 'IMG') {

    //show magnifying glass
    var elm = document.createElement('div');
    elm.className = 'preview';
    etarget.parentNode.appendChild(elm);

    //img elm
    var img = document.createElement('img');
    var imgName = etarget.src;
    img.src = imgName.substr(0,imgName.length-4)+'o.jpg';
    elm.appendChild(img);

    elm.style.left=e.offsetX+15+'px';
    elm.style.top=e.offsetY+15+'px';

    etarget.addEventListener('mouseout', function handler(d) {
      var myNode = d.target.parentNode.querySelector('div.preview');
      myNode.parentNode.removeChild(myNode);
      e.target.removeEventListener('mouseout', handler, false);
    }, false);

    etarget.addEventListener('mousemove',function(f){
      elm.style.left=f.offsetX+15+'px';
      elm.style.top=f.offsetY+15+'px';
    },false);
  } // check if mouse is over images
}, false); // mouseover event