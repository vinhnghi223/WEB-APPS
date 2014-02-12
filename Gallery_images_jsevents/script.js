document.querySelector('.grid').addEventListener('mouseover', function(e) {
  var etarget=e.target;
  if (etarget.tagName === 'IMG') {

    var elm = document.createElement('div');
    elm.className = 'preview';
    etarget.parentNode.appendChild(elm);

    var img = document.createElement('img');
    var imgName = etarget.src;
    img.src = imgName.substr(0,imgName.length-4)+'o.jpg';
    elm.appendChild(img);

    etarget.addEventListener('mouseout', function handler(d) {
      var myNode = d.target.parentNode.querySelector('div.preview');
      myNode.parentNode.removeChild(myNode);
      e.target.removeEventListener('mouseout', handler, false);
    }, false);

  } // check if mouse is over images
}, false); // mouseover event