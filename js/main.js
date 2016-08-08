var right = document.getElementsByClassName('right'),
  	  left =  document.getElementsByClassName('left');

 window.onload = function(){
  

  for(var i =0; i<3; i++){

  	var gp = left[i].getElementsByClassName('img_gp')[0],
  	    mobile = left[i].getElementsByClassName('mobile')[0],
  	    works = gp.getElementsByTagName('img'),
  	    phone = mobile.getElementsByTagName('img');

  	    for(var w = 0; w < works.length; w++){
  	    	works[w].onload = function(){
				if(w === works.length){
					for(var t = 0; t < 3; t++){
						var div = right[t].getElementsByTagName('div')[0];
	  						fadeIn(div);
							div.innerHTML = div.getAttribute('data-content');
					}	
				}
  	    	}
  	    	fadeIn(works[w]);
  	    	works[w].setAttribute('src', works[w].getAttribute('data-src'));
  	    }
  	    for(var p = 0; p < phone.length; p++){
  	    	phone[p].onload = function(){
  	    		if(p === phone.length){
					for(var t = 0; t < 3; t++){
						var h2 = right[t].getElementsByTagName('h2')[0];
							fadeIn(h2);
  	    					h2.innerHTML = h2.getAttribute('data-title');
					}
  	    		}
  	    	}
  	    	fadeIn(phone[p]);
  	    	phone[p].setAttribute('src', phone[p].getAttribute('data-src'));
  	    }
  	    
  }
  
}

function fadeIn(el){
	el.style.opacity = 0;
  	(function fade() {
  	   var val = parseFloat(el.style.opacity);
	   if ((val += .01) <= 1){
	  	    el.style.opacity = val;
	  	    requestAnimationFrame(fade);
	  	}
  	})();
}