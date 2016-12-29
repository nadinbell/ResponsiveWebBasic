	// show the selected image in large size when clicked on
	$(".crop-img").click(function(){
		$(".big-img").attr('src', 
			$(this).attr('src'));
	});
			
	//set the counter		
	var counter = 1;
		
	//virtually click on the current
	//image to load it into the big image
	$("#img" + counter).click();
	
	// when clicked the backward button select the previous image
	$("#backward").click(function() {
	// go back one in the counter
		counter = counter - 1;
		// if we are below 1 (the first
		// image) loop round to 3 (the
		// last image)
		if (counter < 1){
			counter = 3;
		}
		//virtually click on the current
		//image to load it into the big image
		$("#img" + counter).click();
	});
				
	// when clicked the forward button select the next image	
	$("#forward").click(function() {
		//go next one in the counter
		counter = counter + 1;
		// if we are above 3 (the last
		// image) loop round to 1 (the
		// first image)
		if (counter > 3){
			counter = 1;
		}
		// virtually click on the current
		// image to load it into the big image
		$("#img" + counter).click();
	});