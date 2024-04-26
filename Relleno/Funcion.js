var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter).checked=true;
	counter++;
	if(counter > 4){
		counter = 1;
	}
},5000);
window.addEventListener("load", function() {
	document.getElementById('Barnie').addEventListener("click", function() {
		alert("Todos somos cacahuate")
	})
});
window.addEventListener("load", function() {
	document.getElementById('Torija').addEventListener("click", function() {
		alert("Todos somos cacahuate")
	})
});
window.addEventListener("load", function() {
	document.getElementById('Chino').addEventListener("click", function() {
		alert("Todos somos cacahuate")
	})
});
window.addEventListener("load", function() {
	document.getElementById('Negro').addEventListener("click", function() {
		alert("Todos somos cacahuate")
	})
});
window.addEventListener("load", function() {
	document.getElementById('Jeton').addEventListener("click", function() {
		alert("Todos somos cacahuate")
	})
});
