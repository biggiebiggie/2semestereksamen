
	$.get('assets/infografik1.svg', function(data) {
		$("#infografik").append(data.documentElement);
		init();
	});

	function init() {
		$('#info1, #info2, #info3, #info4').hide();


	$('#kn1').click(function() {

		console.log("click");
		$('#info1, #info2, #info3, #info4').hide();
		$('#info1').toggle();
	});
		$('#kn2').click(function() {

		console.log("click");
		$('#info1, #info2, #info3, #info4').hide();
		$('#info2').toggle();
	});
		$('#kn3').click(function() {

		console.log("click");
		$('#info1, #info2, #info3, #info4').hide();
		$('#info3').toggle();
	});
		$('#kn4').click(function() {

		console.log("click");
		$('#info1, #info2, #info3, #info4').hide();
		$('#info4').toggle();
	});
	}

