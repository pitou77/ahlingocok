$(document).ready(function(){
	var creampie = "https://drive.google.com/uc?export=download&id=";
  $('a[href^="https://drive.google.com/file/d/"]').each(function(){ 
		var Janda = $(this).attr("href"); 
		var Perawan = Janda.replace("https://drive.google.com/file/d/", creampie); 
		$(this).attr("id", "crot"); 
		$(this).attr("href", Perawan); 
		var ubah = document.getElementById("crot").href;
		$(this).attr("style", "display:none;"); 
	
		var vbuka = ' pause controls controlsList="nodownload" oncontextmenu="return false;" style="width:100%;height:270px;">\n'+
		'<source src="';
		var vtutup = '" type="video/mp4"></video>';
		$('#iframeHolder').html( '<video ' + vbuka + ubah  + vtutup );
	
	});
	
  $('a[href^="https://1.google.com/file/d/"]').each(function(){
    var LS1 = $(this).attr("href"); 
		var VS1 = LS1.replace("https://1.google.com/file/d/", creampie); 
		$(this).attr("id", "LS1"); 
		$(this).attr("href", VS1); 
  		var Server1 = document.getElementById("LS1").href;
		$(this).attr("style", "display:none;"); 
    		$('#ListServer').html( ' <button id="Serv1">Server Alternatif</button> ' );
    			$("#Serv1").click(function(){
			var vbuka = ' pause controls controlsList="nodownload" oncontextmenu="return false;" style="width:100%;height:270px;">\n'+
			'<source src="';
			var vtutup = '" type="video/mp4"></video>';
			$('#iframeHolder').html( '<video ' + vbuka + Server1  + vtutup );
			});
  });
  $('a[href^="https://2.google.com/file/d/"]').each(function(){
    var LS2 = $(this).attr("href"); 
		var VS2 = LS2.replace("https://2.google.com/file/d/", creampie); 
		$(this).attr("id", "LS2"); 
		$(this).attr("href", VS2); 
  		var Server2 = document.getElementById("LS2").href;
		$(this).attr("style", "display:none;"); 
    		$('#ListServer2').html( ' <button id="Serv2">Server Aman</button> ' );
    			$("#Serv2").click(function(){
			var vbuka = ' pause controls controlsList="nodownload" oncontextmenu="return false;" style="width:100%;height:270px;">\n'+
			'<source src="';
			var vtutup = '" type="video/mp4"></video>';
			$('#iframeHolder').html( '<video ' + vbuka + Server2  + vtutup );
			});
  });	
  $('a[href^="https://mediafire.com/"]').each(function(){
    	var LDL = $(this).attr("href");
    	$(this).attr("id", "LDL"); 
	$(this).attr("style", "display:none;"); 
    	var tautan = encodeURIComponent(LDL);
	document.getElementById("downloadbtn").innerHTML = '<a target="_blank" rel="nofollow" href="https://semawur.com/full/?api=c9b69dd80965197f5477407331e1df8f870372e2&url='+tautan+'"><img alt="Download" src="https://1.bp.blogspot.com/--P4-hAsQK9U/U1W9v0oQ0yI/AAAAAAAABfU/uGg5Lffp_Es/w104/Download.png"/></a>';
	 });
 });
