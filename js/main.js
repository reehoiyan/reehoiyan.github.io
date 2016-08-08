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
  	    			start();
  	    		}
  	    	}
  	    	works[w].setAttribute('src', works[w].getAttribute('data-src'));
  	    }
  	    for(var p = 0; p < phone.length; p++){
  	    	phone[p].onload = function(){
  	    	}
  	    	phone[p].setAttribute('src', phone[p].getAttribute('data-src'));
  	    }
  }
  
}
function start(){
	 for(var i =0; i<3; i++){

  	var div = right[i].getElementsByTagName('div')[0],
  		h2 = right[i].getElementsByTagName('h2')[0],
  		gp = left[i].getElementsByClassName('img_gp')[0],
  	    mobile = left[i].getElementsByClassName('mobile')[0],
  	    works = gp.getElementsByTagName('img'),
  	    phone = mobile.getElementsByTagName('img');
  	    for(var w = 0; w < works.length; w++){
  	    	fadeIn(works[w]);
  	    }
  	    for(var p = 0; p < phone.length; p++){
  	    	fadeIn(phone[p]);
  	    }
  	    setTime(h2,div);
  	  }
}
function setTime(h2, div){
	setTimeout(function(){
		fadeIn(h2);
		fadeIn(div);
		h2.innerHTML = h2.getAttribute('data-title');
		div.innerHTML = div.getAttribute('data-content');
	}, 100);
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