window.onload = function(){
  var right = document.getElementsByClassName('right'),
  	  left =  document.getElementsByClassName('left');

  for(var i =0; i<3; i++){
  	
  	var h2 = right[i].getElementsByTagName('h2')[0],
  	    div = right[i].getElementsByTagName('div')[0],
  	    gp = left[i].getElementsByClassName('img_gp')[0],
  	    mobile = left[i].getElementsByClassName('mobile')[0],
  	    works = gp.getElementsByTagName('img'),
  	    phone = mobile.getElementsByTagName('img');

  	    for(var w = 0; w < works.length; w++){
  	    	works[w].src = works[w].getAttribute('data-src');
  	    }
  	    for(var p = 0; p < phone.length; p++){
  	    	phone[p].src = phone[p].getAttribute('data-src');
  	    }

  	    fadeIn(gp);
  	    fadeIn(mobile);
  	    fadeIn(right[i]);
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