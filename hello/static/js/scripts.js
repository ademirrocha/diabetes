function CriaRequest() {
	try{
		request = new XMLHttpRequest();        
	}catch (IEAtual){

		try{
			request = new ActiveXObject("Msxml2.XMLHTTP");       
		}catch(IEAntigo){

			try{
				request = new ActiveXObject("Microsoft.XMLHTTP");          
			}catch(falha){
				request = false;
			}
		}
	}

	if (!request) 
		alert("Seu Navegador não suporta Ajax!");
	else
		return request;
}



function setData(){

	setTimeout("setDataStaticHtml('grf1', 'grf1.html');", 1000);
	setTimeout("setDataStaticHtml('grf2', 'grf2.html');",2000);
	setTimeout("setDataStaticHtml('grf3', 'grf3.html');",3000);

}


function setDataStaticHtml($el, $file){
	var result = document.getElementById($el);

	xmlreq = CriaRequest();

	xmlreq.open("GET", "static/html/"+$file, true);
	xmlreq.onreadystatechange = function(){
		if (xmlreq.readyState == 4) {
			if (xmlreq.status == 200) {
				result.innerHTML = xmlreq.responseText;

			}else{
				result.innerHTML = "Erro: " + xmlreq.statusText;     
			}
		}
	};
	xmlreq.send(null);
}

function setDataStaticHtml2(){
	var result = document.getElementById('grf2');

	xmlreq = CriaRequest();

	xmlreq.open("GET", "static/html/grf2.html", true);
	xmlreq.onreadystatechange = function(){
		if (xmlreq.readyState == 4) {
			if (xmlreq.status == 200) {
				result.innerHTML = xmlreq.responseText;

			}else{
				result.innerHTML = "Erro: " + xmlreq.statusText;     
			}
		}
	};
	xmlreq.send(null);
}

