window.onload = function(){
  
 	var img = document.getElementsByTagName('img'),
 		count = 0;
 		for(var j = 0; j < img.length; j++){
 			img[j].onload = function(){
 				count++;
 				start(count, img.length);
 			}
 			img[j].src = img[j].getAttribute('data-src');
 			img[j].style.opacity = 0;
 		}
}
function start(count, max){

	if(count !== max) return false;
	var right = document.getElementsByClassName('right');

	for(var r =0; r<right.length; r++){
		var div = right[r].getElementsByTagName('div')[0],
	  		h2 = right[r].getElementsByTagName('h2')[0],
	  		img = document.getElementsByTagName('img');

	  	    for(var i = 0; i < img.length; i++){
	  	    	fadeIn(img[i]);
	  	    }

	  	    fadeIn(h2);
	  	    fadeIn(div);
	  	    h2.innerHTML = h2.getAttribute('data-title');
			div.innerHTML = div.getAttribute('data-content');
  	}
}

function fadeIn(el){
	el.style.opacity = 0;
  	(function fade() {
  	   var val = parseFloat(el.style.opacity);
	   if ((val += .1) <= 1){
	  	    el.style.opacity = val;
	  	    requestAnimationFrame(fade);
	  	}
  	})();
}