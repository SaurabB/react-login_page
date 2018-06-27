var modal = document.querySelector("#mymodal");

var paybtn = document.querySelector("#paybtn");

var closebtn = document.querySelector("#close");

paybtn.onclick = function(){
	modal.style.display = "block";
}

closebtn.onclick = function(){
	modal.style.display = "none";
}

window.onclick =function(event) {

	if (event.target == modal) {

		modal.style.display = "none";
	}
}

