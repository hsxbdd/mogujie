window.onscroll=function(){
	var a = document.body.scrollTop;
	var s = document.getElementById('twxqq');
	var w = document.getElementById('twxq');
	if(a>1270){
	  s.style.display = "block";
	  w.style.display = "none";
	}else{
		s.style.display = "none";
		w.style.display = "block";
	}
}
 