menu.onclick = function(){
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav"){
		x.classname += " respoonsive";
	} else{
		x.className = "topnav";
	}
}

