function fixIt(){
	try{
		$(".bModal").remove();
		$(".popup").remove();
		document.getElementById("visas_style_div").style.visibility = "hidden";
		document.getElementsByClassName("bModal")[0].style.visibility = "hidden";
	}catch(err){}
}