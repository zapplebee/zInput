function zRadio(){

var inputNames = [];
$(":radio").map(function(){
  inputNames.push($(this).attr('name'));
});

inputNames = $.unique(inputNames);


$.each(inputNames, function(index,value){

	var $radios = $("input[name='" + value + "']");
	$radios.wrapAll('<div class="zRadioWrapper" />');
	$radios.wrap(function(){ return '<span class="zRadio"><span class="zRadioInner"><span class="zRadioInnermost">' + $(this).attr("title") + '</span></span></span>'});



	});


}