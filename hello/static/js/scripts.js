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

	setTimeout("setDataStaticHtml1();", 1000);
	setTimeout("setDataStaticHtml2();",2000);

}


function setDataStaticHtml1(){
	var result = document.getElementById('grf1');

	xmlreq = CriaRequest();

	xmlreq.open("GET", "static/html/grf1.html", true);
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

