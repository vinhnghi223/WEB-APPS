$(document).ready(function() { //perform actions when DOM is ready
  
  $('#pictures img:last').animate({'left':'20','bottom':'0','height':'578px', 'width':'183px'});
  $('#pictures img:nth-child(8)').animate({'left':'-20','bottom':'40','height':'450px', 'width':'127px'});

  var z = 0; //for setting the initial z-index's
  var inAnimation = false; //flag for testing if we are in a animation

  $('#pictures img').each(function() { //set the initial z-index's
    z++; //at the end we have the highest z-index value stored in the z variable
    $(this).css('z-index', z); //apply increased z-index to <img>
  });

  function swapFirstLast(isFirst) {
    if(inAnimation) return false; //if already swapping pictures just return
    else inAnimation = true; //set the flag that we process a image
    
    var processZindex, direction, newZindex, inDeCrease; //change for previous or next image
    
    if(isFirst) { processZindex = z; direction = '-'; newZindex = 1; inDeCrease = 1; } //set variables for "next" action
    else { processZindex = 1; direction = ''; newZindex = z; inDeCrease = -1; } //set variables for "previous" action
    
    $('#pictures img').each(function() { //process each image
      if($(this).css('z-index') == processZindex) { //if its the image we need to process

    $(this).prev('img').animate({'left':'20','bottom':'0','height':'578px', 'width':'183px'});

		$(this).animate({ 'left' : direction + 100 + 'px','bottom':'40','height':'450px', 'width':'142px' }, 'fast', function() { //animate the img above/under the gallery (assuming all pictures are equal height)
		  $(this).css('z-index', newZindex) //set new z-index
            .animate({ 'left' : '-20','bottom':'40','height':'450px', 'width':'160px' }, 'fast', function() { //animate the image back to its original position
			  inAnimation = false; //reset the flag
			});
        });
      } else { //not the image we need to process, only in/de-crease z-index
        $(this).animate({ 'left' : '0','bottom':'20','height':'500px', 'width':'158px' }, 'fast', function() { //make sure to wait swapping the z-index when image is above/under the gallery
          $(this).css('z-index', parseInt($(this).css('z-index')) + inDeCrease); //in/de-crease the z-index by one
        });
      }
    });
    return false; //don't follow the clicked link
  }
  
  $('.next').click(function() {
    $('#pictures').wrap('.wrapAroundATag');
    return swapFirstLast(true); //swap first image to last position
  });
  
  $('#pictures .next').each(function() { //set the initial z-index's
    z++; //at the end we have the highest z-index value stored in the z variable
    $(this).css('z-index', z); //apply increased z-index to <img>
  });

  $('#pictures .back').each(function() { //set the initial z-index's
    z--; //at the end we have the highest z-index value stored in the z variable
    $(this).css('z-index', z); //apply increased z-index to <img>
  });

  $('.back').click(function() {
    $('#pictures').wrap('.wrapAroundATag');
    return swapFirstLast(true); //swap first image to last position
  });

});