

function showLayer(layerid) {

    layer = document.getElementById(layerid);   
    layer.style.visibility = "visible";
}

function hideLayer(layerid) { 

    layer = document.getElementById(layerid);
    layer.style.visibility = "hidden";
}

function menu(layerid)
{
	 
	layer = document.getElementById(layerid);
    layer.border="1";
	
}

function menux(layerid)
{
	 
	layer = document.getElementById(layerid);
    layer.border="0";
	
}