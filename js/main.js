var modal = document.getElementById("modal");
var close = document.getElementById("close");
var submit = document.getElementById("submit");


setTimeout(function(){
	modal.className = "on";
},
3000);

close.addEventListener("click", function(){
	modal.className = "off";
});

submit.addEventListener("click", function(){
	event.preventDefault();
	modal.className = "off";
});