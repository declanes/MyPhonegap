function abrir(){
	var ref = window.open('http://helpdesk.dlinkddns.com/pop/mobile/Default.asp', 'random_string', 'location=no'); ref.addEventListener('loadstart', function(event) { }); ref.addEventListener('loadstop', function(event) { console.log(event.type + ' - ' + event.url); }); ref.addEventListener('exit', function(event) { }); 
	
	
	}
